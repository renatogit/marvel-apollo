module.exports = /* GraphQL */ `
	type ComicsResult {
		id: Float
		digitalId: Float
		title: String
		issueNumber: Float
		variantDescription: String
		description: String
		modified: String
		isbn: String
		upc: String
		diamondCode: String
		ean: String
		issn: String
		format: String
		pageCount: Float
		resourceURI: String
		textObjects: [TextObjects]
		urls: [Url]
		series: [Uri]
		variants: [Uri]
		collections: [Uri]
		dates: [Dates]
		prices: [Price]
		thumbnail: [Image]
		images: [Image]
		collectedIssues: [Uri]
		creators: [GenericCollections]
		characters: [GenericCollections]
		stories: [GenericCollections]
		events: [GenericCollections]
	}

	type ComicsData {
		"""
		O deslocamento solicitado (resultados ignorados) da chamada
		"""
		offset: Float

		"""
		O limite de resultados solicitado
		"""
		limit: Float

		"""
		O número total de resultados disponíveis
		"""
		total: Float

		"""
		O número total de resultados retornados por esta chamada
		"""
		count: Float

		"""
		A lista de entidades retornadas pela chamada
		"""
		results: [ComicsResult]
	}

	type ComicsAPI {
		"""
		O código do status HTTP da chamada
		"""
		code: Float

		"""
		Descrição do status da chamada
		"""
		status: String

		"""
		Um contêiner dos resultados retornados pela chamada
		"""
		data: ComicsData

		"""
		O aviso de atribuição da chamada
		"""
		attributionText: String
	}
`;