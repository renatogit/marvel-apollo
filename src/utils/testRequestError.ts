module.exports = async (
	resolver: any,
	variables: {[key: string]: string},
	dataSources: {entity: string; method: string}
) => {
	const {entity, method} = dataSources;
	const errorMessage = `mockError: Failed to fetch ${method}`;

	const error = async () =>
		await resolver({id: 'mock-id'}, variables, {
			dataSources: {
				[entity]: {
					[method]: () => Promise.reject(new Error(errorMessage)),
				},
			},
		});

	await expect(error()).rejects.toThrow(errorMessage);
};
