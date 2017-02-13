var React = require('react');
var MovieList = require('./MovieList.jsx');

var movies = [
{id: 1, title: "La La Land"},
{id: 2, title: "Lion"},
{id: 3, title: "Finding Dory"},
{id: 4, title: "Moonlight"},
{id: 5, title: "Hidden Figures"}
];

var MovieBox = React.createClass({
  getInitialState: function() {
    return { data: movies };
  },

  render: function() {
    return(
      <div className="movie-box">
      <p></p>
      <MovieList data={ this.state.data }/>
      </div>
      );
  }
});


module.exports = MovieBox;