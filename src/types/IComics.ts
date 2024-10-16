interface IComics {
	id: number;
	digitalId: number;
	title: string;
	issueNumber: number;
	variantDescription: string;
	description: string;
	modified: string;
	upc: string;
	diamondCode: string;
	format: string;
	pageCount: number;
	resourceURI: string;
	textObjects: ITextObjects[];
	urls: IUrl[];
	series: IUri[];
	variants: IUri[];
	collections: IUri[];
	dates: IDates[];
	prices: IPrice[];
	thumbnail: IImage[];
	images: IImage[];
	collectedIssues: IUri[];
	creators: IGenericCollections[];
	characters: IGenericCollections[];
	stories: IGenericCollections[];
	events: IGenericCollections[];
}

interface IComicsDataSources {
	getComicsCharacters: () => Promise<IGenericCollections[]>;
	getComicsCreators: () => Promise<IGenericCollections[]>;
	getComicsEvents: () => Promise<IGenericCollections[]>;
	getComicsStories: () => Promise<IGenericCollections[]>;
}
