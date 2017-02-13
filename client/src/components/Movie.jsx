var React = require('react');
var Movie = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequird
  },

  render: function() {
    return (
      <div className="movie">
        <a href="http://www.imdb.com/">{this.props.title} <h1>showtimes</h1></a>
      </div>
      );
  }
});

module.exports = Movie;