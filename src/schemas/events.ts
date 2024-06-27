module.exports = /* GraphQL */ `
	type Events {
		"""
		O ID exclusivo do recurso de evento
		"""
		id: Float
		"""
		O  titulo do event
		"""
		title: String
		"""
		A descrição do event
		"""
		description: String
		"""
		O identificador de URL canônico deste recurso
		"""
		resourceURI: String
		"""
		Um conjunto de URLs de sites públicos para o evento
		"""
		urls: [Url]
		"""
		A data em que o recurso foi modificado mais recentemente
		"""
		modified: String
		"""
		A data de publicação do primeiro número deste evento
		"""
		start: String
		"""
		A data de publicação do último número deste evento
		"""
		end: String
		"""
		A imagem representativa deste evento
		"""
		thumbnail: Image
		"""
		Uma lista de recursos contendo os quadrinhos deste evento
		"""
		comics: GenericCollections
		"""
		Uma lista de recursos contendo as histórias deste evento
		"""
		stories: GenericCollections
		"""
		Uma lista de recursos contendo as séries deste evento
		"""
		series: GenericCollections
		"""
		Uma lista de recursos contendo os personagens que aparecem neste evento
		"""
		characters: GenericCollections
		"""
		Uma lista de recursos contendo criadores cujo trabalho aparece neste evento
		"""
		creators: GenericCollections
		"""
		Uma representação resumida do evento posterior deste evento
		"""
		next: Uri
		"""
		Uma representação resumida do evento anterior deste evento
		"""
		previous: Uri
	}

	type EventDataContainer {
		"""
		O deslocamento solicitado resultados ignorados da chamada
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
		results: [Events]
	}

	type EventDataWrapper {
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
		data: EventDataContainer
		"""
		Um valor resumido do conteúdo retornado pela chamada.
		"""
		etag: String
	}
`;
