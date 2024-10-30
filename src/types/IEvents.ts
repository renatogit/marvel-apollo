import {IUrl, IImage} from './IGenerics';
import {IComics} from './IComics';
import {IStories} from './IStories';
import {ISeries} from './ISeries';
import {ICharacters} from './ICharacters';
import {ICreators} from './ICreators';

export interface IEvents {
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
