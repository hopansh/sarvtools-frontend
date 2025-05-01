// components/common/ToolCard.tsx
import { Card, Button } from 'antd';

export const ToolCard = ({ tool }: { tool: any }) => {
  return (
    <Card
      title={tool.name}
      cover={<img src={tool.icon} alt={tool.name} />}
      actions={[
        <Button type="primary" href={`/tools/${tool.id}`}>
          Use Tool
        </Button>,
      ]}
    >
      {tool.description}
    </Card>
  );
};
