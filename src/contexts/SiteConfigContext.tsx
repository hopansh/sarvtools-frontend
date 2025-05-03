import React, { createContext, useContext } from 'react';
import { siteConfigs } from '@/config/siteConfigs';
import { getSubdomain } from '@/utils/getSubdomain';
import { merge } from 'lodash';
import { useLanguage } from './LanguageContext';
import { toolsConfigMap } from '@/config/toolsConfig';

type SiteConfig = typeof siteConfigs.default;
type ToolsConfig = typeof toolsConfigMap.default;

const SiteConfigContext = createContext<
  SiteConfig & {
    tools: ToolsConfig;
  }
>({
  ...siteConfigs.default,
  tools: toolsConfigMap.default,
} as SiteConfig & { tools: ToolsConfig });

export const SiteConfigProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const subdomain = getSubdomain();
  const { language } = useLanguage();
  const langKey = language === 'hi' ? `${subdomain}_hi` : subdomain;
  const contentConfig = merge(
    {},
    siteConfigs.default,
    siteConfigs[langKey as keyof typeof siteConfigs],
  );
  const toolsConfig =
    toolsConfigMap[langKey as keyof typeof toolsConfigMap] ||
    toolsConfigMap.default;

  const config = { ...contentConfig, tools: toolsConfig };
  return (
    <SiteConfigContext.Provider value={config}>
      {children}
    </SiteConfigContext.Provider>
  );
};

export const useSiteConfig = () => useContext(SiteConfigContext);
