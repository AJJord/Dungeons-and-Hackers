'use strict';


// States //
// 1. Initialised
// 2. Identified
// 3. Game Started

require('./util.js');
var ddb = require('dynamodb').ddb({
    accessKeyId: 'AKIAIJT2IKOY2U3IDR5A',
    secretAccessKey: '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',
    endpoint: 'dynamodb.eu-west-1.amazonaws.com'
});
var Alexa = require('alexa-app');
var App = new Alexa.app('Dungeons&Hackers');
var Engine = require('./Engine');


App.launch(function (Request, Response) {
    Response.shouldEndSession(false);
    Response.card("Dungeons & Hackers", "This card will in the future have data");

    if (Response.session('State') > 0) Response.fail("You cannot re-launch the game. Restart");
    else {
        Response.session('State', 1);
        Response.say("To begin your adventure you need to log in.");
        Response.say("Say: Load Player : followed by your username");
    }
});
App.sessionEnded(function (Request, Response) {
    Response.say("Cleaning up");
    console.log("Cleaning up");
    // Logout
});

App.intent('loadUser', {
    slots: {
        User: 'User'
    },
    utterances: [
        "Load Player {-|User}",
        "Load User {-|User}",
        "Player {-|User}",
        "User {-|User}",
        "Load Player",
        "Load User",
        "Player",
        "User"
    ]
}, function(Request, Response) {
    Response.shouldEndSession(false);

    if (Response.session('State') != 1) Response.say("You can't loadUser at this time. Restart");
    else if (!Request.slot('User')) Response.say("You must specify a Username to login! Try again...");
    else {
        const User = (Request.slot('User') || '').replace(' ', '');
        Response.session('User', User);
        ddb.getItem('UserData', User, null, {}, function (err, Res, cap) {
            if (err) Response.fail(err).send();
            else if (!Res) Response.say("Unknown Username").send();
            else {
                Response.say("Welcome "+ Request.slot('User') +". ");
                
                if (!Res.Store) {
                    Response.session('State', 2);
                    Res.Store = {};
                    Response.say("You don't have a game in progress");
                } else {
                    Response.session('State', 3);
                    Res.Store = JSON.parse(Res.Store);
                    Response.say("You have a "+ Res.Store.Game +" game in progress");
                }

                Response.session('Store', Res.Store).send();
            }
        });
        return false;
    }
});


function save(User, Store) {
    console.log(Store);
    return new Promise(function (Resolve, Reject) {
        ddb.updateItem('UserData', User, null, {
            Store: {
                value: JSON.stringify(Store),
                action: 'PUT'
            }
        }, {}, function (err, res, cap) {
            if (err) {
                console.error(err);
                Reject(err);
            } else Resolve(res);
        });
    });
}

const Games = {
    hackathon: 1,
    maze: 1
}

App.intent('newGame', {
	slots: {
        Game: 'Game'
    },
	utterances: [
        "Start {-|Game}",
        "Let's Play {-|Game}",
        "New Game of {-|Game}"
	]
}, function(Request, Response) {
    Response.shouldEndSession(false);

    const GameMode = Request.slot('Game').toLowerCase();

    if (Response.session('State') < 2 && Response.session('State') > 3) Response.say("You can't use newGame at this time. Restart");
    else if (!GameMode) Response.say("You must specify a Game to Start! Try again...");
    else if (!Games[GameMode]) {
        Response.say("Please choose a valid Game. ");
        // Response.say("Your choices are: "+ join(Object.keys(Games)));
    } else {
        const Game = new Engine( GameMode );
        save( Response.session('User'), Game.Store ).then(function () {
            Response.session('Store', Game.Store);
            Response.session('State', 3);
            Response.say("You chose to play "+ GameMode +" .");
            Response.say("Good Luck!").send();
        }).catch(Response.say);
        return false;
    }
});


