var React = require('react');
var Loading = require('../components/Loading')
var Callapi = require('../weatherapi/Callapi');

var Forecast = React.createClass({

    getInitialState: function () {
        return {
            isLoading: true,
            api: {},
        }
    },

    componentDidMount: function () {
        var city = this.props.location.state.city;
        Callapi.getWeather(city)
            .then(function (response) {
                console.log(response.data)
                this.setState({
                    isLoading: false,
                    api: response.data,
            })
        }.bind(this))
            .catch(function (response) {
                console.log(response.data);
        });


    },


    render: function() {
        var api = this.state.api
        return (
            this.state.isLoading === true ? <Loading text={'Fetching data'}/> :
            <div>
                <h2> You have reached the forecast page</h2>
                <p>{JSON.stringify(api, null, ' ')}</p>
            </div>
        );
    }

});

module.exports = Forecast;
