module.exports = /* GraphQL */ `
	type Query {
		comics: ComicDataWrapper
		comicsById(comicsId: ID!): ComicDataWrapper
		comicsCharacters(comicsId: ID!): ComicDataWrapper
		comicsCreators(comicsId: ID!): ComicDataWrapper
		comicsEvents(comicsId: ID!): EventDataWrapper
		comicsStories(comicsId: ID!): ComicDataWrapper

		characters: CharactersAPI
		charactersById(charactersId: ID!): CharactersAPI
		charactersComics(charactersId: ID!): CharactersAPI
		charactersSeries(charactersId: ID!): CharactersAPI
		charactersEvents(charactersId: ID!): CharactersAPI
		charactersStories(charactersId: ID!): CharactersAPI
	}
`;
