Hackerthon: {
	Start: {
		Area: "Opening Ceremony",
		Return : ""
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
	
	
