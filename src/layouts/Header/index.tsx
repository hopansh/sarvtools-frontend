import React, { useState, useEffect, Suspense } from 'react';
import styled from '@emotion/styled';
import { theme } from '@/styles';
import { Link, useLocation } from 'react-router-dom';
import { HEADER_HEIGHT, MOBILE_HEADER_HEIGHT } from '@/constants/styles';
import { Dropdown, Button, MenuProps } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import Branding from '@/components/common/Atoms/Branding';
import LanguageSwitcher from '@/components/common/Atoms/LanguageSwitcher';
import { useThemeMode } from '@/contexts/ThemeContext';

const Header = styled.header<{ theme: any; isVisible: boolean }>`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  height: ${HEADER_HEIGHT};
  background: ${(props) => props.theme.colors.white};
  position: fixed;
  padding: 0 48px;
  z-index: 1;
  top: ${(props) => (props.isVisible ? '0' : `-${HEADER_HEIGHT}`)};
  transition: top 0.3s ease;
  @media (max-width: 768px) {
    height: ${MOBILE_HEADER_HEIGHT};
    padding: 0 16px;
  }
`;

const NavSection = styled.nav`
  display: flex;
  gap: 16px;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const CustomNavLink = styled(Link)<{ isActive?: boolean; theme: any }>`
  color: ${(props) =>
    props.isActive ? props.theme.colors.accent : props.theme.colors.primary};
  font-size: 16px;
  text-decoration: none;
  padding: 8px 12px;
  border-bottom: 2px solid
    ${(props) =>
      props.isActive ? props.theme.colors.accent : 'transparent'};
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    color: ${(props) => props.theme.colors.secondary};
    border-bottom: 2px solid ${(props) => props.theme.colors.secondary};
    text-decoration: none;
  }
`;

const MobileMenuButton = styled(Button)`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 32px;
    padding: 0;
  }
`;

const HeaderSection: React.FC = () => {
  const location = useLocation();
  const { mode, toggleTheme, theme } = useThemeMode();
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const mobileMenuItems: MenuProps['items'] = [
    { key: 'tools', label: <Link to="/tools">Tools</Link> },
    { key: 'about', label: <Link to="/about">About</Link> },
  ];

  useEffect(() => {
    if (isHeaderVisible) return;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setIsHeaderVisible(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY, isHeaderVisible]);

  return (
    <Header theme={theme} isVisible={isHeaderVisible}>
      <Branding />
      <NavSection>
        <CustomNavLink
          theme={theme}
          to="/tools"
          isActive={location.pathname.startsWith('/tools')}
        >
          Tools
        </CustomNavLink>
        <CustomNavLink
          theme={theme}
          to="/about"
          isActive={location.pathname === '/about'}
        >
          About
        </CustomNavLink>
      </NavSection>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <LanguageSwitcher />
        <Button
          aria-label="Toggle dark mode"
          onClick={toggleTheme}
          title={
            mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
          }
        >
          {mode === 'dark' ? '🌙' : '☀️'}
        </Button>
        <Dropdown
          menu={{ items: mobileMenuItems }}
          open={mobileMenuVisible}
          onOpenChange={setMobileMenuVisible}
          trigger={['click']}
        >
          <MobileMenuButton
            icon={<MenuOutlined />}
            onClick={() => setMobileMenuVisible(!mobileMenuVisible)}
          />
        </Dropdown>
      </div>
    </Header>
  );
};

export default HeaderSection;
