// import * as React from 'react';

// interface IClockProps {
//   date: Date;
// }

// interface IClockState {
//   date: Date;
// }

// class Clock extends React.Component<IClockProps, IClockState> {
//   private timerID: any;

//   constructor(props: IClockProps) {
//     super(props);
//     this.state = {
//       date: props.date,
//     };
//   }

//   componentDidMount() {
//     console.log('component did mount');
//     this.timerID = setInterval(() => {
//       this.tick();
//     });
//   }

//   componentWillUnmount() {
//     console.log('component will unmount');
//     clearInterval(this.timerID);
//   }

//   tick() {
//     this.setState({
//       date: new Date(),
//     });
//   }

//   render() {
//     const { date } = this.state;
//     return (
//       <div className="Clock">
//         <h2>{date.toLocaleTimeString()}</h2>
//       </div>
//     );
//   }
// }

// export default Clock;
