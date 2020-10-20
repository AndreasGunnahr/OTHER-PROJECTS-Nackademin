const useFetch = async (url, body, method) => {
  const response = await fetch(url, {
    method: method,
    body: body,
  });

  const result = await response.json();
  return result;
};

export default useFetch;
