function capitalizeFirstLatter(str) {
  if (!/^[A-Za-z]/.test(str)) {
    return str;
  }

  return str.charAt(0).toUpperCase() + str.slice(1);
}

function handleRoutes(routes) {
  const obj = routes.find((item) => item.path === '/general' && item.children);
  if (!obj) {
    return [];
  }
  const { path, children } = obj;
  const general = children?.map((item) => ({
    ...item,
    path: `${path}/${item.path}`,
  }));

  return general || [];
}

export { capitalizeFirstLatter, handleRoutes };
