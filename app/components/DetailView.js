var React = require('react');
var utils = require('../weatherapi/utils');
require('../styles/styles.css')
var getDate = utils.getDate;
var convertTemp = utils.convertTemp;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;


function DetailPage (props) {
    var date = getDate(props.value.day.dt);
    var icon = props.value.day.weather[0].icon;
    var des = props.value.day.weather[0].description;
    var min = convertTemp(props.value.day.temp.min);
    var max = convertTemp(props.value.day.temp.max);
    var humidity = props.value.day.humidity;


    return(
        <div id="detailcontainer">
            <div>
                <img id="weather" src={'./app/images/weather-icons/' + icon + '.svg'} alt='Weather' />
                <h2>{date}</h2>
            </div>

            <div>
                <h3>{props.value.city}</h3>
                <h3>{des}</h3>
                <h3>Min Temp: {min} degrees</h3>
                <h3>Max Temp: {max} degrees</h3>
                <h3>Humidity: {humidity}</h3>
            </div>

            <div className='col-sm-12'>
                <Link to={{pathname:`forecast/${props.value.city}`}}>
                    <button type='button' className='btn btn-lg btn-success'>Go Back</button>
                </Link>
            </div>

        </div>
    )
}

var DetailView = React.createClass({

    getInitialState: function() {
        return {
            value: this.props.location.state.ListItems,
        }
    },


    render: function() {

        var value = this.state.value

        return (
            <div id="centercontainer">
                <p></p>
                <DetailPage value={value}/>
            </div>
        );
    }

});

module.exports = DetailView;
