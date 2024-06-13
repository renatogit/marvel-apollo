const path = require('path');
const {ApolloServer} = require('@apollo/server');
const {startStandaloneServer} = require('@apollo/server/standalone');
const {loadFilesSync} = require('@graphql-tools/load-files');
const {mergeTypeDefs, mergeResolvers} = require('@graphql-tools/merge');

const dataSources = require('./dataSources');

const schemaFiles = loadFilesSync(path.join(__dirname, 'schemas'), {
	extensions: ['graphql'],
	recursive: true,
});

const resolverFiles = loadFilesSync(path.join(__dirname, 'resolvers'), {
	recursive: true,
});

const server = new ApolloServer({
	typeDefs: mergeTypeDefs(schemaFiles),
	resolvers: mergeResolvers(resolverFiles),
});

const url: Promise<{url: string}> = startStandaloneServer(server, {
	context: async () => {
		const {cache} = server;
		return {
			dataSources: {
				...dataSources(cache),
			},
		};
	},
	listen: {port: 4000},
});

console.log('🚀 Server ready at:\x1b[33m http://localhost:4000');
