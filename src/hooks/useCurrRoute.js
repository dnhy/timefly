import { useLocation } from 'react-router-dom';
import { handleRoutes } from '@/utils';

// 获取当前路由对象
export default function useCurrRoute(routes) {
  const { pathname } = useLocation();
  const general = handleRoutes(routes);
  return general.find((e) => e.path === pathname) || null;
}
