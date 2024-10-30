import {startStandaloneServer} from '@apollo/server/standalone';
import server from './server';
import dataSources from './dataSources';

const url = startStandaloneServer(server, {
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

url.then(({url}) => console.warn(`🚀 Server ready at:\x1b[33m ${url}`));
