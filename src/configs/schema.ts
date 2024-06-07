import path from 'path';
import {loadFilesSync} from '@graphql-tools/load-files';
import {mergeTypeDefs} from '@graphql-tools/merge';

const __dirname = path.resolve();

const typesArray = loadFilesSync(path.join(__dirname, 'src/schema'), {
	extensions: ['graphql'],
	recursive: true,
});

export default mergeTypeDefs(typesArray);
