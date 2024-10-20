const moduleTest = require('./testRequestError');

describe('src/utils/test', () => {
	it('should throw an error with the correct message when the data source fails ', async () => {
		const mockResolver = jest.fn((_, __, {dataSources}) => {
			return Promise.reject('mockError: Failed to fetch mockMethod');
		});

		const variables = {id: 'mock-id'};
		const dataSources = {entity: 'mockEntity', method: 'mockMethod'};

		await expect(
			moduleTest(mockResolver, variables, dataSources)
		).rejects.toThrow('mockError: Failed to fetch mockMethod');
	});
});
