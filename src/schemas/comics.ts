module.exports = /* GraphQL */ `
	type Results {
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
		variants: [Uri]
		collections: [Uri]
		dates: [Dates]
		prices: [Price]
		thumbnail: Image
		images: [Image]
		collectedIssues: [Uri]
		series: GenericCollections
		creators: [GenericCollections]
		characters: [GenericCollections]
		stories: [GenericCollections]
		events: [GenericCollections]
	}

	# Inclui campos utilizados em Events
	extend type Results {
		"""
		A data de publicação do primeiro número deste evento
		"""
		start: String
		"""
		A data de publicação do último número deste evento
		"""
		end: String
		"""
		Uma lista de recursos contendo os quadrinhos deste evento
		"""
		comics: GenericCollections
		"""
		Uma representação resumida do evento que se segue a este evento
		"""
		next: Uri
		"""
		Uma representação resumida do evento que precedeu este evento
		"""
		previous: Uri
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
		results: [Results]
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
		O aviso de direitos autorais para o resultado retornado
		"""
		copyright: String
		"""
		Um aviso de atribuição para esta chamada
		"""
		attributionText: String
		"""
		Uma representação em HTML do aviso de atribuição deste resultado
		"""
		attributionHTML: String
		"""
		Um contêiner dos resultados retornados pela chamada
		"""
		data: ComicsData
		"""
		Um valor resumido do conteúdo retornado pela chamada.
		"""
		etag: String
	}
`;
