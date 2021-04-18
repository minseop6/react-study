import * as React from 'react';

interface INavigationProps {
  subjectList: string[];
}

interface INavigationState {
  selectedSubject: string;
}

class Navigation extends React.Component<INavigationProps, INavigationState> {
  constructor(props: INavigationProps) {
    super(props);
    this.state = {
      selectedSubject: 'HTML',
    };
  }

  chagneSubject(selectedSubject: string) {
    this.setState({
      selectedSubject,
    });
  }

  constructNavigationList() {
    const { subjectList } = this.props;

    return subjectList.map(item => {
      return (
        <li key={item}>
          <button type="button" onClick={() => this.chagneSubject(item)}>
            {item}
          </button>
        </li>
      );
    });
  }

  render() {
    const { selectedSubject } = this.state;
    return (
      <div className="Navigation">
        {selectedSubject}
        <ul>{this.constructNavigationList()}</ul>
      </div>
    );
  }
}

export default Navigation;
