const RAINFOREST_API_ENDPOINT = `https://api.rainforestapi.com/search?type=search&api_key=${process.env.RAINFOREST_API_KEY}&amazon_domain=amazon.com&search_term=`;

async function getAmazonProductData(searchQuery: string) {
  const response = await fetch(`${RAINFOREST_API_ENDPOINT + searchQuery}`);

  if (response.ok) {
    const data = await response.json();

    return data.search_results;
  }

  throw new Error("Failed to fetch product data");
}

export default getAmazonProductData;
