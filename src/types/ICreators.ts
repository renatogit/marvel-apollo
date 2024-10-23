interface ICreators {
	id: number;
	firstName: string;
	middleName: string;
	lastName: string;
	suffix: string;
	fullName: string;
	modified: string;
	urls: IUrl[];
	thumbnail: IImage[];
	series?: ISeries[];
	stories?: IStories[];
	comics?: IComics[];
	events?: IEvents[];
}
