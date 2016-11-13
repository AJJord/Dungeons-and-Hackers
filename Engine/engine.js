

var game;
var data;
function StartGame(name)
{
	game = Games[name];
	data = { CurrentLocation : game.Start.Area, Stats : game.Stats, Stop: false };
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
	var returnText;
	game.Areas[data.CurrentLocation].forEach(function(object)
	{
		if(object.Command === command)
		{	
			var statArray = Object.keys(object.StatChange)
			for(var i = 0; i < statArray.length; i++)
			{
				data.Stats[statArray[i]] += object.StatChange[statArray[i]];
				if(data.Stats[statArray[i]] < 0) 	data.Stats[statArray[i]] = 0;
			}
			var statsCheck = CheckStats();
			if(statsCheck)
			{
				
				data.Stop = true;
				returnText = statsCheck;
			}
			else
			{
			returnText = object.Return;
			}
		}	
	});
	return returnText;
}

function CheckStats ()
{
	var returnText = "You died ";
		if(data.Stats.hunger >= 100) 
		{
			return returnText += "from starving to death. Game over!";
		}
		else if(data.Stats.thirst >= 100) 
		{
			return returnText +="from dehydration. Game over!";
		}
		else if(data.Stats.insanity >= 100)
		{
			return returnText +="from suicide. Game over!";
		}
		else if(data.Stats.tiredness >= 100)
		{
			return returnText = "You pass out and wake up after the end of humanity. Game over!"
		}
		else if(data.Stats.progress >= 100)
		{
			return returnText = "You win the hackerthon! Congradulations!!!"
		}
		else if(data.Stats.bladder >= 100)
		{
			return returnText += "You piss yourself and are too embarrassed to stay. Game over!"
		}
}

function SayStats()
{
		return `Your current stats are; hunger ${data.Stats.hunger}%, thirst ${data.Stats.thirst}%,` +
					`insanity ${data.Stats.insanity}%, tiredness ${data.Stats.tiredness}%, bladder ${data.Stats.bladder}%,` + 
					`progress ${data.Stats.progress}%,`
}
