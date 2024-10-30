import MarvelAPICharacters from '@/configs/marvelAPI';
import {IResponse, ICharacters} from '@/types';

export default class Characters extends MarvelAPICharacters {
	async getCharacters(): Promise<IResponse<ICharacters[]>> {
		const data = await this.get('characters', {
			params: this.params,
		});
		return data;
	}

	async getCharactersById(
		charactersId: string
	): Promise<IResponse<ICharacters>> {
		const data = await this.get(
			`characters/${encodeURIComponent(charactersId)}`,
			{
				params: this.params,
			}
		);
		return data;
	}

	async getCharactersComics(
		charactersId: string
	): Promise<IResponse<ICharacters>> {
		const data = await this.get(
			`characters/${encodeURIComponent(charactersId)}/comics`,
			{
				params: this.params,
			}
		);
		return data;
	}

	async getCharactersEvents(
		charactersId: string
	): Promise<IResponse<ICharacters>> {
		const data = await this.get(
			`characters/${encodeURIComponent(charactersId)}/events`,
			{
				params: this.params,
			}
		);
		return data;
	}

	async getCharactersSeries(
		charactersId: string
	): Promise<IResponse<ICharacters>> {
		const data = await this.get(
			`characters/${encodeURIComponent(charactersId)}/series`,
			{
				params: this.params,
			}
		);
		return data;
	}

	async getCharactersStories(
		charactersId: string
	): Promise<IResponse<ICharacters>> {
		const data = await this.get(
			`characters/${encodeURIComponent(charactersId)}/stories`,
			{
				params: this.params,
			}
		);
		return data;
	}
}
