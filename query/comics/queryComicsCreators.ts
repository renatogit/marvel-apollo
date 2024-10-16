module.exports = `query GetComicsCreators($comicsId: ID!) {
	comicsCreators(comicsId: $comicsId) {
		id
		urls{
			type
			url
		}
		thumbnail{
			extension
			path
		}
		modified
		suffix
		fullName
	}
}`;
