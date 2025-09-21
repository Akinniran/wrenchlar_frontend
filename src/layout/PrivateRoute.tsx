import type { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../store/auth';

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const loggedIn = useAuthStore((state) => state.isLoggedIn)();
  return loggedIn ? <>{children}</> : <Navigate to="/login" />;
};

export default PrivateRoute;