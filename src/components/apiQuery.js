async function apiQuery(apiLink) {
  const response = await fetch(apiLink, {
    method: "GET",
  });
  const data = await response.json();
  return data;
}

export default apiQuery;
