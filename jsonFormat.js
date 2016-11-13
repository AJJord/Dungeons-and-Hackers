var Games =
{
	Hackerthon:
	{
		Start:
		{
			Area: "opening ceremony",
			Return: "Test"
		},
		Areas:
		{
			"opening ceremony": [
				{
					Command: "pay attention",
					StatChange:
					{
						"hunger": 2,
						"thirst": 4,
						"bladder": 7,
						"insanity": 2,
						"tiredness": 1,
						"progress": 5,
						"time": 1
					},
					Return: "You pay attention to the opening ceremony."
				},
			],
			"hacking area 1": [
				{
					Command: "work",
					StatChange:
					{
						"hunger": 5,
						"thirst": 10,
						"bladder": 7,
						"insanity": 5,
						"tiredness": 3,
						"progress": 3,
						"time": 1
					},
					Return: "You work to complete your project."
				},
				{
					Command: "chill",
					StatChange:
					{
						"hunger": 5,
						"thirst": 10,
						"bladder": 7,
						"insanity": -20,
						"tiredness": 3,
						"progress": 1,
						"time": 1
					},
					Return: "You day dream."
				},
				{
					Command: "socialise",
					StatChange:
					{
						"hunger": 5,
						"thirst": 10,
						"bladder": 7,
						"insanity": -10,
						"tiredness": 10,
						"progress": 1,
						"time": 1
					},
					Return: "You walk around socialising."

				}
			],
			"hacking area 2": [
				{
					Command: "Work",
					StatChange:
					{
						"hunger": 5,
						"thirst": 10,
						"bladder": 7,
						"insanity": 5,
						"tiredness": 3,
						"progress": 1,
						"time": 1
					},
					Return: "You work to complete your project."
				}
			],
			"canteen": [
				{
					Command: "eat",
					StatChange:
					{
						"hunger": -50,
						"thirst": 3,
						"bladder": 7,
						"insanity": 0,
						"tiredness": 5,
						"progress": 0,
						"time": 1
					},
					Return: "You eat some delicious food."
				},
				{
					Command: "drink",
					StatChange:
					{
						"hunger": 5,
						"thirst": -50,
						"bladder": 7,
						"insanity": 0,
						"tiredness": 2,
						"progress": 0,
						"time": 1
					},
					Return: "You drink a beverage."
				},
			],
			"workshop": [
				{
					Command: "sleep",
					StatChange:
					{
						"hunger": 10,
						"thirst": 10,
						"bladder": 10,
						"insanity": -20,
						"tiredness": -80,
						"progress": 0,
						"time": 20
					},
					Return: "You fall into a deep sleep."
				},
			],
			"hall": [
				{
					Command: "work",
					StatChange:
					{
						"hunger": 5,
						"thirst": 10,
						"bladder": 7,
						"insanity": 5,
						"tiredness": 3,
						"progress": 1,
						"time": 0
					},
					Return: "You work to complete your project."
				},
				{
					Command: "socialise",
					StatChange:
					{
						"Hunger": 5,
						"Thirst": 10,
						"insanity": -10,
						"bladder": 7,
						"tiredness": 10,
						"progress": 1,
						"time": 0
					},
					Return: "You walk around socialising."
				}
			],
			"toilet": [
				{
					Command: "use bladder",
					StatChange:
					{
						"hunger": 5,
						"thirst": 5,
						"bladder": -100,
						"insanity": 5,
						"tiredness": 3,
						"progress": 1,
						"time": 0
					},
					Return: "You work to complete your project."
				}
			],
		},
		Stats: {
			Hunger:0,
			insanity: 0,
			Thirst:0,
			bladder:0,
			tiredness:0,
			progress: 0,
			time:0
		},
	}
}