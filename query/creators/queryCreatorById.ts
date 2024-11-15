export default `query GetCreatorById($creatorsId: ID!) {
	creatorById(creatorsId: $creatorsId) {
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
				suffix
				fullName
				modified
				urls {
					type
					url
				}
				thumbnail {
					extension
					path
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
					thumbnail {
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
					thumbnail {
						extension
						path
					}
				}
				comics {
					id
					title
					description
					modified
					pageCount
					urls {
						type
						url
					}
					collections {
						resourceURI
						name
					}
					dates {
						date
						type
					}
					prices {
						price
						type
					}
					thumbnail {
						extension
						path
					}
					images {
						extension
						path
					}
					collections {
						name
						resourceURI
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
					thumbnail {
						extension
						path
					}
				}
			}
		}
	}
}`;
