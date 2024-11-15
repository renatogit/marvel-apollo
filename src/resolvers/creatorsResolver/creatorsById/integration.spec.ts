import DataSourcesCreatorByIdAPI from '@/dataSources/creators';
import CreatorByIdResolver from '.';
import ServerGetCreatorById from '@/configs/test';
import QUERY_GET_CREATOR_BY_ID from '@query/creators/queryCreatorById';
import MOCK_GET_CREATOR_BY_ID from '@mock/creators/mockCreatorById';

describe('resolvers/creatorByIdResolver/integration', () => {
	const variables = {creatorsId: 'fake-code'};

	it('fetches creatorById and generate snapshots', async () => {
		const args = {
			dataSources: DataSourcesCreatorByIdAPI,
			resolver: CreatorByIdResolver.Query.creatorById,
			mock: MOCK_GET_CREATOR_BY_ID,
			variables,
			entity: 'creators',
			typeQuery: 'creatorById',
		};

		const {server} = await ServerGetCreatorById(args);

		const {body} = await server.executeOperation({
			query: QUERY_GET_CREATOR_BY_ID,
			variables,
		});

		expect(body).toMatchSnapshot();
	});
});
