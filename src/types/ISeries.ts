interface ISeries {
	id: number;
	title: string;
	description: string;
	resourceURI: string;
	urls: IUrl[];
	startYear: number;
	endYear: number;
	rating: string;
	modified: string;
	thumbnail: IImage;
	comics: IComics[];
	stories: IStories[];
	events: IEvents[];
	characters: ICharacters[];
	creators: ICreators[];
}
