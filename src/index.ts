const {startStandaloneServer} = require('@apollo/server/standalone');
const server = require('./server')
const dataSources = require('./dataSources');

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
