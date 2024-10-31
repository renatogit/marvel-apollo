export default `
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
					urls {
						type
						url
					}
					thumbnail{
						extension
						path
					}
				}
			}
		}
	}
`;
