export default `query GetCreators {
	creators {
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
			}
		}
	}
}`;
