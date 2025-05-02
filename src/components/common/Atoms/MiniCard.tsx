import { theme } from '@/styles';
import styled from '@emotion/styled';

export type MiniCardProps = {
  title: string;
  description: string;
};
const Styled = styled.div`
  background: ${theme.colors.white};
  display: flex;
  flex-direction: column;
  width: 300px;
  flex-grow: 1;
  padding: 12px;
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
    padding: 16px;
    gap: 6px;
  }

  .title {
    font-size: ${theme.fontSizes.small};
    font-weight: 600;
    color: ${theme.colors.text};
    display: flex;
    align-items: flex-start;
    @media (max-width: 768px) {
      font-size: 12px;
    }
  }

  .description {
    font-size: 14px;
    font-weight: 400;
    color: ${theme.colors.subtext};
    line-height: 1.4;
    @media (max-width: 768px) {
      font-size: 11px;
    }
  }
`;

const MiniCard = (props: MiniCardProps) => {
  const { title, description } = props;
  return (
    <Styled>
      <div className="title">
        {title}
      </div>
      <div className="description">{description}</div>
    </Styled>
  );
};

export default MiniCard;