const DataSourcesComicsCreatorsAPI = require('@/dataSources/comics');
const ComicsCreatorsResolver = require('.');
const ServerGetComicsCreators = require('@/configs/test');
const QUERY_GET_COMICS_CREATORS = require('@query/comics/queryComicsCreators');
const MOCK_GET_COMICS_CREATORS = require('@mock/comics/mockComicsCreators');

describe('resolvers/comicsCreatorsResolver/integration', () => {
    const comicsId = { comicsId: 'fake-code' };

    it('fetches comicsCreators and generate snapshots', async () => {
        const { server } = await ServerGetComicsCreators(
            DataSourcesComicsCreatorsAPI,
            ComicsCreatorsResolver,
            MOCK_GET_COMICS_CREATORS,
            comicsId
        );

        const { body } = await server.executeOperation({
            query: QUERY_GET_COMICS_CREATORS,
            variables: comicsId,
        });

        expect(body).toMatchSnapshot();
    });
});
