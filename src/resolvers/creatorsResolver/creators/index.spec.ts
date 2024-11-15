import DataSourcesCreatorsAPI from '@/dataSources/creators';
import CreatorsResolver from '.';
import ServerGetCreators from '@/configs/test';
import QUERY_GET_CREATORS from '@query/creators/queryCreators';
import MOCK_GET_CREATORS from '@mock/creators/mockCreators';
import testRequestError from '@/utils/testRequestError';

describe('resolvers/creatorsResolver/creators', () => {
	it('should return the creators entity data', async () => {
		const args = {
			dataSources: DataSourcesCreatorsAPI,
			resolver: CreatorsResolver.Query.creators,
			mock: MOCK_GET_CREATORS,
			variables: null,
			entity: 'creators',
			typeQuery: 'creators',
		};

		const {server, mockResponse} = await ServerGetCreators(args);

		const {body} = await server.executeOperation({
			query: QUERY_GET_CREATORS,
		});

		if (body.kind === 'single') {
			expect(body.singleResult.errors).toBeUndefined();
			expect(body.singleResult.data.creators).toEqual(mockResponse);
		}
	});

	it('should return a creators request catch error', async () => {
		testRequestError(
			CreatorsResolver.Query.creators,
			{},
			{
				entity: 'creators',
				method: 'getCreators',
			}
		);
	});
});
