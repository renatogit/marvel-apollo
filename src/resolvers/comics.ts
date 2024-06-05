import { MarvelAPI } from '../configs/marvelAPI.config';

export class Comics extends MarvelAPI {
	async getComics(): Promise<any> {
		const data = await this.get('comics', {
			params: this.params
		});

		return data;
	}
}
