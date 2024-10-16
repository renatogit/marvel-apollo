interface ICharacters {
	id: number;
	name: string;
	description: string;
	modified: string;
	thumbnail: IImage;
	resourceURI: string;
	comics: IGenericCollections;
	series: IGenericCollections;
	stories: IGenericCollections;
	events: IGenericCollections;
	urls: IUrl[];
}
