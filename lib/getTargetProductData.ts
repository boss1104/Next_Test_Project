const REDCIRCLE_API_ENDPOINT = `https://api.redcircleapi.com/request?type=search&api_key=${process.env.REDCIRCLE_API_KEY}&search_term=`;

async function getTargetProductData(searchQuery: string) {
  const response = await fetch(`${REDCIRCLE_API_ENDPOINT + searchQuery}`);

  if (response.ok) {
    const data = await response.json();

    return data.search_results;
  }

  throw new Error("Failed to fetch product data");
}

export default getTargetProductData;
