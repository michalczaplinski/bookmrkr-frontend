$(document).ready(function() {

  // $('a.item').on("click", function(e) {
  //   e.preventDefault();
  //   $('.item').removeClass('active');
  //   $(this).addClass('active');
  // });
  $('.right.menu.open').on("click",function(e){
        e.preventDefault();
    $('.ui.vertical.menu').toggle();
  });

  $('.ui.dropdown').dropdown();

});

// var React = require('react')

// var Timer = React.createClass({
//   getInitialState: function() {
//     return {secondsElapsed: 0};
//   },
//   tick: function() {
//     this.setState({secondsElapsed: this.state.secondsElapsed + 1});
//   },
//   componentDidMount: function() {
//     this.interval = setInterval(this.tick, 1000);
//   },
//   componentWillUnmount: function() {
//     clearInterval(this.interval);
//   },
//   render: function() {
//     return (
//       <div className="well">
//         Seconds Elapsed: {this.state.secondsElapsed}
//       </div>
//     );
//   }
// });

// React.render(<Timer />, document.getElementById('content'));


// var Item = React.createClass({
//   render: function() {
//     return (
//       <div className="item">
//         <div className="ui input">
//             <input type="text" placeholder="Search..." />
//         </div>
//       </div>
//       );
//   }
// });

// React.render(<Item />, document.getElementById('content'));


// var HelloWorld = React.createClass({
//   render: function() {
//     return (
//       <p>
//         Hello, <input type="text" placeholder="Your name here" />!
//         It is {this.props.date.toTimeString()}
//       </p>
//     );
//   }
// });

// setInterval(function() {
//   React.render(
//     <HelloWorld date={new Date()} />,
//     document.getElementById('example')
//   );
// }, 500);
