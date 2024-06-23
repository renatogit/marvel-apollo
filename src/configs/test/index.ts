const {ApolloServer: Server} = require('@apollo/server');
const {join} = require('path');
const {loadFilesSync: loadFiles} = require('@graphql-tools/load-files');
const {mergeTypeDefs: mergeTypeTest} = require('@graphql-tools/merge');

module.exports = async (dataSources, resolver, mock, params) => {
	const instanceDataSourcesAPI = new dataSources();
	instanceDataSourcesAPI.get = jest.fn(() => mock);

	const method = Object.keys(resolver.Query)[0];
	const entity = method.replace(/([a-z](?=[A-Z]))/g, '$1 ').split(' ')[0];

	const mockResponse = await resolver.Query[method]({}, params, {
		dataSources: {[entity]: instanceDataSourcesAPI},
	});

	const schemaFiles = loadFiles(join(__dirname, '../../schemas'), {
		recursive: true,
	});

	const server = new Server({
		typeDefs: mergeTypeTest(schemaFiles),
		resolvers: {
			Query: {
				[method]: () => mockResponse,
			},
		},
	});

	return {server, mockResponse};
};
