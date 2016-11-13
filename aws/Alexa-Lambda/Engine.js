'use strict';

const Messages = {
	moveSuccessful: [
		'You walk to %',
		'You move to %',
		'You crawl to %',
		'You hop to %'
	]
};

module.exports = class Engine {

	get Stats() {
		return `Your current stats are; hunger ${this.Store.stats.hunger}%, thirst ${this.Store.stats.thirst}%,` +
			   `insanity ${this.Store.stats.insanity}%, tiredness ${this.Store.stats.tiredness}%, bladder ${this.Store.stats.bladder}%,` +
               `progress ${this.Store.stats.progress}%,`;
	}

	get Locations() {
		return Object.keys(this.gameData.Areas || {}).map(Key => Key.toLowerCase());
	}

	get Methods() {
		return (this.gameData.Areas[this.Store.location] || []).map(function (Obj) {
			return Obj.Command.toLowerCase();
		});
	}

	randomMessage(key) { return Messages[key][Math.floor(Math.random()*Messages[key].length)] }

	callMethod(method) {
		var returnObj = {
			reply: "Unknown Activity, maybe try in another place"
		};
		var that = this;


		this.gameData.Areas[this.Store.location].forEach(function (Obj) {
			if (Obj.Command !== method) return;

			var statArray = Object.keys(Obj.StatChange);
			for(var i=0; i< statArray.length; i++) {
				that.Store.stats[statArray[i]] += Obj.StatChange[statArray[i]];
				if (that.Store[statArray[i]] < 0) that.Store.stats[statArray[i]] = 0;
			}
			var statsCheck = that.CheckStats();
			returnObj = statsCheck ? {
				reply: statsCheck,
				Stop: true
			}:{
				reply: Obj.Return
			}
		});

		return returnObj;
	}

	CheckStats() {
		var returnText = "You died ";
	    if(this.Store.stats.hunger >= 100)
	        return returnText += "from starving to death. Game over!";
	    else if(this.Store.stats.thirst >= 100)
	        return returnText +="from dehydration. Game over!";
	    else if(this.Store.stats.insanity >= 100)
	        return returnText +="from suicide. Game over!";
	    else if(this.Store.stats.tiredness >= 100)
	        return returnText = "You pass out and wake up after the end of humanity. Game over!"
	    else if(this.Store.stats.progress >= 100)
	        return returnText = "You win the hackerthon! Congratulations!!!"
	    else if(this.Store.stats.bladder >= 100)
	        return returnText += "You piss yourself and are too embarrassed to stay. Game over!"
	}

	moveTo(newLocation) {
		newLocation = newLocation.toLowerCase();
		if (this.Locations.indexOf(newLocation) !== -1) {

			console.log("Start");
			console.log(this.Store.location);
			console.log(newLocation);
			this.Store.location = newLocation;
			console.log(this.Store.location);
			console.log("End");
			return this.randomMessage('moveSuccessful').replace('%', newLocation);

		}
		return 'This location does not exist, possible locations you can move to in this game are: '+ this.Locations.join() +'.';
	}

	runMethod(method) {
		method = method.toLowerCase();
	}

	constructor(Game, Store) {

		if (typeof(Game) === 'object' && Game.Game) {
			Store = Game;
			Game  = Game.Game;
		}

		try {
			this.gameData = require(`./Games/${Game}`);
		} catch (e) {
			this.Error = 'Game not found';
		}

		Store = Store || {};

		this.Store = {
			location:	Store.location	|| this.gameData.Start.Area,
			stats:		Store.stats		|| this.gameData.Stats,
			Game:		Store.Game		|| Game
		};

		console.log("foo");
		console.log(this.Store);
		console.log("foo");

	}



}