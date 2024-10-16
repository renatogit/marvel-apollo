module.exports = `query GetComicsEvents($comicsId: ID!) {
	comicsEvents(comicsId: $comicsId) {
		id
		title
		description
		urls{
			type
			url
		}
		thumbnail{
			extension
			path
		}
		modified
		start
		end
	}
}`;
