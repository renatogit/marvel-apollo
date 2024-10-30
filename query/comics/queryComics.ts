export default `
	query GetComics {
		comics {
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
				}
			}
		}
	}
`;
