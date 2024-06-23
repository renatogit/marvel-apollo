const path = require('path');
const {ApolloServer} = require('@apollo/server');
const {loadFilesSync} = require('@graphql-tools/load-files');
const {mergeTypeDefs, mergeResolvers} = require('@graphql-tools/merge');

const schemaFiles = loadFilesSync(path.join(__dirname, '../schemas'), {
	recursive: true,
});

const resolverFiles = loadFilesSync(path.join(__dirname, '../resolvers'), {
	recursive: true,
});

module.exports = new ApolloServer({
	typeDefs: mergeTypeDefs(schemaFiles),
	resolvers: mergeResolvers(resolverFiles),
});
