module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/src/$1',
		'^@mock/(.*)$': '<rootDir>/mock/$1',
		'^@query/(.*)$': '<rootDir>/query/$1',
	},
};
