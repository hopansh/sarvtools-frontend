import { toolComponents } from '@/constants/toolMap';
import { ToolType } from '@/constants/tools';
import styled from '@emotion/styled';
import { Suspense } from 'react';
import { useSiteConfig } from '@/contexts/SiteConfigContext';
import { Link } from 'react-router-dom';

// Styled component moved outside the function for optimization
const Styled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background-color: #f0f2f5;
  min-height: 100vh;

  .tools-header {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  .tools-list {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: center;
  }

  .tool-item {
    padding: 16px;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    cursor: pointer;
    transition: transform 0.2s ease;
    text-align: center;
    width: 200px;

    &:hover {
      transform: scale(1.05);
    }

    .tool-icon {
      font-size: 48px;
      margin-bottom: 8px;
    }

    .tool-name {
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 4px;
    }

    .tool-description {
      font-size: 14px;
      color: #666;
    }
  }

  .no-tools {
    font-size: 16px;
    color: #888;
  }

  .filter-container {
    margin-bottom: 16px;
    display: flex;
    gap: 8px;

    select {
      padding: 8px;
      border: 1px solid #ddd;
      border-radius: 4px;
    }
  }
`;

function Tools({ tool }: { tool?: ToolType | null }) {
  const tools = useSiteConfig().tools;
  const ToolComponent = tool?.id ? toolComponents[tool.id] : null;

  return (
    <Styled>
      {tool ? (
        <Suspense fallback={<div>Loading tool...</div>}>
          {ToolComponent ? <ToolComponent /> : <div>Error loading tool</div>}
        </Suspense>
      ) : (
        <div className="tools-list">
          {tools?.map((t) => (
            <Link to={`/tools/${t.id}`} key={t.id}>
              <div key={t.id} className="tool-item">
                <div className="tool-icon">🔧</div>{' '}
                {/* Replace with actual icons */}
                <div className="tool-name">{t.name}</div>
                <div className="tool-description">{t.description}</div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </Styled>
  );
}

export default Tools;
