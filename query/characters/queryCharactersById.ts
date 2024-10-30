export default `
	query GetCharactersById($charactersId: ID!) {
		charactersById(charactersId: $charactersId) {
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
					urls {
						type
						url
					}
					thumbnail{
						extension
						path
					}
					comics{
						id
						title
						urls {
							type
							url
						}
						thumbnail{
							extension
							path
						}
						description
						modified
						pageCount
						collections{
							name
						}
						dates{
							type
							date
						}
						prices{
							type
							price
						}
						images{
							path
							extension
						}
					}
					events {
						id
						title
						description
						urls {
							type
							url
						}
						modified
						start
						end
						thumbnail{
							extension
							path
						}
					}
					series {
						id
						title
						description
						urls {
							type
							url
						}
						startYear
						endYear
						rating
						modified
						thumbnail{
							extension
							path
						}
					}
					stories {
						id
						title
						description
						type
						modified
						thumbnail{
							extension
							path
						}
						originalissue{
							name
						}
					}
				}
			}
		}
	}
`;
