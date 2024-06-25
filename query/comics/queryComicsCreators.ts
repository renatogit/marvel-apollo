module.exports = `
query GetComicsCreators($comicsId: ID!) {
		comicsCreators(comicsId: $comicsId) {
		code
		attributionText
		data {
				count
				limit
				offset
				total
				results {
					id
					collections {
						name
						resourceURI
						role
					}
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
					resourceURI
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
					title
					upc
					variantDescription
				}
		}
	}
}
`;
