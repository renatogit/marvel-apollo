export default `query GetComicsStories($comicsId: ID!) {
	comicsStories(comicsId: $comicsId) {
		id
		title
		description
		type
		modified
		thumbnail{
			extension
			path
		}
	}
}`;
