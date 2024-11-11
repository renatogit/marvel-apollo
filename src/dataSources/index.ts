import Comics from './comics';
import Characters from './characters';
import Creators from './creators';

export default (cache) => ({
	comics: new Comics({cache}),
	characters: new Characters({cache}),
	creators: new Creators({cache}),
});
