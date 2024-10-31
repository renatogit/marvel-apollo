import path from 'path';
import {ApolloServer} from '@apollo/server';
import {loadFilesSync} from '@graphql-tools/load-files';
import {mergeTypeDefs, mergeResolvers} from '@graphql-tools/merge';

const schemaFiles = loadFilesSync(path.join(__dirname, '../schemas'), {
	recursive: true,
});

const resolverFiles = loadFilesSync(path.join(__dirname, '../resolvers'), {
	recursive: true,
});

export default new ApolloServer({
	typeDefs: mergeTypeDefs(schemaFiles),
	resolvers: mergeResolvers(resolverFiles),
});
