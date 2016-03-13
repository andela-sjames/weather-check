var React = require('react');

var Forecast = React.createClass({

    getInitialState: function () {
        return {
            isLoading: true,
        }
    },

    componentDidMount: function () {
        var city = this.props.location.state.city;
        console.log(city)
    },

    render: function() {
        return (
            <div>
                <h2> You have reached the forecast page</h2>
            </div>
        );
    }

});

module.exports = Forecast;
