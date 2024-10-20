module.exports = `
	query GetCharactersStories($charactersId: ID!) {
		charactersStories(charactersId: $charactersId) {
			id
			title
			description
			type
			modified
			thumbnail{
				extension
				path
			}
			originalissue{
				name
			}
		}
	}
`;
