var React = require('react');
var Movie = require('./Movie.jsx');

var MovieList = React.createClass({
  propTypes: {
    data: React.PropTypes.array.isRequired
  },

  render: function() {

    var movieNodes = this.props.data.map(function(movie) {
        return (
            <Movie title={movie.title} key={movie.id}>
             
            </Movie>
          );
    });

    return (
      <div className="movie-list">
      <p>UK Opening This Week</p>
     
        {movieNodes}
        <a className="more-opening" href="http://www.imdb.com/calendar/?region=gb&pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1970868962&pf_rd_r=19SXD7R1Y24TMAYDKRQZ&pf_rd_s=right-2&pf_rd_t=15061&pf_rd_i=homepage&ref_=hm_otw_sm">See more opening this week >></a>
      <button type='button'>Get Showtimes >></button>

      </div>
      );
  }
});

module.exports = MovieList;