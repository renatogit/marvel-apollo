export default async (resolver, variables, dataSources) => {
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
