export default function useHandleRoutes(routes) {
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
