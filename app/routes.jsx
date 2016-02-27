var Route = ReactRouter.Route;
var RouteHandler = ReactRouter.RouteHandler;

var About = React.createClass({
  render: function () {
    return <h2>About</h2>;
  }
});

var Inbox = React.createClass({
  render: function () {
    return <h2>Inbox</h2>;
  }
});

// TODO: update to react 0.13.
var App = React.createClass({
  render: function() {
    return (
      <div className="app">
        <header className="header">
          US-prices app
        </header>
      </div>
    )
  }
});

// declare our routes and their hierarchy
var routes = (
  <Route handler={App}>
    <Route path="about" handler={About}/>
    <Route path="inbox" handler={Inbox}/>
  </Route>
);

module.exports = routes;
