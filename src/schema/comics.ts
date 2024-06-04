// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
export const typeDefs = `#graphql
	type ComicsGenericValues {
		type: String
		name: String
		url: String
		resourceURI: String
		date: String
		price: Float
		path: String
		extension: String
		role: String
		language: String
		text: String
	}

	type ComicsGenericKeys {
		available: Float,
		collectionURI: String
		items: [ComicsGenericValues]
		returned: String
	}

	type ComicsResult {
		id: Float,
		digitalId: Float,
		title: String,
		issueNumber: Float,
		variantDescription: String,
		description: String,
		modified: String,
		isbn: String,
		upc: String,
		diamondCode: String,
		ean: String,
		issn: String,
		format: String,
		pageCount: Float,
		textObjects: [ComicsGenericValues],
		resourceURI: String,
		urls: [ComicsGenericValues],
		series: [ComicsGenericValues],
		variants: [ComicsGenericValues],
		collections: [String],
		dates: [ComicsGenericValues],
		prices: [ComicsGenericValues],
		thumbnail: [ComicsGenericValues],
		images: [ComicsGenericValues],
		collectedIssues: [ComicsGenericValues],
		creators: [ComicsGenericKeys],
		characters: [ComicsGenericKeys],
		stories: [ComicsGenericKeys],
		events: [ComicsGenericKeys]
	}

	type MarvelAPIData {
		"""
		The requested offset (skipped results) of the call
		"""
		offset:	Float

		"""
		The requested result limit
		"""
		limit:	Float

		"""
		The total number of results available
		"""
		total:	Float

		"""
		The total number of results returned by this call
		"""
		count:	Float

		# """
		# The list of entities returned by the call
		# """
		results: [ComicsResult]
	}

	type ComicsAPI {
		"""
		The HTTP status code of the returned result
		"""
		code: Float

		"""
		A string description of the call status
		"""
		status:	String

		"""
		A container	The results returned by the call
		"""
		data: MarvelAPIData

		"""
		A digest value of the content
		"""
		etag: String

		"""
		The copyright notice for the returned result
		"""
		copyright: String

		"""
		The attribution notice for this result
		"""
		attributionText: String

		"""
		An HTML representation of the attribution notice for this result
		"""
		attributionHTML: String
	}

  	# The "Query" type is special: it lists all of the available queries that
  	# clients can execute, along with the return type for each. In this
  	# case, the "books" query returns an array of zero or more Books (defined above).
  	type Query {
  		comics: ComicsAPI
  	}
`;
