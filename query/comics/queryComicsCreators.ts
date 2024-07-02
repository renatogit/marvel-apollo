module.exports = `
query GetComicsCreators($comicsId: ID!) {
		comicsCreators(comicsId: $comicsId) {
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
				firstName
				middleName
				lastName
				suffix
				fullName
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
				series {
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
				comics {
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
			}

		}
	}
}
`;
