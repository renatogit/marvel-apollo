import createAPI from '.';
import TestComicsAPI from './comics';
import TestCharactersAPI from './characters';

describe('API Module', () => {
	const mockCache: Record<string, object> = {};

	test('creates ComicsAPI instance with cache', () => {
		const api = createAPI(mockCache);
		expect(api.comics).toBeInstanceOf(TestComicsAPI);
	});

	test('creates CharactersAPI instance with cache', () => {
		const api = createAPI(mockCache);
		expect(api.characters).toBeInstanceOf(TestCharactersAPI);
	});
});
