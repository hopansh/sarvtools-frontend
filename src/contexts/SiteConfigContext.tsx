import React, { createContext, useContext } from 'react';
import { SiteConfig, siteConfigs } from '@/config/siteConfigs';
import { getSubdomain } from '@/utils/getSubdomain';

const SiteConfigContext = createContext<SiteConfig>(siteConfigs.default);

export const SiteConfigProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const subdomain = getSubdomain();
  const config = siteConfigs[subdomain] || siteConfigs.default;
  return (
    <SiteConfigContext.Provider value={config}>
      {children}
    </SiteConfigContext.Provider>
  );
};

export const useSiteConfig = () => useContext(SiteConfigContext);
