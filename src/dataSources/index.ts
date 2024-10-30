import Comics from './comics';
import CharactersAPI from './characters';

export default (cache) => ({
	comics: new Comics({cache}),
	characters: new CharactersAPI({cache}),
});
