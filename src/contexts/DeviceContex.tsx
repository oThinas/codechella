import { createContext, ReactNode } from 'react';

import { useDevice } from '../hooks/useDevice';

interface IDeviceContext {
  device: 'mobile' | 'tablet' | 'desktop';
}

export const DeviceContext = createContext({} as IDeviceContext);

export function DeviceContextProvider({ children }: { children: ReactNode }) {
  const { device } = useDevice();

  return (
    <DeviceContext.Provider value={{ device }}>
      {children}
    </DeviceContext.Provider>
  );
}
