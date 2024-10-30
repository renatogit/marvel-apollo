import {ApolloServer as Server} from '@apollo/server';
import {join} from 'path';
import {loadFilesSync as loadFiles} from '@graphql-tools/load-files';
import {mergeTypeDefs as mergeTypeTest} from '@graphql-tools/merge';

export default async ({
	dataSources,
	resolver,
	mock,
	variables,
	entity,
	typeQuery,
}) => {
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
