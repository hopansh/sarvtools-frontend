import React, { ReactNode } from 'react';
import { Space } from 'antd';

interface SpaceProps {
  children: ReactNode;
}

const SpaceComponent: React.FC<SpaceProps> = ({ children }) => {
  return (
    <Space direction="vertical" size="large" style={{ display: 'flex' }}>
      {children}
    </Space>
  );
};

export default SpaceComponent;
