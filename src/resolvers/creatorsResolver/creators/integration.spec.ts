import CreatorsResolver from '.';
import DataSourcesCreatorsAPI from '@/dataSources/creators';
import TestServer from '@/configs/test';
import QUERY_GET_CREATORS from '@query/creators/queryCreators';
import MOCK_GET_CREATORS from '@mock/creators/mockCreators';

describe('resolvers/creatorsResolver/integration', () => {
	it('fetches creators and generate snapshots', async () => {
		const args = {
			dataSources: DataSourcesCreatorsAPI,
			resolver: CreatorsResolver.Query.creators,
			mock: MOCK_GET_CREATORS,
			variables: null,
			entity: 'creators',
			typeQuery: 'creators',
		};

		const {server} = await TestServer(args);

		const {body} = await server.executeOperation({
			query: QUERY_GET_CREATORS,
		});

		expect(body).toMatchSnapshot();
	});
});
