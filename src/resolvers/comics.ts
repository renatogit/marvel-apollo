import {MarvelAPI} from '../configs/marvelAPI';

export class Comics extends MarvelAPI {
	async getComics(): Promise<any> {
		const data = await this.get('comics', {
			params: this.params,
		});

		return data;
	}

	async getComicsById(comicsId: string): Promise<any> {
		const data = await this.get(`comics/${encodeURIComponent(comicsId)}`, {
			params: this.params,
		});

		return data;
	}
}
