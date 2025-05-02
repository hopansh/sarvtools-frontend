import React, { useState, useEffect, Suspense } from 'react';
import styled from '@emotion/styled';
import { theme } from '@/styles';
import { Link, useLocation } from 'react-router-dom';
import { HEADER_HEIGHT, MOBILE_HEADER_HEIGHT } from '@/constants/styles';
import { Dropdown, Button, MenuProps, Tabs } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import Branding from '@/components/common/Atoms/Branding';

const Header = styled.header<{ isVisible: boolean }>`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  height: ${HEADER_HEIGHT};
  background: ${theme.colors.white};
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

const NavLink = styled(Link)<{ isActive?: boolean }>`
  color: ${(props) =>
    props.isActive ? theme.colors.secondary : theme.colors.primary};
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  padding: 8px 12px;
  border-radius: 4px;
  transition: all 0.3s ease;

  &:hover {
    color: ${theme.colors.primary};
  }
`;

const MobileMenuButton = styled(Button)`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    padding: 0;
  }
`;

const HeaderSection: React.FC = () => {
  const location = useLocation();
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(
    location.pathname !== '/' ? true : true,
  );
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
        setIsHeaderVisible(true); // Hide header on scroll down
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <Header isVisible={isHeaderVisible}>
      <Branding />
      <NavSection>
        <Tabs
          activeKey={location.pathname.startsWith('/tools') ? 'tools' : location.pathname === '/about' ? 'about' : ''}
          onChange={key => {
            if (key === 'tools') window.location.href = '/tools';
            if (key === 'about') window.location.href = '/about';
          }}
          items={[
            { key: 'tools', label: 'Tools' },
            { key: 'about', label: 'About' },
          ]}
          tabBarStyle={{ borderBottom: 'none', marginBottom: 0 }}
        />
      </NavSection>
      <Dropdown
        menu={{ items: mobileMenuItems }}
        visible={mobileMenuVisible}
        onVisibleChange={setMobileMenuVisible}
        trigger={['click']}
      >
        <MobileMenuButton
          icon={<MenuOutlined />}
          onClick={() => setMobileMenuVisible(!mobileMenuVisible)}
        />
      </Dropdown>
    </Header>
  );
};

export default HeaderSection;
