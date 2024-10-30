export interface IResponse<T> {
	code: number;
	status: string;
	data: IResponseData<T>;
	attributionText: string;
}

interface IResponseData<T> {
	offset: number;
	limit: number;
	total: number;
	count: number;
	results: T[];
}

export interface IDataSources<T> {
	dataSources: T;
}

export interface IEntity<T> {
	[key: string]: T;
}

export interface IUrl {
	type: string;
	url: string;
}

export interface IImage {
	path: string;
	extension: string;
}

export interface IUri {
	name: string;
	resourceURI: string;
	role: string;
}

export interface ITextObjects {
	type: string;
	text: string;
	language: string;
}

export interface IDates {
	type: string;
	date: string;
}

export interface IPrice {
	type: string;
	price: number;
}

export interface IID {
	comicsId: string;
	charactersId: string;
}
