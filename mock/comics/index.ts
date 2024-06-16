const mockComicsAPI = {
	data: {
		comics: {
			code: 200,
			attributionText: 'Data provided by Marvel. © 2024 MARVEL',
			data: {
				count: 20,
				limit: 20,
				offset: 0,
				total: 60599,
				results: [
					{
						id: 82967,
						collections: [
							{
								name: 'ULTIMATE SPIDER-MAN VOL. 18: ULTIMATE KNIGHTS TPB (Trade Paperback)',
								resourceURI:
									'http://gateway.marvel.com/v1/public/comics/16621',
								role: 'mock role',
							},
						],
						description: 'mock description',
						diamondCode: 'mock diamondCode',
						digitalId: 0,
						ean: 'mock ean',
						format: 'mock format',
						isbn: 'mock isbn',
						issn: 'mock issn',
						issueNumber: 0,
						modified: '2019-11-07T08:46:15-0500',
						pageCount: 112,
						collectedIssues: [
							{
								resourceURI:
									'http://gateway.marvel.com/v1/public/comics/26616',
								name: 'The Stand: American Nightmares (2009) #5',
							},
						],
						prices: [
							{
								type: 'printPrice',
								price: 0,
							},
						],
						images: [
							{
								path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/80/5e3d7536c8ada',
								extension: 'jpg',
							},
						],
						dates: [
							{
								type: 'onsaleDate',
								date: '2099-10-30T00:00:00-0500',
							},
							{
								type: 'focDate',
								date: '2019-10-07T00:00:00-0400',
							},
						],
						resourceURI:
							'http://gateway.marvel.com/v1/public/comics/82967',
						urls: [
							{
								type: 'detail',
								url: 'http://marvel.com/comics/issue/82967/marvel_previews_2017?utm_campaign=apiRef&utm_source=6ae3d7a8199b3e981ca22b094ee67e7f',
							},
						],
						textObjects: [
							{
								type: 'issue_solicit_text',
								language: 'en-us',
								text: "On the mean streets of the Marvel Universe, the kid gloves come off. Guardian devils, vengeance-seeking vigilantes and enigmatic assassins stalk the city's dark underbelly _ and the urban action unfolds with gritty intensity. The newest entry in Marvel's best-selling Handbook series, OHOTMUMK04 includes in-depth bios on a host of the House's edgiest icons - from Black Panther to Shang-Chi!",
							},
						],
						variants: [
							{
								name: 'Marvel Previews (2017)',
								resourceURI:
									'http://gateway.marvel.com/v1/public/comics/82965',
							},
							{
								name: 'Marvel Previews (2017)',
								resourceURI:
									'http://gateway.marvel.com/v1/public/comics/82970',
							},
						],
						title: 'Marvel Previews (2017)',
						upc: '75960608839302811',
						variantDescription: 'mock variantDescription',
					},
					{
						id: 82965,
						collections: [
							{
								name: 'mock name',
								resourceURI: 'mock resourceURI',
								role: 'mock role',
							},
						],
						description: 'mock description',
						diamondCode: 'JUL190068',
						digitalId: 0,
						ean: 'mock ean',
						format: 'mock format',
						isbn: 'mock isbn',
						issn: 'mock issn',
						issueNumber: 0,
						modified: '2019-08-21T17:11:27-0400',
						pageCount: 152,
						collectedIssues: [
							{
								resourceURI:
									'http://gateway.marvel.com/v1/public/comics/26616',
								name: 'The Stand: American Nightmares (2009) #5',
							},
						],
						prices: [
							{
								type: 'printPrice',
								price: 0,
							},
						],
						images: [],
						dates: [
							{
								type: 'onsaleDate',
								date: '2099-08-28T00:00:00-0500',
							},
							{
								type: 'focDate',
								date: '2019-08-05T00:00:00-0400',
							},
						],
						resourceURI:
							'http://gateway.marvel.com/v1/public/comics/82965',
						urls: [
							{
								type: 'detail',
								url: 'http://marvel.com/comics/issue/82965/marvel_previews_2017?utm_campaign=apiRef&utm_source=6ae3d7a8199b3e981ca22b094ee67e7f',
							},
						],
						textObjects: [],
						variants: [
							{
								name: 'Marvel Previews (2017)',
								resourceURI:
									'http://gateway.marvel.com/v1/public/comics/82967',
							},
							{
								name: 'Marvel Previews (2017)',
								resourceURI:
									'http://gateway.marvel.com/v1/public/comics/82970',
							},
						],
						title: 'Marvel Previews (2017)',
						upc: '75960608839302611',
						variantDescription: 'mock variantDescription',
					},
				],
			},
		},
	},
};

