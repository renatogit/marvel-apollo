import {MarvelAPI} from '../configs/marvelAPI';

export class Characters extends MarvelAPI {
	async getCharacters(): Promise<IComics[]> {
		const data = await this.get('characters', {
			params: this.params,
		});
		return data;
	}

	async getCharactersById(charactersId: string): Promise<IComics> {
		const data = await this.get(`characters/${encodeURIComponent(charactersId)}`, {
			params: this.params,
		});
		return data;
	}

	async getCharactersComics(charactersId: string): Promise<IComics> {
		const data = await this.get(`characters/${encodeURIComponent(charactersId)}/comics`, {
			params: this.params,
		});
		return data;
	}

	async getCharactersCreators(charactersId: string): Promise<IComics> {
		const data = await this.get(`characters/${encodeURIComponent(charactersId)}/creators`, {
			params: this.params,
		});
		return data;
	}

	async getCharactersEvents(charactersId: string): Promise<IComics> {
		const data = await this.get(`characters/${encodeURIComponent(charactersId)}/events`, {
			params: this.params,
		});
		return data;
	}

	async getCharactersStories(charactersId: string): Promise<IComics> {
		const data = await this.get(`characters/${encodeURIComponent(charactersId)}/stories`, {
			params: this.params,
		});
		return data;
	}
}
