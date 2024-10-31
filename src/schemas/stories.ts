export default /* GraphQL */ `
	type Story {
		"""
		O ID único do recurso da história
		"""
		id: Float
		"""
		O título da história
		"""
		title: String
		"""
		Uma breve descrição da história
		"""
		description: String
		"""
		O identificador URL canônico para este recurso
		"""
		resourceURI: String
		"""
		O tipo de história, por exemplo, história interna, capa, história de texto
		"""
		type: String
		"""
		A data em que o recurso foi modificado mais recentemente
		"""
		modified: String
		"""
		A imagem representativa desta história
		"""
		thumbnail: Image
		"""
		Uma lista de recursos contendo quadrinhos nos quais esta história ocorre
		"""
		comics: GenericCollections
		"""
		Uma lista de recursos contendo séries nas quais esta história aparece
		"""
		series: GenericCollections
		"""
		Uma lista de recursos dos eventos nos quais esta história aparece
		"""
		events: GenericCollections
		"""
		Uma lista de personagens que aparecem nesta história
		"""
		characters: GenericCollections
		"""
		Uma lista de criadores que trabalharam nesta história
		"""
		creators: GenericCollections
	}

	type StoryDataContainer {
		"""
		O deslocamento solicitado (número de resultados ignorados) da chamada
		"""
		offset: Float
		"""
		O limite de resultados solicitado
		"""
		limit: Float
		"""
		O número total de recursos disponíveis dado o conjunto de filtros atual
		"""
		total: Float
		"""
		O número total de resultados retornados por esta chamada
		"""
		count: Float
		"""
		A lista de histórias retornadas pela chamada
		"""
		results: [Story]
	}

	type StoryDataWrapper {
		"""
		O código de status HTTP do resultado retornado
		"""
		code: Float
		"""
		Uma descrição em string do status da chamada
		"""
		status: String
		"""
		O aviso de direitos autorais para o resultado retornado
		"""
		copyright: String
		"""
		O aviso de atribuição para este resultado. Exiba este aviso ou o conteúdo do campo attributionHTML em todas as telas que contenham dados da Marvel Comics API
		"""
		attributionText: String
		"""
		Uma representação HTML do aviso de atribuição para este resultado. Exiba este aviso ou o conteúdo do campo attributionText em todas as telas que contenham dados da Marvel Comics API
		"""
		attributionHTML: String
		"""
		Os resultados retornados pela chamada
		"""
		data: StoryDataContainer
		"""
		Um valor digesto do conteúdo retornado pela chamada.
		"""
		etag: String
	}
`;
