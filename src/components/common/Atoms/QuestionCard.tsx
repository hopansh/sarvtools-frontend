import { Card } from 'antd';
import Paragraph from 'antd/es/typography/Paragraph';
import React, { ReactNode } from 'react';

interface QuestionProps {
  question: {
    question: string;
  };
  index: number;
  children: ReactNode;
}

const QuestionCard: React.FC<QuestionProps> = ({
  question,
  index,
  children,
}) => (
  <Card key={index} style={{ textAlign: 'left' }}>
    <Paragraph>
      <strong>
        Q{index + 1}: {question.question}
      </strong>
    </Paragraph>
    {children}
  </Card>
);

export default QuestionCard;
