const {ApolloServer: Server} = require('@apollo/server');
const {join} = require('path');
const {loadFilesSync: loadFiles} = require('@graphql-tools/load-files');
const {mergeTypeDefs: mergeTypeTest} = require('@graphql-tools/merge');

module.exports = async ({
	dataSources,
	resolver,
	mock,
	variables,
	entity,
	typeQuery,
}: any) => {
	const instanceDataSourcesAPI = new dataSources();
	instanceDataSourcesAPI.get = jest.fn(() => mock);

	const mockResponse = await resolver({}, variables, {
		dataSources: {[entity]: instanceDataSourcesAPI},
	});

	const schemaFiles = loadFiles(join(__dirname, '../../schemas'), {
		recursive: true,
	});

	const server = new Server({
		typeDefs: mergeTypeTest(schemaFiles),
		resolvers: {
			Query: {
				[typeQuery]: () => mockResponse,
			},
		},
	});

	return {server, mockResponse};
};
