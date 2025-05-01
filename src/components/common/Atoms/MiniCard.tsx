import { theme } from '@/styles';
import styled from '@emotion/styled';
import React from 'react';

export type MiniCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};
const Styled = styled.div`
  background: ${theme.colors.white};
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 220px;
  padding: 24px;
  gap: 16px;
  box-shadow: ${theme.shadows.small};
  transition: all 0.3s ease;
  text-align: left;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &:hover {
    box-shadow: ${theme.shadows.large};
    transform: translateY(-5px);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: ${theme.colors.primary};
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }

  @media (max-width: 768px) {
    width: calc(50% - 8px);
    height: 200px;
    padding: 16px;
    gap: 12px;
  }

  .title {
    font-size: 20px;
    font-weight: 600;
    color: ${theme.colors.primary};
    display: flex;
    align-items: flex-start;
    gap: 12px;

    @media (max-width: 768px) {
      font-size: 12px;
      gap: 6px;
    }
  }

  .icon {
    font-size: 24px;
    color: ${theme.colors.primary};
    transition: transform 0.3s ease;

    @media (max-width: 768px) {
      font-size: 20px;
    }
  }

  &:hover .icon {
    transform: scale(1.1);
  }

  .description {
    font-size: 14px;
    font-weight: 400;
    color: ${theme.colors.text};
    line-height: 1.6;

    @media (max-width: 768px) {
      font-size: 12px;
    }
  }
`;

const MiniCard = (props: MiniCardProps) => {
  const { title, description, icon } = props;
  return (
    <Styled>
      <div className="title">
        <span className="icon">{icon}</span>
        {title}
      </div>
      <div className="description">{description}</div>
    </Styled>
  );
};

export default MiniCard;