export default /* GraphQL */ `
	type Query {
		comics: ComicDataWrapper
		comicsById(comicsId: ID!): ComicDataWrapper
		comicsCharacters(comicsId: ID!): [GenericEntity]
		comicsCreators(comicsId: ID!): [GenericEntity]
		comicsEvents(comicsId: ID!): [GenericEntity]
		comicsStories(comicsId: ID!): [GenericEntity]

		characters: CharacterDataWrapper
		charactersById(charactersId: ID!): CharacterDataWrapper
		charactersComics(charactersId: ID!): [GenericEntity]
		charactersEvents(charactersId: ID!): [GenericEntity]
		charactersSeries(charactersId: ID!): [GenericEntity]
		charactersStories(charactersId: ID!): [GenericEntity]
	}
`;
