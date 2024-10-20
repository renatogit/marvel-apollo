module.exports = `
	query GetCharactersEvents($charactersId: ID!) {
		charactersSeries(charactersId: $charactersId) {
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
			thumbnail{
				extension
				path
			}
		}
	}
`;
