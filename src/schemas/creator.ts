export default /* GraphQL */ `
	type Creator {
		"""
		The unique ID of the creator resource
		"""
		id: Float
		"""
		The first name of the creator
		"""
		firstName: String
		"""
		The middle name of the creator
		"""
		middleName: String
		"""
		The last name of the creator
		"""
		lastName: String
		"""
		The suffix or honorific for the creator
		"""
		suffix: String
		"""
		The full name of the creator (a space-separated concatenation of the above four fields)
		"""
		fullName: String
		"""
		The date the resource was most recently modified
		"""
		modified: String
		"""
		The canonical URL identifier for this resource
		"""
		resourceURI: String
		"""
		A set of public web site URLs for the resource
		"""
		urls: [Url]
		"""
		The representative image for this creator
		"""
		thumbnail: Image
		"""
		A resource list containing the series which feature work by this creator
		"""
		series: GenericCollections
		"""
		A resource list containing the stories which feature work by this creator
		"""
		stories: GenericCollections
		"""
		A resource list containing the comics which feature work by this creator
		"""
		comics: GenericCollections
		"""
		A resource list containing the events which feature work by this creator.
		"""
		events: GenericCollections
	}

	type CreatorDataContainer {
		"""
		The requested offset (number of skipped results) of the call
		"""
		offset: Float
		"""
		The requested result limit
		"""
		limit: Float
		"""
		The total number of resources available given the current filter set
		"""
		total: Float
		"""
		The total number of results returned by this call
		"""
		count: Float
		"""
		The list of creators returned by the call.
		"""
		results: [Creator]
	}

	type CreatorDataWrapper {
		"""
		The HTTP status code of the returned result
		"""
		code: Float
		"""
		A string description of the call status
		"""
		status: String
		"""
		The copyright notice for the returned result
		"""
		copyright: String
		"""
		The attribution notice for this result. Please display either this notice or the contents of the attributionHTML field on all screens which contain data from the Marvel Comics API
		"""
		attributionText: String
		"""
		An HTML representation of the attribution notice for this result. Please display either this notice or the contents of the attributionText field on all screens which contain data from the Marvel Comics API
		"""
		attributionHTML: String
		"""
		The results returned by the call
		"""
		data: CreatorDataContainer
		"""
		A digest value of the content returned by the call.
		"""
		etag: String
	}
`;
