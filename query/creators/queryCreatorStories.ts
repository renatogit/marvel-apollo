export default `query GetCreatorStories($creatorsId: ID!) {
	creatorStories(creatorsId: $creatorsId) {
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
}`;
