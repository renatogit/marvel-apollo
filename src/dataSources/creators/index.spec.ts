import CreatorsDataSources from '.';

interface ICreatorsParams {
	params: {
		ts: string;
		apikey: string;
		hash: string;
	};
}

const paramsCreatorsApi: ICreatorsParams = {
	params: {
		ts: 'fake',
		apikey: 'fake',
		hash: 'fake',
	},
};

describe('dataSources/creators', () => {
	let creators;
	beforeEach(() => {
		creators = new CreatorsDataSources();
		creators.get = jest.fn();
		creators.params = paramsCreatorsApi.params;
	});

	it('should fetch creators data', async () => {
		creators.getCreators();
		expect(creators.get).toHaveBeenCalledWith(
			'creators',
			paramsCreatorsApi
		);
	});

	it('should fetch creator by ID', async () => {
		creators.getCreatorById('123');
		expect(creators.get).toHaveBeenCalledWith(
			'creators/123',
			paramsCreatorsApi
		);
	});

	it('should fetch comics for a creator', async () => {
		creators.getCreatorComics('456');
		expect(creators.get).toHaveBeenCalledWith(
			'creators/456/comics',
			paramsCreatorsApi
		);
	});

	it('should fetch events for a creator', async () => {
		creators.getCreatorEvents('987');
		expect(creators.get).toHaveBeenCalledWith(
			'creators/987/events',
			paramsCreatorsApi
		);
	});

	it('should fetch series for a comic', async () => {
		creators.getCreatorSeries('987');
		expect(creators.get).toHaveBeenCalledWith(
			'creators/987/series',
			paramsCreatorsApi
		);
	});

	it('should fetch stories for a comic', async () => {
		creators.getCreatorStories('987');
		expect(creators.get).toHaveBeenCalledWith(
			'creators/987/stories',
			paramsCreatorsApi
		);
	});
});
