import Marvel from '@/configs/marvelAPI';
import {ICreators, IResponse} from '@/types';

export default class Creators extends Marvel {
	async getCreators(): Promise<IResponse<ICreators[]>> {
		const data = await this.get('creators', {
			params: this.params,
		});
		return data;
	}

	async getCreatorsById(creatorsId: string): Promise<IResponse<ICreators>> {
		const data = await this.get(
			`creators/${encodeURIComponent(creatorsId)}`,
			{
				params: this.params,
			}
		);
		return data;
	}

	async getCreatorsComics(creatorsId: string): Promise<IResponse<ICreators>> {
		const data = await this.get(
			`creators/${encodeURIComponent(creatorsId)}/comics`,
			{
				params: this.params,
			}
		);
		return data;
	}

	async getCreatorsEvents(creatorsId: string): Promise<IResponse<ICreators>> {
		const data = await this.get(
			`creators/${encodeURIComponent(creatorsId)}/events`,
			{
				params: this.params,
			}
		);
		return data;
	}

	async getCreatorsSeries(creatorsId: string): Promise<IResponse<ICreators>> {
		const data = await this.get(
			`creators/${encodeURIComponent(creatorsId)}/series`,
			{
				params: this.params,
			}
		);
		return data;
	}

	async getCreatorsStories(
		creatorsId: string
	): Promise<IResponse<ICreators>> {
		const data = await this.get(
			`creators/${encodeURIComponent(creatorsId)}/stories`,
			{
				params: this.params,
			}
		);
		return data;
	}
}
