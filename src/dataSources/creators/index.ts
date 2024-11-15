import Marvel from '@/configs/marvelAPI';
import {ICreators, IResponse} from '@/types';

export default class Creators extends Marvel {
	async getCreators(): Promise<IResponse<ICreators[]>> {
		const data = await this.get('creators', {
			params: this.params,
		});
		return data;
	}

	async getCreatorById(creatorsId: string): Promise<IResponse<ICreators>> {
		const data = await this.get(
			`creators/${encodeURIComponent(creatorsId)}`,
			{
				params: this.params,
			}
		);
		return data;
	}

	async getCreatorComics(creatorsId: string): Promise<IResponse<ICreators>> {
		const data = await this.get(
			`creators/${encodeURIComponent(creatorsId)}/comics`,
			{
				params: this.params,
			}
		);
		return data;
	}

	async getCreatorEvents(creatorsId: string): Promise<IResponse<ICreators>> {
		const data = await this.get(
			`creators/${encodeURIComponent(creatorsId)}/events`,
			{
				params: this.params,
			}
		);
		return data;
	}

	async getCreatorSeries(creatorsId: string): Promise<IResponse<ICreators>> {
		const data = await this.get(
			`creators/${encodeURIComponent(creatorsId)}/series`,
			{
				params: this.params,
			}
		);
		return data;
	}

	async getCreatorStories(creatorsId: string): Promise<IResponse<ICreators>> {
		const data = await this.get(
			`creators/${encodeURIComponent(creatorsId)}/stories`,
			{
				params: this.params,
			}
		);
		return data;
	}
}
