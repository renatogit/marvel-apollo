import {IUrl, IImage} from './IGenerics';
import {ICreators} from './ICreators';
import {ICharacters} from './ICharacters';
import {IStories} from './IStories';
import {IEvents} from './IEvents';
import {IComics} from './IComics';

export interface ISeries {
	id: number;
	title: string;
	description: string;
	resourceURI: string;
	urls: IUrl[];
	startYear: number;
	endYear: number;
	rating: string;
	modified: string;
	thumbnail: IImage;
	comics?: IComics[];
	stories?: IStories[];
	events?: IEvents[];
	characters?: ICharacters[];
	creators?: ICreators[];
}
