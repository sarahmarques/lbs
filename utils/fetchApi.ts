export const fetchApi = async (
  url: string,
  params?: { [key: string]: any }
) => {
  const searchParams = new URLSearchParams(params);
  const fullUrl = [url, params ? searchParams.toString() : null]
    .filter(Boolean)
    .join("?");
  const res = await fetch(fullUrl);
  const data = await res.json();

  return data;
};
