module.exports = /* GraphQL */ `
	type Comic {
		"""
		O ID exclusivo do recurso de quadrinhos
		"""
		id: Float
		"""
		O ID do quadrinhos digital representado nesta história. Será 0 se o quadrinho não estiver disponível digitalmente
		"""
		digitalId: Float
		"""
		O título canônico da história em quadrinhos
		"""
		title: String
		"""
		O número do problema na série (geralmente será 0 para formatos de coleção).
		"""
		issueNumber: Float
		"""
		Se o problema for uma variante (por exemplo, uma capa alternativa, segunda impressão ou corte do diretor), uma descrição textual da variante.
		"""
		variantDescription: String
		"""
		A descrição preferida do quadrinho
		"""
		description: String
		"""
		A data em que o recurso foi modificado mais recentemente
		"""
		modified: String
		"""
		O ISBN dos quadrinhos (geralmente preenchido apenas para formatos de coleção)
		"""
		isbn: String
		"""
		O número do código de barras UPC do quadrinho (geralmente preenchido apenas para formatos de periódicos)
		"""
		upc: String
		"""
		O código Diamond para os quadrinhos
		"""
		diamondCode: String
		"""
		O código de barras EAN para os quadrinhos
		"""
		ean: String
		"""
		O código de barras ISSN do quadrinho
		"""
		issn: String
		"""
		O formato de publicação dos quadrinhos, ex.: Quadrinhos, capa dura, brochura comercial
		"""
		format: String
		"""
		O número de páginas da história nos quadrinhos
		"""
		pageCount: Float
		"""
		O identificador de URL canônico deste recurso
		"""
		resourceURI: String
		"""
		Um conjunto de sinopses de texto descritivo para quadrinhos
		"""
		textObjects: [TextObjects]
		"""
		Um conjunto de URLs de sites públicos para o recurso
		"""
		urls: [Url]
		"""
		Uma lista de edições variantes para esta história em quadrinhos (inclui a edição "original" se a edição atual for uma variante)
		"""
		variants: [Uri]
		"""
		Uma lista de coleções que incluem esta história em quadrinhos (geralmente estará vazia se o formato da história em quadrinhos for uma coleção)
		"""
		collections: [Uri]
		"""
		Uma lista das principais datas desta história em quadrinhos
		"""
		dates: [Dates]
		"""
		Uma lista de preços para esta história em quadrinhos
		"""
		prices: [Price]
		"""
		A imagem representativa desta história em quadrinhos
		"""
		thumbnail: Image
		"""
		Uma lista de imagens promocionais associadas a esta história em quadrinhos
		"""
		images: [Image]
		"""
		Uma lista de edições coletadas nesta história em quadrinhos (geralmente estará vazia para formatos de periódicos como "quadrinhos" ou "revista")
		"""
		collectedIssues: [Uri]
		"""
		A resource list containing the characters which appear in this comic
		"""
		characters: [GenericComics]
		"""
		A resource list containing the creators associated with this comic
		"""
		creators: [GenericComics]
		"""
		Uma lista de recursos contendo os eventos em que esta história em quadrinhos aparece
		"""
		events: [GenericComics]
		"""
		Uma representação resumida da série à qual esta história em quadrinhos pertence
		"""
		series: [GenericComics]
		"""
		A resource list containing the stories which appear in this comic
		"""
		stories: [GenericComics]
	}

	type ComicDataContainer {
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
		results: [Comic]
	}

	type ComicDataWrapper {
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
		data: ComicDataContainer
		"""
		Um valor resumido do conteúdo retornado pela chamada
		"""
		etag: String
	}
`;
