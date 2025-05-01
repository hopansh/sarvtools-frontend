import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { PROJECT_NAME } from '@/constants/common';
import { theme } from '@/styles';
import { Link, useLocation } from 'react-router-dom';
import { HEADER_HEIGHT, MOBILE_HEADER_HEIGHT } from '@/constants/styles';
import Logo from '@/assets/logo.png';
import { Dropdown, Button, MenuProps } from 'antd';
import { DownOutlined, MenuOutlined } from '@ant-design/icons';

import { categories } from '@/constants/tools';

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

const Branding = styled(Link)`
  font-size: 24px;
  display: flex;
  align-items: center;
  gap: 12px;
  color: ${theme.colors.primary};
  text-decoration: none;
  font-family: ${theme.fonts.headline};
`;

const NavSection = styled.nav`
  display: flex;
  gap: 16px;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.div`
  position: relative;
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
    location.pathname !== '/' ? true : false,
  );
  const [lastScrollY, setLastScrollY] = useState(0);

  const toolsMenuItems: MenuProps['items'] = categories.map(
    ({ id, name, tools }) => ({
      key: id,
      label: <Link to={`/tools/${id}`}>{name}</Link>,
      children: tools.map((tool) => ({
        key: tool.id,
        label: <Link to={`/tools/${id}/${tool.id}`}>{tool.name}</Link>,
      })),
    }),
  );

  const mobileMenuItems: MenuProps['items'] = [
    {
      key: 'tools',
      label: 'Tools',
      children: toolsMenuItems,
    },
    { key: 'about', label: <Link to="/about">About</Link> },
  ];

  useEffect(() => {
    if(isHeaderVisible) return;

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
      <Branding to="/">
        <img src={Logo} alt="logo" width="36px" height="36px" />
        {PROJECT_NAME}
      </Branding>

      <NavSection>
        <NavItem>
          <Dropdown menu={{ items: toolsMenuItems }} placement="bottomCenter">
            <NavLink to="/tools" isActive={location.pathname.startsWith('/tools')}>
              Tools <DownOutlined />
            </NavLink>
          </Dropdown>
        </NavItem>
        <NavLink to="/about" isActive={location.pathname === '/about'}>
          About
        </NavLink>
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
