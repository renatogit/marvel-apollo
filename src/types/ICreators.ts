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
	getCreatorById: (creatorsId: string) => Promise<IResponse<ICreators>>;
	getCreatorComics: (creatorsId: number) => Promise<IResponse<IComics>>;
	getCreatorEvents: (creatorsId: number) => Promise<IResponse<IEvents>>;
	getCreatorSeries: (creatorsId: number) => Promise<IResponse<ISeries>>;
	getCreatorStories: (creatorsId: number) => Promise<IResponse<IStories>>;
}