App.intent('help', {
    slots: {},
    utterances: [
        "I require assistance",
        "What can I say",
        "Help me",
        "Help"
    ]
}, function(Request, Response) {
    Response.shouldEndSession(false);

    switch( Response.session('State') ) {
        case 3: const Game = buildEngine(Response);
                if (!Game) {
                    Response.say("Failed to build Engine");
                    return true;
                }
                Response.say("As well as Move, you can do Activities such as: "+ Game.Methods.join() +". "); 
                Response.say("You can also start a new game by saying: Start followed by the name of the Game");          break;
        case 2: Response.say("You need to start a new game, do this by saying: Start followed by the name of the Game."); break;
        case 1: Response.say("You need to identify yourself, do this by saying: Load Player followed by your username."); break;
        default:Response.say("Error");
    }
});

App.intent('move', {
    slots: {
        Location: 'Location'
    },
    utterances: [
        "Move to {-|Location}",
        "Go to {-|Location}",
        "Move {-|Location}",
        "Go {-|Location}"
    ]
}, function(Request, Response) {
    Response.shouldEndSession(false);

    if (Response.session('State') != 3) Response.say("You can't use move at this time. Start a Game!");
    else if (!Request.slot('Location')) Response.say("You must specify a Location to Move! Try again...");
    else {

        const Game = buildEngine(Response);
        if (!Game) {
            Response.say("Failed to build Engine");
            return true;
        }


        const Movement = Game.moveTo( Request.slot('Location') );
        var Store = Response.session('Store');
        Store.location = Game.Store.location;
        Response.session('Store', Store);


        save( Response.session('User'), Store ).then(function () {
            Response.say( Movement ).send();
        }).catch(Response.say);
        return false;

    }
});


App.intent('where', {
    slots: {},
    utterances: [
        "Where am I",
        "Where"
    ]
}, function(Request, Response) {
    Response.shouldEndSession(false);
    if (Response.session('State') != 3) Response.say("You are not in a game. Start a Game!");
    else Response.say("You are at: "+ Response.session('Store').location)
});


App.intent('listLocations', {
    slots: {},
    utterances: [
        "Where can I go",
        "Where is there to go"
    ]
}, function(Request, Response) {
    Response.shouldEndSession(false);
    if (Response.session('State') != 3) Response.say("You are not in a game. Start a Game!");
    else {
        const Game = buildEngine(Response);
        if (Game)
            Response.say("The locations you can go to are: "+ Game.Locations.join());
    }
});


App.intent('spendTime', {
    slots: {
        Method: 'Method'
    },
    utterances: [
        "Spend Time {-|Method}",
        "Waste Time {-|Method}",
        "Pass Time {-|Method}"
    ]
}, function(Request, Response) {
    if (Response.session('State') != 3) Response.say("You are not in a game. Start a Game!");
    else if (!Request.slot('Method')) Response.say("You must specify a Method to Waste Time! Try again...");
    else {
        const Game = buildEngine(Response);
        if (Game) {
            const Method = Game.callMethod( Request.slot('Method') );
            Response.shouldEndSession(!!Method.Stop);
            Response.session('Store', Game.Store);

            save( Response.session('User'), Game.Store ).then(function () {
                Response.say( Method.reply ).send();
            }).catch(Response.say);
            return false;
        }
    }
});


App.intent('stats', {
    slots: {},
    utterances: [
        'how am I doing',
        'tell me my statistics',
        'satistics',
        'stats',
    ]
}, function(Request, Response) {
    Response.shouldEndSession(false);
    if (Response.session('State') != 3) Response.say("You are not in a game. Start a Game!");
    else {
        const Game = buildEngine(Response);
        if (Game)
            Response.say( Game.Stats );
    }
});

function buildEngine(Response) {
    const Store = Response.session('Store');
    if (!Store || !Store.Game) {
        return;
    }
    return new Engine( Store );
}

App.intent('end', {
    slots: {},
    utterances: [
        `Rage Quit`
    ]
}, function(Request, Response) {
    Response.say("Game Over");
    Response.clearSession();
});

App.pre = function(Request, Response, Type) {
    // console.log(Request);
    // console.log(Response);
    // console.log(Type);
};

App.error = function(Error, Request, Response) {
    console.error(Error);
    console.error(Error.stack);
    console.error(Error.lineNumber);
    // console.log(Request);
    // console.log(Response);
}


console.log(App.schema());
console.log(App.utterances());

exports.handler = App.lambda();
