import createAPI from '.';
import TestComicsAPI from './comics';
import TestCharactersAPI from './characters';
import TestCreatorsAPI from './creators';

describe('API Module', () => {
	const mockCache: Record<string, object> = {};
	const api = createAPI(mockCache);

	test('creates ComicsAPI instance with cache', () => {
		expect(api.comics).toBeInstanceOf(TestComicsAPI);
	});

	test('creates CharactersAPI instance with cache', () => {
		expect(api.characters).toBeInstanceOf(TestCharactersAPI);
	});

	test('creates CreatorsAPI instance with cache', () => {
		expect(api.creators).toBeInstanceOf(TestCreatorsAPI);
	});
});
