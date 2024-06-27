module.exports = `
	query GetComicsById($comicsId: ID!) {
		comicsById(comicsId: $comicsId) {
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
					description
					diamondCode
					digitalId
					ean
					format
					isbn
					issn
					issueNumber
					modified
					pageCount
					resourceURI
					title
					upc
					variantDescription
					collections {
						name
						resourceURI
						role
					}
					collectedIssues {
						resourceURI
						name
					}
					prices {
						type
						price
					}
					images {
						path
						extension
					}
					dates {
						type
						date
					}
					urls {
						type
						url
					}
					textObjects {
						type
						language
						text
					}
					variants {
						name
						resourceURI
					}
					series {
						resourceURI
						name
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
					characters {
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
				}
			}
		}
	}
`;
