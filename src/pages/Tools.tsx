import { toolComponents } from '@/constants/toolMap';
import { categories, ToolType } from '@/constants/tools';
import styled from '@emotion/styled';
import React, { Suspense, useState } from 'react';

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

type CategoryType = {
  name: string;
  tools?: ToolType[];
};

function Tools({
  category,
  tool,
}: {
  category?: CategoryType;
  tool?: ToolType | null;
}) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    category?.name || null,
  );

  const ToolComponent = tool?.id ? toolComponents[tool.id] : null;

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setSelectedCategory(event.target.value || null);
  };

  const filteredCategories = selectedCategory
    ? categories.filter((cat) => cat.name === selectedCategory)
    : categories;

  return (
    <Styled>
      {tool ? (
        <Suspense fallback={<div>Loading tool...</div>}>
          {ToolComponent ? <ToolComponent /> : <div>Error loading tool</div>}
        </Suspense>
      ) : (
        <>
          <div className="tools-header">{category?.name || 'All Tools'}</div>
          <div className="filter-container">
            <select
              value={selectedCategory || ''}
              onChange={handleCategoryChange}
            >
              <option value="">All Categories</option>
              {categories.map((cat) => (
                <option key={cat.name} value={cat.name}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>
          {filteredCategories.length > 0 ? (
            filteredCategories.map((cat) => (
              <div key={cat.name}>
                <div className="tools-header">{cat.name}</div>
                <div className="tools-list">
                  {cat.tools?.map((t) => (
                    <div key={t.id} className="tool-item">
                      <div className="tool-icon">🔧</div>{' '}
                      {/* Replace with actual icons */}
                      <div className="tool-name">{t.name}</div>
                      <div className="tool-description">{t.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="no-tools">No tools available</div>
          )}
        </>
      )}
    </Styled>
  );
}

export default Tools;
