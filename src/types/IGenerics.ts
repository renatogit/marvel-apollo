interface IResponse<T> {
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

interface IDataSources<T> {
	dataSources: T;
}

interface IEntity<T> {
	[key: string]: T;
}

interface IUrl {
	type: string;
	url: string;
}

interface IImage {
	path: string;
	extension: string;
}

interface IUri {
	name: string;
	resourceURI: string;
	role: string;
}

interface ITextObjects {
	type: string;
	text: string;
	language: string;
}

interface IDates {
	type: string;
	date: string;
}

interface IPrice {
	type: string;
	price: number;
}

interface IID {
	comicsId: string;
	charactersId: string;
}
