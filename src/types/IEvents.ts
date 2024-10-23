interface IEvents {
	id: number;
	title: string;
	description: string;
	resourceURI: string;
	urls: IUrl[];
	modified: string;
	start: string;
	end: string;
	thumbnail: IImage;
	comics?: IComics[];
	stories?: IStories[];
	series?: ISeries[];
	characters?: ICharacters[];
	creators?: ICreators[];
}
