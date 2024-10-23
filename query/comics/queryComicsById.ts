module.exports = `
	query GetComicsById($comicsId: ID!) {
		comicsById(comicsId: $comicsId) {
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
					description
					diamondCode
					format
					issueNumber
					modified
					prices{
						type
						price
					}
					pageCount
					title
					upc
					variantDescription
					images {
						extension
						path
					}
					dates {
						date
						type
					}
					characters {
						id
						name
						urls {
							type
							url
						}
						thumbnail {
							extension
							path
						}
						description
						modified
					}
					creators {
						id
						urls {
							type
							url
						}
						thumbnail {
							extension
							path
						}
						modified
						suffix
						fullName
					}
					events {
						id
						title
						description
						urls {
							type
							url
						}
						thumbnail {
							extension
							path
						}
						modified
						start
						end
					}
					stories {
						id
						title
						description
						type
						modified
						thumbnail {
							extension
							path
						}
					}
				}
			}
		}
	}
`;
