module.exports = `query GetComicsCharacters($comicsId: ID!) {
	comicsCharacters(comicsId: $comicsId) {
		id
		name
		description
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
}`;
