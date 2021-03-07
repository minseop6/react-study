import { React, Component } from 'react';
import PropTypes from 'prop-types';

class Article extends Component {
  constructor(props) {
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

Article.propTypes = {
  title: PropTypes.string.isRequired,
  contents: PropTypes.string.isRequired,
};

export default Article;
