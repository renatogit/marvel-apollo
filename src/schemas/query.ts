module.exports = /* GraphQL */ `
	type Query {
		comics: ComicDataWrapper
		comicsById(comicsId: ID!): ComicDataWrapper
		comicsCharacters(comicsId: ID!): [GenericEntity]
		comicsCreators(comicsId: ID!): [GenericEntity]
		comicsEvents(comicsId: ID!): [GenericEntity]
		comicsStories(comicsId: ID!): [GenericEntity]

		characters: CharacterDataWrapper
		charactersById(charactersId: ID!): CharacterDataWrapper
		charactersComics(charactersId: ID!): CharacterDataWrapper
	}
`;
