import {IResponse, IUrl, IImage} from './IGenerics';
import {IComics} from './IComics';
import {ISeries} from './ISeries';
import {IStories} from './IStories';
import {IEvents} from './IEvents';

export interface ICharacters {
	id: number;
	name: string;
	description: string;
	modified: string;
	thumbnail: IImage;
	urls: IUrl[];
	comics?: IComics[];
	series?: ISeries[];
	stories?: IStories[];
	events?: IEvents[];
}

export interface ICharactersDataSources {
	getCharacters: () => Promise<IResponse<ICharacters>>;
	getCharactersById: (
		charactersId: string
	) => Promise<IResponse<ICharacters>>;
	getCharactersComics: (charactersId: number) => Promise<IResponse<IComics>>;
	getCharactersCreators: (
		charactersId: number
	) => Promise<IResponse<ICharacters>>;
	getCharactersEvents: (charactersId: number) => Promise<IResponse<IEvents>>;
	getCharactersStories: (
		charactersId: number
	) => Promise<IResponse<IStories>>;
	getCharactersSeries: (charactersId: number) => Promise<IResponse<IStories>>;
}
