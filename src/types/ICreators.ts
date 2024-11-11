import {IUrl, IImage, IResponse} from './IGenerics';
import {IComics} from './IComics';
import {ISeries} from './ISeries';
import {IStories} from './IStories';
import {IEvents} from './IEvents';

export interface ICreators {
	id: number;
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

export interface ICreatorsDataSources {
	getCreators: () => Promise<IResponse<ICreators[]>>;
	getCreatorsById: (creatorsId: string) => Promise<IResponse<ICreators>>;
	getCreatorsComics: (creatorsId: number) => Promise<IResponse<IComics>>;
	getCreatorsEvents: (creatorsId: number) => Promise<IResponse<IEvents>>;
	getCreatorsSeries: (creatorsId: number) => Promise<IResponse<ISeries>>;
	getCreatorsStories: (creatorsId: number) => Promise<IResponse<IStories>>;
}
