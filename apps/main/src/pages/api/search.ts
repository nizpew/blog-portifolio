import { algoliasearch } from "algoliasearch"
import type { NextApiRequest, NextApiResponse } from "next"

const client = algoliasearch(
	process.env.ALGOLIA_APP_ID,
	process.env.ALGOLIA_API_KEY
)

const search = async (req: NextApiRequest, res: NextApiResponse) => {
	const { query } = req.body
	const searchQuery = typeof query === "string" ? query : ""

	const { results } = await client.search({
		requests: [
			{
				indexName: process.env.ALGOLIA_INDEX_NAME,
				query: searchQuery,
				attributesToRetrieve: ["post_title", "post_id"],
				hitsPerPage: 10,
				facetFilters: [
					"post_type_label:Posts",
					[
						"taxonomies.category:DEV",
						"taxonomies.category:Thoughts",
						"taxonomies.category:Tools",
					],
				],
			},
		],
	})
	res.setHeader(
		"Cache-Control",
		"public, s-maxage=1200, stale-while-revalidate=600"
	)
	return res.status(200).json(results[0])
}

export default search
