module.exports = `
query GetComicsCharacters($comicsId: ID!) {
	comicsCharacters(comicsId: $comicsId) {
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
				name
				description
				modified
				resourceURI
				urls {
					type
					url
				}
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
				stories {
					available
					returned
					collectionURI
					items {
						resourceURI
						name
						type
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
				series {
					available
					returned
					collectionURI
					items {
						resourceURI
						name
					}
				}
			}
		}
	}
}`;
