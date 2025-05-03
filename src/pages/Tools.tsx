import styled from '@emotion/styled';
import { theme } from '@/styles';
import { Layout, Menu, Button, Drawer, Grid } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  ToolOutlined,
} from '@ant-design/icons';
import React, { useState, Suspense, useEffect } from 'react';
import { useSiteConfig } from '@/contexts/SiteConfigContext';
import { componentRegistry } from '@/constants/componentRegistry';
import { useLocation, useNavigate } from 'react-router-dom';
import { HEADER_HEIGHT, MOBILE_HEADER_HEIGHT } from '@/constants/styles';
import { useThemeMode } from '@/contexts/ThemeContext';

const { Sider, Content } = Layout;
const { useBreakpoint } = Grid;

const StyledLayout = styled(Layout)<{ theme: any }>`
  height: calc(100vh - ${HEADER_HEIGHT});
  @media (max-width: 768px) {
    height: calc(100vh - ${MOBILE_HEADER_HEIGHT});
  }
  overflow: hidden;
  background: ${(props) => props.theme.colors.background2};
`;

const StyledSider = styled(Sider)<{ themes: any }>`
  background: ${(props) => props.themes.colors.background2} !important;
  height: 100%;
  border-right: 1px solid ${(props) => props.themes.colors.border || props.themes.colors.background};
  .ant-menu {
    background: ${(props) => props.themes.colors.background2} !important;
    color: ${(props) => props.themes.colors.text} !important;
    overflow: auto;
    padding-bottom: 80px;
    @media (max-width: 768px) {
      padding-bottom: 40px;
    }
  }
  .ant-menu-item {
    color: ${(props) => props.themes.colors.text} !important;
    &:hover, &.ant-menu-item-selected {
      background: ${(props) => props.themes.colors.secondary} !important;
      color: ${(props) => props.themes.colors.primary} !important;
    }
  }
  .ant-layout-sider-trigger {
    background: ${(props) => props.themes.colors.accent} !important;
    color: ${(props) => props.themes.colors.text} !important;
  }
`;

const SiderHeader = styled.div<{ theme: any }>`
  padding: 16px;
  text-align: center;
  font-weight: 700;
  color: ${(props) => props.theme.colors.primary};
  font-size: 20px;
  background: ${(props) => props.theme.colors.background2};
`;

const StyledContent = styled(Content)<{ theme: any }>`
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  padding: 32px;
  min-height: 400px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  max-height: 100%;
  @media (max-width: 768px) {
    padding: 16px 4px;
  }
`;

const ToolCard = styled.div<{ theme: any }>`
  width: 100%;
  background: ${(props) => props.theme.colors.white || props.theme.colors.background2};
  color: ${(props) => props.theme.colors.text};
  border-radius: ${(props) => props.theme.borders.radius};
  box-shadow: ${(props) => props.theme.shadows.small};
  padding: 32px;
  min-height: 70vh;
  max-height: 100%;
  overflow: auto;
  @media (max-width: 768px) {
    max-height: calc(100% - 48px);
  }
  @media (max-width: 768px) {
    padding: 18px 6px;
  }
`;

function Tools() {
  const { tools } = useSiteConfig();
  const location = useLocation();
  const navigate = useNavigate();
  const { theme } = useThemeMode();
  const [collapsed, setCollapsed] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const screens = useBreakpoint();
  const isMobile = !screens.md;

  // Get tool id from URL: /tools/:toolId
  const match = location.pathname.match(/\/tools\/?([^/]*)/);
  const urlToolId = match && match[1] ? match[1] : '';
  const defaultToolId = tools[0]?.id || '';
  const [selectedKey, setSelectedKey] = useState(urlToolId || defaultToolId);

  // Open drawer by default on mobile if no tool is selected
  useEffect(() => {
    if (isMobile && !urlToolId) {
      setDrawerOpen(true);
    }
  }, [isMobile, urlToolId]);

  // Sync selectedKey with URL
  React.useEffect(() => {
    if (urlToolId && urlToolId !== selectedKey) {
      setSelectedKey(urlToolId);
    }
    if (!urlToolId && selectedKey !== defaultToolId) {
      setSelectedKey(defaultToolId);
    }
    // eslint-disable-next-line
  }, [urlToolId, tools]);

  // When selectedKey changes, update URL
  React.useEffect(() => {
    if (selectedKey && selectedKey !== urlToolId) {
      navigate(`/tools/${selectedKey}`, { replace: true });
    }
    // eslint-disable-next-line
  }, [selectedKey]);

  const ToolComponent = selectedKey ? componentRegistry[selectedKey] : null;

  const menuItems = tools.map((tool: { id: string; name: string }) => ({
    key: tool.id,
    icon: <ToolOutlined />,
    label: tool.name,
  }));

  const handleMenuClick = ({ key }: { key: string }) => {
    setSelectedKey(key);
    if (isMobile) setDrawerOpen(false);
  };

  return (
    <StyledLayout theme={theme}>
      {isMobile ? (
        <>
          <Button
            type="primary"
            shape="circle"
            size="large"
            icon={<MenuUnfoldOutlined />} 
            onClick={() => setDrawerOpen(true)}
            style={{
              position: 'fixed',
              bottom: 24,
              right: 24,
              zIndex: 999,
              boxShadow: '0 4px 16px rgba(0,0,0,0.18)',
              background: theme.colors.secondary,
              color: theme.colors.text,
            }}
            aria-label="Open tools menu"
          />
          <Drawer
            title={<span style={{color: theme.colors.primary}}>All Tools</span>}
            placement="left"
            onClose={() => setDrawerOpen(false)}
            open={drawerOpen}
            bodyStyle={{ padding: 0, background: theme.colors.background2, color: theme.colors.text }}
            width={220}
            headerStyle={{ background: theme.colors.background2, color: theme.colors.primary }}
            style={{ background: theme.colors.background2 }}
          >
            <Menu
              mode="inline"
              selectedKeys={[selectedKey]}
              items={menuItems}
              onClick={handleMenuClick}
              style={{ height: '100%', borderRight: 0, background: theme.colors.background2, color: theme.colors.text }}
            />
          </Drawer>
        </>
      ) : (
        <StyledSider themes={theme}
          collapsible
          collapsed={collapsed}
          onCollapse={setCollapsed}
          width={220}
        >
          <SiderHeader theme={theme}>{collapsed ? <ToolOutlined /> : 'Tools'}</SiderHeader>
          <Menu
            mode="inline"
            selectedKeys={[selectedKey]}
            items={menuItems}
            onClick={handleMenuClick}
            style={{ height: '100%', borderRight: 0, background: theme.colors.background2, color: theme.colors.text }}
          />
        </StyledSider>
      )}
      <StyledContent theme={theme}>
        <ToolCard theme={theme}>
          <Suspense
            fallback={
              <div style={{ padding: 32, textAlign: 'center' }}>
                Loading tool...
              </div>
            }
          >
            {ToolComponent ? (
              <ToolComponent />
            ) : (
              <div
                style={{
                  color: theme.colors.text,
                  textAlign: 'center',
                  padding: 32,
                }}
              >
                Select a tool
              </div>
            )}
          </Suspense>
        </ToolCard>
      </StyledContent>
    </StyledLayout>
  );
}

export default Tools;
