import type { ReactNode } from 'react';
import { useEffect, useState } from "react";
import { setUser } from "../utils/auth";

interface MainWrapperProps {
  children: ReactNode;
}

const MainWrapper = ({ children }: MainWrapperProps) => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const handler = async () => {
      setLoading(true);
      await setUser();
      setLoading(false);
    };
    handler();
  }, []);

  return <>{loading ? null : children}</>;
};

export default MainWrapper;