var React = require('react');
var Loading = require('../components/Loading')
var Callapi = require('../weatherapi/Callapi')
var utils = require('../weatherapi/utils');
var getDate = utils.getDate;
var convertTemp = utils.convertTemp;


var styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxWidth: 1200,
    margin: '50px auto'
  },
  dayContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: 35
  },
  header: {
    fontSize: 65,
    color: '#333',
    fontWeight: 100,
    textAlign: 'center'
  },
  subheader: {
    fontSize: 30,
    color: '#333',
    fontWeight: 100
  },
  weather: {
    height: 130
  }
}

function DayItem (props) {
    var date = getDate(props.day.dt);
    var icon = props.day.weather[0].icon;
    return (
        <div style={styles.dayContainer}>
            <img style={styles.weather} src={'./app/images/weather-icons/' + icon + '.svg'} alt='Weather' />
            <h2 style={styles.subheader}>{date}</h2>
        </div>
        )
    }

function ForecastUI (props) {
    return (
        <div>
            <h1 style={styles.header}>{props.city}</h1>
            <div style={styles.container}>
                {props.forecast.list.map(function (listItem) {
                    return <DayItem key={listItem.dt} day={listItem} />
            })}
            </div>
        </div>
        )
    }


var Forecast = React.createClass({

    getInitialState: function () {
        return {
            isLoading: true,
            api: {},
            city: '',
        }
    },

    componentDidMount: function () {
        var city = this.props.location.state.city;
        Callapi.getDaysForcast(city)
            .then(function (response) {
                console.log(response.data)
                this.setState({
                    isLoading: false,
                    api: response.data,
                    city: city
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
                <ForecastUI city={this.state.city} forecast={api} />
            </div>
        );
    }

});

module.exports = Forecast;
