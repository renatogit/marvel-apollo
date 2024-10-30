export default `
	query GetCharactersComics($charactersId: ID!) {
		charactersComics(charactersId: $charactersId) {
			id
			title
			urls {
				type
				url
			}
			thumbnail{
				extension
				path
			}
			description
			modified
			pageCount
			collections{
				name
			}
			dates{
				type
				date
			}
			prices{
				type
				price
			}
			images{
				path
				extension
			}
		}
	}
`;
