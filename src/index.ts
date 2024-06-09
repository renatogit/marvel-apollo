import path from 'path';
import {ApolloServer} from '@apollo/server';
import {startStandaloneServer} from '@apollo/server/standalone';
import {loadFilesSync} from '@graphql-tools/load-files';
import {mergeTypeDefs} from '@graphql-tools/merge';
import {resolvers} from './resolvers';
import {Comics} from './resolvers/comics';

const __dirname = path.resolve();

interface IContextValue {
	dataSources: {
		comics: Comics;
	};
}

const typesArray = loadFilesSync(path.join(__dirname, 'src/schema'), {
	extensions: ['graphql'],
	recursive: true,
});

const server = new ApolloServer<IContextValue>({
	typeDefs: mergeTypeDefs(typesArray),
	resolvers
});

const {url} = await startStandaloneServer(server, {
	context: async () => {
		const {cache} = server;
		return {
			dataSources: {
				comics: new Comics({cache}),
			},
		};
	},
	listen: {port: 4000},
});

console.log(`🚀  Server ready at: ${url}`);
