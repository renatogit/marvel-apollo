module.exports = /* GraphQL */ `
	type Url {
		type: String
		url: String
	}

	type Image {
		path: String
		extension: String
	}

	type Uri {
		name: String
		resourceURI: String
		role: String
		type: String
	}

	type TextObjects {
		type: String
		text: String
		language: String
	}

	type Dates {
		type: String
		date: String
	}

	type Price {
		type: String
		price: Float
	}

	type GenericCollections {
		available: Float
		returned: Float
		collectionURI: String
		items: [Uri]
	}

	# Entidade Comics
	extend type GenericCollections {
		name: String
		resourceURI: String
	}

	type OriginalIssue {
		name: String
		resourceURI: String
	}

	type GenericComics {
		id: Float
		title: String
		urls: [Url]
		thumbnail: Image
		description: String
		modified: String
	}

	# Entidade Characters
	extend type GenericComics {
		name: String
	}

	# Entidade Creator
	extend type GenericComics {
		suffix: String
		fullName: String
		# TODO verificar se deve fazer chamada de series
		series: GenericCollections
	}

	# Entidade Event
	extend type GenericComics {
		urls: [Url]
		start: String
		end: String
	}

	# Entidade Story
	extend type GenericComics {
		type: String
		originalissue: Uri
	}
`;
