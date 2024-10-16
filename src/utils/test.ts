const testRequestError = async (
	errorMessage: string,
	resolver: any,
	variables: any,
	entity: string,
	method: string
) => {
	const error = async () =>
		await resolver({id: 'mock-id'}, variables, {
			dataSources: {
				[entity]: {
					[method]: () => Promise.reject(new Error(errorMessage)),
				},
			},
		});

	await expect(error).rejects.toThrow(errorMessage);
};

const testPromiseError = async (
	mockDataSources: IComicsDataSources,
	entity: string,
	method: string,
	variables: {comicsId: string},
	resolver: any
) => {
	const errorMessage = `mockError: Failed to fetch ${method}`;

	mockDataSources[entity][method].mockRejectedValue(new Error(errorMessage));

	const error = async () => {
		await resolver(variables, null, {
			dataSources: mockDataSources,
		});
	};

	await expect(error).rejects.toThrow(errorMessage);
};

module.exports = {testRequestError, testPromiseError};
// TODO
export {};
