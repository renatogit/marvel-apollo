export default `query GetCreatorEvents($creatorsId: ID!) {
	creatorEvents(creatorsId: $creatorsId) {
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
}`;
