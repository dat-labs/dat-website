export const getIntegrations = async () => {
  const spaceId = process.env.NEXT_PUBLIC_SPACE_ID;
  const pagePath = "integrations";
  const token = process.env.NEXT_PUBLIC_BEARER_TOKEN;

  const url = `https://api.gitbook.com/v1/spaces/${spaceId}/content/path/${pagePath}?format=markdown`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      ...(token && { Authorization: `Bearer ${token}` }),
    },
  });
  const data = await response.json();
  return data;
};
