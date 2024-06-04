import {ApolloServer} from '@apollo/server';
import {startStandaloneServer} from '@apollo/server/standalone';
import {resolvers} from '../resolvers';
import {typeDefs} from '../schema/comics';
import {Comics} from '../resolvers/comics';

interface ContextValue {
	dataSources: {
		comics: Comics;
	};
}

// The ApolloServer constructor requires two parameters:
// your schema definition and your set of resolvers.
const server = new ApolloServer<ContextValue>({
	typeDefs,
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
