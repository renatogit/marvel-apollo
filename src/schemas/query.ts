module.exports = /* GraphQL */ `
	type Query {
		comics: ComicDataWrapper
		comicsById(comicsId: ID!): ComicDataWrapper
		comicsCharacters(comicsId: ID!): [GenericComics]
		comicsCreators(comicsId: ID!): [GenericComics]
		comicsEvents(comicsId: ID!): [GenericComics]
		comicsStories(comicsId: ID!): [GenericComics]

		characters: CharacterDataWrapper
		charactersById(charactersId: ID!): CharacterDataWrapper
		charactersComics(charactersId: ID!): CharacterDataWrapper
	}
`;
