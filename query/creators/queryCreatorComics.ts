export default `query GetCreatorComics($creatorsId: ID!) {
	creatorComics(creatorsId: $creatorsId) {
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
}`;
