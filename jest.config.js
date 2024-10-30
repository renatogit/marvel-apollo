module.exports = {
	preset: 'ts-jest',
	roots: ['<rootDir>/src'],
	testEnvironment: 'node',
	moduleFileExtensions: ['ts', 'js', 'json', 'node'],
	transform: {
		'^.+\\.ts$': 'ts-jest',
	},
	testPathIgnorePatterns: ['/node_modules/', '/dist/'],
	moduleDirectories: ['node_modules', 'src'],
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/src/$1',
		'^@mock/(.*)$': '<rootDir>/mock/$1',
		'^@query/(.*)$': '<rootDir>/query/$1',
		'^@utils/(.*)$': '<rootDir>/src/utils/$1',
	},
};
