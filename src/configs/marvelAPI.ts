import {RESTDataSource} from '@apollo/datasource-rest';
import md5 from 'md5';
import dotenv from 'dotenv';

dotenv.config();

const ts: string = new Date().getTime().toString();
const PRIVATE_KEY: string = process.env.PRIVATE_KEY;
const PUBLIC_KEY: string = process.env.PUBLIC_KEY;
const hash = md5(ts + PRIVATE_KEY + PUBLIC_KEY);

export class MarvelAPI extends RESTDataSource {
	override baseURL = 'http://gateway.marvel.com/v1/public/';
	params = {
		ts,
		apikey: PUBLIC_KEY,
		hash,
	};
}
