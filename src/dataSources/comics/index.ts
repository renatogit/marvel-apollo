const MarvelAPIComics = require('../../configs/marvelAPI');

module.exports = class Comics extends MarvelAPIComics {
	async getComics(): Promise<IResponse<IComics[]>> {
		const data = await this.get('comics', {
			params: this.params,
		});
		return data;
	}

	async getComicsById(comicsId: string): Promise<IResponse<IComics>> {
		const data = await this.get(`comics/${encodeURIComponent(comicsId)}`, {
			params: this.params,
		});
		return data;
	}

	async getComicsCharacters(comicsId: string): Promise<IResponse<IComics>> {
		const data = await this.get(
			`comics/${encodeURIComponent(comicsId)}/characters`,
			{
				params: this.params,
			}
		);
		return data;
	}

	async getComicsCreators(comicsId: string): Promise<IResponse<IComics>> {
		const data = await this.get(
			`comics/${encodeURIComponent(comicsId)}/creators`,
			{
				params: this.params,
			}
		);
		return data;
	}

	async getComicsEvents(comicsId: string): Promise<IResponse<IComics>> {
		const data = await this.get(
			`comics/${encodeURIComponent(comicsId)}/events`,
			{
				params: this.params,
			}
		);
		return data;
	}

	async getComicsStories(comicsId: string): Promise<IResponse<IComics>> {
		const data = await this.get(
			`comics/${encodeURIComponent(comicsId)}/stories`,
			{
				params: this.params,
			}
		);
		return data;
	}
};
