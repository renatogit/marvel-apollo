const {RESTDataSource} = require('@apollo/datasource-rest');
const md5 = require('md5');
const dotenv = require('dotenv');

dotenv.config();

const ts: string = new Date().getTime().toString();
const PRIVATE_KEY: string = process.env.PRIVATE_KEY;
const PUBLIC_KEY: string = process.env.PUBLIC_KEY;
const hash = md5(ts + PRIVATE_KEY + PUBLIC_KEY);

// console.log(`http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`);

module.exports = class Marvel extends RESTDataSource {
	baseURL = 'http://gateway.marvel.com/v1/public/';
	params = {
		ts,
		apikey: PUBLIC_KEY,
		hash,
	};
};
