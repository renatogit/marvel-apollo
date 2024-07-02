module.exports = `
query GetComicsStories($comicsId: ID!){
	comicsStories(comicsId: $comicsId) {
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
				type
				modified
				thumbnail {
					path
					extension
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
				series {
					available
					returned
					collectionURI
					items {
						resourceURI
						name
					}
				}
				events {
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
						resourceURI
						name
					}
				}
				originalissue{
					resourceURI
					name
				}
			}
		}
	}
}
`;
