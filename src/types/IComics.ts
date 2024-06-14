interface ComicsResult {
	id: number;
	digitalId: number;
	title: string;
	issueNumber: number;
	variantDescription: string;
	description: string;
	modified: string;
	isbn: string;
	upc: string;
	diamondCode: string;
	ean: string;
	issn: string;
	format: string;
	pageCount: number;
	resourceURI: string;
	textObjects: TextObjects[];
	urls: Url[];
	series: Uri[];
	variants: Uri[];
	collections: Uri[];
	dates: Dates[];
	prices: Price[];
	thumbnail: Image[];
	images: Image[];
	collectedIssues: Uri[];
	creators: GenericCollections[];
	characters: GenericCollections[];
	stories: GenericCollections[];
	events: GenericCollections[];
}

interface ComicsData {
	offset: number;
	limit: number;
	total: number;
	count: number;
	results: ComicsResult[];
}

interface IComics {
	code: number;
	status: string;
	data: ComicsData;
	attributionText: string;
}
