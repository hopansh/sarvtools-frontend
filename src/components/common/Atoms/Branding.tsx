import { useSiteConfig } from '@/contexts/SiteConfigContext';
import { theme } from '@/styles';
import { getLazyComponentByKey } from '@/utils/getLazyComponentByKey';
import styled from '@emotion/styled';
import { Suspense } from 'react';
import { Link } from 'react-router-dom';

const Styled = styled(Link)`
  font-size: 24px;
  display: flex;
  align-items: center;
  gap: 12px;
  color: ${theme.colors.primary};
  text-decoration: none;
  font-family: ${theme.fonts.primary};
  font-weight: ${theme.fontWeights.bold};
`;

function Branding() {
  const config = useSiteConfig();
  const LogoComponent = getLazyComponentByKey(config.logo);
  return (
    <Styled to="/">
      <Suspense fallback={<span>Loading...</span>}>
        {LogoComponent && <LogoComponent width={36} height={36} />}
      </Suspense>
      {config.headerTitle}
    </Styled>
  );
}

export default Branding;
