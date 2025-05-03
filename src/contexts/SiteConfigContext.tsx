import React, { createContext, useContext } from 'react';
import { siteConfigs } from '@/config/siteConfigs';
import { getSubdomain } from '@/utils/getSubdomain';
import { merge } from 'lodash';
import { useLanguage } from './LanguageContext';

type SiteConfig = typeof siteConfigs.default;

const SiteConfigContext = createContext<SiteConfig>(siteConfigs.default);

export const SiteConfigProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const subdomain = getSubdomain();
  const { language } = useLanguage();
  const langKey = language === 'hi' ? `${subdomain}_hi` : subdomain;
  const config = merge({}, siteConfigs.default, siteConfigs[langKey as keyof typeof siteConfigs]);
  return (
    <SiteConfigContext.Provider value={config}>
      {children}
    </SiteConfigContext.Provider>
  );
};

export const useSiteConfig = () => useContext(SiteConfigContext);
