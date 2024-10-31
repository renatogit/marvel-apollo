import {
	IResponse,
	ITextObjects,
	IUri,
	IUrl,
	IDates,
	IPrice,
	IImage,
} from './IGenerics';
import {ICreators} from './ICreators';
import {ICharacters} from './ICharacters';
import {IStories} from './IStories';
import {IEvents} from './IEvents';

export interface IComics {
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
	creators?: ICreators[];
	characters?: ICharacters[];
	stories?: IStories[];
	events?: IEvents[];
}

export interface IComicsDataSources {
	getComics: () => Promise<IResponse<IComics>>;
	getComicsById: (comicsId: string) => Promise<IResponse<IComics>>;
	getComicsCharacters: (comicsId: number) => Promise<IResponse<ICharacters>>;
	getComicsCreators: (comicsId: number) => Promise<IResponse<ICreators>>;
	getComicsEvents: (comicsId: number) => Promise<IResponse<IEvents>>;
	getComicsStories: (comicsId: number) => Promise<IResponse<IStories>>;
}
