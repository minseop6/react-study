import * as React from 'react';
// import Clock from './clock.component';

interface ISubjectProps {
  title: string;
}

interface ISubjectState {
  date: Date;
}

class Subject extends React.Component<ISubjectProps, ISubjectState> {
  constructor(props: ISubjectProps) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  render() {
    const { title } = this.props;
    const { date } = this.state;
    return (
      <div className="Subject">
        {/* <Clock date={date} /> */}
        <h1>{title}</h1>
      </div>
    );
  }
}

export default Subject;
