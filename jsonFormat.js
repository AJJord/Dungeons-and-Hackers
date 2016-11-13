var Games =
{
	Hackerthon:
	{
		Start:
		{
			Area: "Opening Ceremony",
			Return: "Test"
		},
		Areas:
		{
			"Opening Ceremony": [
				{
					Command: "Pay Attention",
					StatChange:
					{
						"Hunger": 2,
						"Thirst": 4,
						"Insanity": 2,
						"Tiredness": 1,
						"Progress": 5
					},
					Return: "You pay attention to the opening ceremony."
				},
			],
			"Hacking Area 1": [
				{
					Command: "Work",
					StatChange:
					{
						"Hunger": 5,
						"Thirst": 10,
						"Insanity": 5,
						"Tiredness": 3,
						"Progress": 1
					},
					Return: "You work to complete your project."
				},
				{
					Command: "Chill",
					StatChange:
					{
						"Hunger": 5,
						"Thirst": 10,
						"Insanity": -3,
						"Tiredness": 3,
						"Progress": 1
					},
					Return: "You day dream."
				},
				{
					Command: "Socialise",
					StatChange:
					{
						"Hunger": 5,
						"Thirst": 10,
						"Insanity": -10,
						"Tiredness": 10,
						"Progress": 1
					},
					Return: "You walk around socialising."

				}
			],
			"Hacking Area 2": [
				{
					Command: "Work",
					StatChange:
					{
						"Hunger": 5,
						"Thirst": 10,
						"Insanity": 5,
						"Tiredness": 3,
						"Progress": 1
					},
					Return: "You work to complete your project."
				},
				{
					Command: "Chill",
					StatChange:
					{
						"Hunger": 5,
						"Thirst": 10,
						"Insanity": -3,
						"Tiredness": 3,
						"Progress": 1
					},
					Return: "You day dream."
				},
				{
					Command: "Socialise",
					StatChange:
					{
						"Hunger": 5,
						"Thirst": 10,
						"Insanity": -10,
						"Tiredness": 10,
						"Progress": 1
					},
					Return: "You walk around socialising."

				}
			],
			"Hall": [
				{
					Command: "Work",
					StatChange:
					{
						"Hunger": 5,
						"Thirst": 10,
						"Insanity": 5,
						"Tiredness": 3,
						"Progress": 1
					},
					Return: "You work to complete your project."
				},
				{
					Command: "Chill",
					StatChange:
					{
						"Hunger": 5,
						"Thirst": 10,
						"Insanity": -3,
						"Tiredness": 3,
						"Progress": 1
					},
					Return: "You day dream."
				},
				{
					Command: "Socialise",
					StatChange:
					{
						"Hunger": 5,
						"Thirst": 10,
						"Insanity": -10,
						"Tiredness": 10,
						"Progress": 1
					},
					Return: "You walk around socialising."

				}
			],
			"Workshop": [
				{
					Command: "Work",
					StatChange:
					{
						"Hunger": 5,
						"Thirst": 10,
						"Insanity": 5,
						"Tiredness": 3,
						"Progress": 1
					},
					Return: "You work to complete your project."
				},
				{
					Command: "Chill",
					StatChange:
					{
						"Hunger": 5,
						"Thirst": 10,
						"Insanity": -3,
						"Tiredness": 3,
						"Progress": 1
					},
					Return: "You day dream."
				},
				{
					Command: "Socialise",
					StatChange:
					{
						"Hunger": 5,
						"Thirst": 10,
						"Insanity": -10,
						"Tiredness": 10,
						"Progress": 1
					},
					Return: "You walk around socialising."

				}
			],
			"Toilets": [
				{
					Command: "Work",
					StatChange:
					{
						"Hunger": 5,
						"Thirst": 10,
						"Insanity": 5,
						"Tiredness": 3,
						"Progress": 1
					},
					Return: "You work to complete your project."
				},
				{
					Command: "Chill",
					StatChange:
					{
						"Hunger": 5,
						"Thirst": 10,
						"Insanity": -3,
						"Tiredness": 3,
						"Progress": 1
					},
					Return: "You day dream."
				},
				{
					Command: "Socialise",
					StatChange:
					{
						"Hunger": 5,
						"Thirst": 10,
						"Insanity": -10,
						"Tiredness": 10,
						"Progress": 1
					},
					Return: "You walk around socialising."

				}
			],
			"Kill House": [
				{
					Command: "Escape",
					StatChange:
					{
						"Hunger": 5,
						"Thirst": 10,
						"Insanity": -50,
						"Tiredness": 3,
						"Progress": 1
					},
					Return: "You work to complete your project."
				},
				{
					Command: "Die",
					StatChange:
					{
						"Hunger": 5,
						"Thirst": 10,
						"Insanity": -3,
						"Tiredness": 3,
						"Progress": 1
					},
					Return: "You day dream."
				}
			]
		},
		Stats: {
			Hunger:0,
			Insanity: 0,
			Thirst:0,
			Tiredness:0,
			Progress: 0
		},
		Classes: [
			{
				Name: "Newbie",
				StatMultiplier: 10
			},
			{
				Name: "Nerd",
				StatMultiplier: 0
			},
			{
				Name: "Hacker",
				StatMultiplier: -10
			}
		],
		RandomEvents: [
			{
				Name: "Heart Attack",
				Chance: 0.01
			},
			{
				Name: "Code bug",
				Chance: 10
			},
			{
				Name: "Hardware Failure",
				Chance: 1
			},
		],
		Progress: 0
	}
}