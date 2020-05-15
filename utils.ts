const queryParam = (query: object) => {
  return (Object.keys(query) as Array<keyof typeof query>)
    .map((x) => `${x}=${query[x]}`)
    .join("&");
};

export { queryParam };
