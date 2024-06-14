interface Url {
	type: string;
	url: string;
}

interface Image {
	path: string;
	extension: string;
}

interface Uri {
	name: string;
	resourceURI: string;
	role: string;
}

interface TextObjects {
	type: string;
	text: string;
	language: string;
}

interface Dates {
	type: string;
	date: string;
}

interface Price {
	type: string;
	price: number;
}

interface GenericCollections {
	available: number;
	collectionURI: string;
	items: Uri[];
	returned: number;
}
