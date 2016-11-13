

var game;
var data;
function StartGame(name)
{
	game = Games[name];
	data = { CurrentLocation : game.Start.Area, Stats : game.Stats };
	return game.Start;
}

function Walk(toLocation)
{
	data.CurrentLocation = toLocation;
	return "You walk to " + toLocation;
	
}

function CurrentCommands(currentLocation)
{
	var commands = []	
		//This might not work on the echo (ES5 feature)
		Game.Areas[currentLocation].forEach(function(object) 
		{
			commands.push(object.Command);
		});		
	return commands;
}

function RunCommand(command)
{
	game.Areas[data.CurrentLocation].forEach(function(object)
	{
		if(object.Command === command)
		{	
			var statArray = Object.keys(object.StatChange)
			for(var i = 0; i < statArray.length; i++)
			{
				data.Stats[statArray[i]] += object.StatChange[statArray[i]];
			}
		}	
	});
}

function CheckProgress ()
{
	
}