const mockComics = {
	code: 200,
	attributionText: 'Data provided by Marvel. © 2024 MARVEL',
	data: {
		count: 20,
		limit: 20,
		offset: 0,
		total: 60599,
		results: [
			{
				id: 82967,
				collections: [
					{
						name: 'ULTIMATE SPIDER-MAN VOL. 18: ULTIMATE KNIGHTS TPB (Trade Paperback)',
						resourceURI:
							'http://gateway.marvel.com/v1/public/comics/16621',
						role: 'mock role',
					},
				],
				description: 'mock description',
				diamondCode: 'mock diamondCode',
				digitalId: 0,
				ean: 'mock ean',
				format: 'mock format',
				isbn: 'mock isbn',
				issn: 'mock issn',
				issueNumber: 0,
				modified: '2019-11-07T08:46:15-0500',
				pageCount: 112,
				collectedIssues: [
					{
						resourceURI:
							'http://gateway.marvel.com/v1/public/comics/26616',
						name: 'The Stand: American Nightmares (2009) #5',
					},
				],
				prices: [
					{
						type: 'printPrice',
						price: 0,
					},
				],
				images: [
					{
						path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/80/5e3d7536c8ada',
						extension: 'jpg',
					},
				],
				dates: [
					{
						type: 'onsaleDate',
						date: '2099-10-30T00:00:00-0500',
					},
					{
						type: 'focDate',
						date: '2019-10-07T00:00:00-0400',
					},
				],
				resourceURI: 'http://gateway.marvel.com/v1/public/comics/82967',
				urls: [
					{
						type: 'detail',
						url: 'http://marvel.com/comics/issue/82967/marvel_previews_2017?utm_campaign=apiRef&utm_source=6ae3d7a8199b3e981ca22b094ee67e7f',
					},
				],
				textObjects: [
					{
						type: 'issue_solicit_text',
						language: 'en-us',
						text: "On the mean streets of the Marvel Universe, the kid gloves come off. Guardian devils, vengeance-seeking vigilantes and enigmatic assassins stalk the city's dark underbelly _ and the urban action unfolds with gritty intensity. The newest entry in Marvel's best-selling Handbook series, OHOTMUMK04 includes in-depth bios on a host of the House's edgiest icons - from Black Panther to Shang-Chi!",
					},
				],
				variants: [
					{
						name: 'Marvel Previews (2017)',
						resourceURI:
							'http://gateway.marvel.com/v1/public/comics/82965',
					},
					{
						name: 'Marvel Previews (2017)',
						resourceURI:
							'http://gateway.marvel.com/v1/public/comics/82970',
					},
				],
				title: 'Marvel Previews (2017)',
				upc: '75960608839302811',
				variantDescription: 'mock variantDescription',
			},
			{
				id: 82965,
				collections: [
					{
						name: 'mock name',
						resourceURI: 'mock resourceURI',
						role: 'mock role',
					},
				],
				description: 'mock description',
				diamondCode: 'JUL190068',
				digitalId: 0,
				ean: 'mock ean',
				format: 'mock format',
				isbn: 'mock isbn',
				issn: 'mock issn',
				issueNumber: 0,
				modified: '2019-08-21T17:11:27-0400',
				pageCount: 152,
				collectedIssues: [
					{
						resourceURI:
							'http://gateway.marvel.com/v1/public/comics/26616',
						name: 'The Stand: American Nightmares (2009) #5',
					},
				],
				prices: [
					{
						type: 'printPrice',
						price: 0,
					},
				],
				images: [],
				dates: [
					{
						type: 'onsaleDate',
						date: '2099-08-28T00:00:00-0500',
					},
					{
						type: 'focDate',
						date: '2019-08-05T00:00:00-0400',
					},
				],
				resourceURI: 'http://gateway.marvel.com/v1/public/comics/82965',
				urls: [
					{
						type: 'detail',
						url: 'http://marvel.com/comics/issue/82965/marvel_previews_2017?utm_campaign=apiRef&utm_source=6ae3d7a8199b3e981ca22b094ee67e7f',
					},
				],
				textObjects: [],
				variants: [
					{
						name: 'Marvel Previews (2017)',
						resourceURI:
							'http://gateway.marvel.com/v1/public/comics/82967',
					},
					{
						name: 'Marvel Previews (2017)',
						resourceURI:
							'http://gateway.marvel.com/v1/public/comics/82970',
					},
				],
				title: 'Marvel Previews (2017)',
				upc: '75960608839302611',
				variantDescription: 'mock variantDescription',
			},
		],
	},
};

module.exports = {mockComicsAPI, mockComics};
