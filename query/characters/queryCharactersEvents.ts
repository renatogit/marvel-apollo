module.exports = `
	query GetCharactersEvents($charactersId: ID!) {
		charactersEvents(charactersId: $charactersId) {
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
			thumbnail{
				extension
				path
			}
		}
	}
`;
