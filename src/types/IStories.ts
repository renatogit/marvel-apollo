import {IImage} from './IGenerics';
import {ICreators} from './ICreators';
import {ICharacters} from './ICharacters';
import {IComics} from './IComics';
import {IEvents} from './IEvents';
import {ISeries} from './ISeries';

export interface IStories {
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
