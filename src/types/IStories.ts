interface IStories {
	id: number;
	title: string;
	description: string;
	type: string;
	modified: string;
	thumbnail: IImage[];
	comics?: IComics[];
	series?: ISeries[];
	events?: IEvents[];
	characters?: ICharacters[];
	creators?: ICreators[];
}
