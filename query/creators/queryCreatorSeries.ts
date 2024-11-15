export default `query GetCreatorSeries($creatorsId: ID!) {
	creatorSeries(creatorsId: $creatorsId) {
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
}`;
