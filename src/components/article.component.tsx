import * as React from 'react';

interface IArticleProps {
  title: string;
  contents: string;
}

class Article extends React.Component<IArticleProps> {
  constructor(props: IArticleProps) {
    super(props);
    this.state = {};
  }

  render() {
    const { title, contents } = this.props;
    return (
      <div className="Article">
        <h2>{title}</h2>
        {contents}
      </div>
    );
  }
}

export default Article;
