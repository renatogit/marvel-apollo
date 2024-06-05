import {ApolloServer} from '@apollo/server';
import {startStandaloneServer} from '@apollo/server/standalone';
import {resolvers} from '../resolvers';
import typesArray from './schema.config';
import {Comics} from '../resolvers/comics';

interface ContextValue {
	dataSources: {
		comics: Comics;
	};
}

const server = new ApolloServer<ContextValue>({
	typeDefs: typesArray,
	resolvers,
});

export const {url} = await startStandaloneServer(server, {
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
