module.exports = `
query GetEvents($comicsId: ID!) {
	comicsEvents(comicsId: $comicsId) {
		code
		status
		copyright
		attributionText
		attributionHTML
		etag
		data {
			count
			limit
			offset
			total
			results {
				id
				title
				description
				resourceURI
				urls {
					type
					url
				}
				modified
				start
				end
				thumbnail {
					extension
					path
				}
				comics {
					available
					returned
					collectionURI
					items {
						resourceURI
						name
					}
				}
				stories {
					available
					returned
					collectionURI
					items {
						resourceURI
						name
					}
				}
				series {
					available
					returned
					collectionURI
					items {
						resourceURI
						name
					}
				}
				characters {
					available
					returned
					collectionURI
					items {
						resourceURI
						name
					}
				}
				creators {
					available
					returned
					collectionURI
					items {
						name
						resourceURI
						role
					}
				}
				next {
					resourceURI
					name
				}
				previous {
					resourceURI
					name
				}
			}
		}
	}
}
`;
