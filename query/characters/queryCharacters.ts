module.exports = `
	query GetCharacters {
		characters {
			code
			status
			copyright
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
					thumbnail{
						extension
						path
					}
					comics{
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
						resourceURI
						name
					}
				}
			}
		}
	}
`;
