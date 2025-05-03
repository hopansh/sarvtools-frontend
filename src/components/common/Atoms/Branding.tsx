import { useSiteConfig } from '@/contexts/SiteConfigContext';
import { useThemeMode } from '@/contexts/ThemeContext';
import { theme } from '@/styles';
import { getLazyComponentByKey } from '@/utils/getLazyComponentByKey';
import styled from '@emotion/styled';
import { Suspense } from 'react';
import { Link } from 'react-router-dom';

const Styled = styled(Link)<{ theme: any }>`
  font-size: 24px;
  display: flex;
  align-items: center;
  gap: 12px;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  font-family: ${theme.fonts.primary};
  font-weight: ${theme.fontWeights.bold};
`;

function Branding() {
  const { logo, headerTitle } = useSiteConfig();
  const LogoComponent = getLazyComponentByKey(logo);
  const { theme } = useThemeMode();
  return (
    <Styled to="/" theme={theme}>
      <Suspense fallback={<span>Loading...</span>}>
        {LogoComponent && <LogoComponent width={36} height={36} />}
      </Suspense>
      {headerTitle}
    </Styled>
  );
}

export default Branding;
