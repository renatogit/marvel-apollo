import {RESTDataSource} from '@apollo/datasource-rest';
import md5 from 'md5';
import dotenv from 'dotenv';

dotenv.config();

const ts = new Date().getTime().toString();
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const PUBLIC_KEY = process.env.PUBLIC_KEY;
const hash = md5(ts + PRIVATE_KEY + PUBLIC_KEY);

// console.log(`http://gateway.marvel.com/v1/public/comics?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`);

export default class Marvel extends RESTDataSource {
	baseURL = 'https://gateway.marvel.com/v1/public/';
	params = {
		limit: String(10),
		ts,
		apikey: PUBLIC_KEY,
		hash,
	};
}
