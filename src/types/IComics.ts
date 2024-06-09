interface IComics {
	data: Data;
}

interface Data {
	count: number;
	limit: number;
	offset: number;
	total: number;
	results: Result[];
}

interface Variant {
	name: string;
	resourceURI: string;
}

interface Url {
	type: string;
	url: string;
}

interface Date {
	type: string;
	date: string;
}

interface Price {
	type: string;
	price: number;
}

interface Result {
	id: number;
	collections: any[];
	description: string;
	diamondCode: string;
	digitalId: number;
	ean: string;
	format: string;
	isbn: string;
	issn: string;
	issueNumber: number;
	modified: string;
	pageCount: number;
	collectedIssues: any[];
	prices: Price[];
	images: any[];
	dates: Date[];
	resourceURI: string;
	urls: Url[];
	textObjects: any[];
	variants: Variant[];
	title: string;
	upc: string;
	variantDescription: string;
}
