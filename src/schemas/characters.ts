module.exports = /* GraphQL */ `
	type Character {
		"""
		O ID exclusivo do recurso de personagem
		"""
		id: Float
		"""
		O nome do personagem
		"""
		name: String
		"""
		Uma breve biografia ou descrição do personagem
		"""
		description: String
		"""
		A data em que o recurso foi modificado mais recentemente
		"""
		modified: String
		"""
		Um conjunto de URLs de sites públicos para o recurso
		"""
		urls: [Url]
		"""
		A imagem representativa deste personagem
		"""
		thumbnail: Image
		"""
		Uma lista de recursos contendo quadrinhos que apresentam esse personagem
		"""
		comics: [GenericEntity]
		"""
		Uma lista de recursos de histórias nas quais esse personagem aparece
		"""
		stories:[GenericEntity]
		"""
		Uma lista de recursos de eventos em que este personagem aparece
		"""
		events: [GenericEntity]
		"""
		Uma lista de recursos de séries em que esse personagem aparece.
		"""
		series: [GenericEntity]
	}

	type CharacterDataContainer {
		"""
		O deslocamento solicitado (número de resultados ignorados) da chamada
		"""
		offset: Float
		"""
		O limite de resultados solicitado
		"""
		limit: Float
		"""
		O número total de recursos disponíveis de acordo com o conjunto de filtros atual
		"""
		total: Float
		"""
		O número total de resultados retornados por esta chamada
		"""
		count: Float
		"""
 		A lista de caracteres retornados pela chamada
		"""
		results: [Character]
	}

	type CharacterDataWrapper {
		"""
		O código de status HTTP do resultado retornado
		"""
		code: Float
		"""
		Uma descrição em string do status da chamada
		"""
		status: String
		"""
		O aviso de copyright para o resultado retornado
		"""
		copyright: String
		"""
		O aviso de atribuição para este resultado. Exiba este aviso ou o conteúdo do campo attributionHTML em todas as telas que contenham dados da API da Marvel Comics
		"""
		attributionText: String
		"""
		Uma representação HTML do aviso de atribuição para este resultado. Exiba este aviso ou o conteúdo do campo attributionText em todas as telas que contenham dados da API da Marvel Comics
		"""
		attributionHTML: String
		"""
		Os resultados retornados pela chamada
		"""
		data: CharacterDataContainer
		"""
		Um valor resumido do conteúdo retornado pela chamada
		"""
		etag: String
	}
`;
