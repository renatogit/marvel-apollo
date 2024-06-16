//  The "Query" type is special: it lists all of the available queries that
//  clients can execute, along with the return type for each.
module.exports = /* GraphQL */ `
	type Query {
		comics: ComicsAPI
		comicsById(comicsId: ID!): ComicsAPI
		comicsCharacters(comicsId: ID!): ComicsAPI
		comicsCreators(comicsId: ID!): ComicsAPI
		comicsEvents(comicsId: ID!): ComicsAPI
		comicsStories(comicsId: ID!): ComicsAPI

		characters: CharactersAPI
		charactersById(charactersId: ID!): CharactersAPI
		charactersComics(charactersId: ID!): CharactersAPI
		charactersSeries(charactersId: ID!): CharactersAPI
		charactersEvents(charactersId: ID!): CharactersAPI
		charactersStories(charactersId: ID!): CharactersAPI
	}
`;
