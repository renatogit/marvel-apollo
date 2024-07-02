module.exports = /* GraphQL */ `
	type Query {
		comics: ComicDataWrapper
		comicsById(comicsId: ID!): ComicDataWrapper
		comicsCharacters(comicsId: ID!): CharacterDataWrapper
		comicsCreators(comicsId: ID!): CreatorDataWrapper
		comicsEvents(comicsId: ID!): EventDataWrapper
		comicsStories(comicsId: ID!): ComicDataWrapper

		characters: CharacterDataWrapper
		charactersById(charactersId: ID!): CharacterDataWrapper
		charactersComics(charactersId: ID!): CharacterDataWrapper
		charactersSeries(charactersId: ID!): CharacterDataWrapper
		charactersEvents(charactersId: ID!): CharacterDataWrapper
		charactersStories(charactersId: ID!): CharacterDataWrapper
	}
`;
