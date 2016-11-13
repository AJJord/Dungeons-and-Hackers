Hackerthon: {
	Start: {
		Area: "Opening Ceremony",
		Return : "Welcome to GreatUniHack 2016! 24 straight hours of hacking awaits you, sponsored by great companies such as Netsol and Goldman Sachs. Make sure you find some tools to use, don't forget that code of conduct, and follow the fire exit signs... Oh, what am I saying? Prepare to duel with development, program like a pro, and create something...creative. Have fun out there!"
	}
	Game: {
			"Opening Ceremony":[],
			"Hacking Area 1":[
							{
								Command:"Work",
								StatChange:{
									"Hunger" : 5,
									"Thirst": 10,
									"Insanity": 5,
									"Tiredness": 3
								},
								Progress:1,
								Return:"You work to complete your project."
							},
							{
								Command:"Chill",
								StatChange:{
									"Hunger" : 5,
									"Thirst": 10,
									"Insanity": -3,
									"Tiredness": 3
								},
								Progress:1,
								Return:"You daydream, though you begin to wonder if you should really be working..."
							},
							{
								Command:"Socialise",
								StatChange:{
									"Hunger" : 5,
									"Thirst": 10,
									"Insanity": -10,
									"Tiredness": 10
								},
								Progress:1,
								Return:"You walk around, socialising. It's good to get to know people, especially in a crowded room like this!"

							}
						],
			"Hacking Area 2":[
														{
								Command:"Work",
								StatChange:{
									"Hunger" : 5,
									"Thirst": 10,
									"Insanity": 5,
									"Tiredness": 3
								},
								Progress:1,
								Return:"You work to complete your project."
							},
							{
								Command:"Chill",
								StatChange:{
									"Hunger" : 5,
									"Thirst": 10,
									"Insanity": -3,
									"Tiredness": 3
								},
								Progress:1,
								Return:"You daydream."
							},
							{
								Command:"Socialise",
								StatChange:{
									"Hunger" : 5,
									"Thirst": 10,
									"Insanity": -10,
									"Tiredness": 10
								},
								Progress:1,
								Return:"You walk around, socialising. It's good to get to know people!"

							}
						],
			"Hall":[
														{
								Command:"Work",
								StatChange:{
									"Hunger" : 5,
									"Thirst": 10,
									"Insanity": 5,
									"Tiredness": 3
								},
								Progress:1,
								Return:"You work to complete your project."
							},
							{
								Command:"Chill",
								StatChange:{
									"Hunger" : 5,
									"Thirst": 10,
									"Insanity": -3,
									"Tiredness": 3
								},
								Progress:1,
								Return:"You day dream."
							},
							{
								Command:"Socialise",
								StatChange:{
									"Hunger" : 5,
									"Thirst": 10,
									"Insanity": -10,
									"Tiredness": 10
								},
								Progress:1,
								Return:"You walk around socialising."

							}
						],
			"Workshop":[
							{
								Command:"Work",
								StatChange:{
									"Hunger" : 5,
									"Thirst": 10,
									"Insanity": 5,
									"Tiredness": 3
								},
								Progress:1
								Return:"You follow the workshop. Seems like a nice distraction."
							},
							{
								Command:"Chill",
								StatChange:{
									"Hunger" : 5,
									"Thirst": 10,
									"Insanity": -3,
									"Tiredness": 3
								},
								Progress:1
								Return:"You use the workshop as an excuse to relax. Not good..."
							},
							{
								Command:"Socialise",
								StatChange:{
									"Hunger" : 5,
									"Thirst": 10,
									"Insanity": -10,
									"Tiredness": 10
								},
								Progress:1
								Return:"You chat to the person next to you."
							}
						],
			"Toilets":[
							{
								Command:"Work",
								StatChange:{
									"Hunger" : 5,
									"Thirst": 10,
									"Insanity": 5,
									"Tiredness": 3
								},
								Progress:1,
								Return:"You work to complete your project...in the toilets. Are the hacking areas really that bad?!"
							},
							{
								Command:"Chill",
								StatChange:{
									"Hunger" : 5,
									"Thirst": 10,
									"Insanity": -3,
									"Tiredness": 3
								},
								Progress:1,
								Return:"You daydream on the loo. I guess it makes it a notch more productive."
							},
							{
								Command:"Socialise",
								StatChange:{
									"Hunger" : 5,
									"Thirst": 10,
									"Insanity": -10,
									"Tiredness": 10
								},
								Progress:1,
								Return:"You talk to whoever's on the other side of the door. How strange."

							}
						],
				}
			]
		},
	Stats: [
		{
			Name:"Hunger",
			Val: 0
		},
		{
			Name:"Thirst",
			Val: 0
		},
		{
			Name:"Insanity",
			Val: 0
		},
		{
			Name:"Tiredness",
			Val: 0
		}

	],
	Classes: [
		{
			Name:"Newbie",
			StatMultiplier: 10
		},
		{
			Name:"Nerd",
			StatMultiplier: 0
		},
		{
			Name:"Hacker",
			StatMultiplier: -10
		}
	],
	RandomEvents: [
	{
		Name:"Heart Attack",
		Chance: 0.01
	},
	{
		Name:"Code bug",
		Chance: 10
	},
	{
		Name:"Hardware Failure",
		Chance: 1
	},
	],
	Progress: 0

	}
