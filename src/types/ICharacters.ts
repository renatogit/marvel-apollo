interface Data {
	offset: number;
	limit: number;
	total: number;
	count: number;
	results: CharactersResult[];
}

interface CharactersResult {
	id: number;
	name: string;
	description: string;
	modified: string;
	thumbnail: Image;
	resourceURI: string;
	comics: GenericCollections;
	series: GenericCollections;
	stories: GenericCollections;
	events: GenericCollections;
	urls: Url[];
}

interface ICharacters {
	code: number;
	status: string;
	data: Data;
	attributionText: string;
}
