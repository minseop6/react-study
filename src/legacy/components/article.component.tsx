import * as React from 'react';

interface IArticleProps {
  title: string;
  contents: string;
}

export const Article: React.FC<IArticleProps> = (props): JSX.Element => {
  const { title, contents } = props;

  return (
    <div className="Article">
      <h2>{title}</h2>
      {contents}
    </div>
  );
};

export default Article;
