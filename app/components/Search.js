var React = require('react');
var Callapi = require('../weatherapi/Callapi');


var Search = React.createClass({

    contextTypes: {
        router: React.PropTypes.object.isRequired
    },

    getInitialState: function() {
        return {
            city: ''
        }
    },

    onUpdateCity: function (e) {
        this.setState({
            city: e.target.value
        })
    },

    onSubmitCity: function () {
        var city = this.state.city
        this.context.router.push({
            pathname: '/forecast/' + this.state.city,
            state: {
                city: this.state.city
            }
        })

    },

    render: function(){
        var direction = this.props.flexDirection
        return (
            <div className="search" style={{flexDirection: direction ? direction : "row"}}>
                <input style={{marginBottom: direction ? "10px" : "0"}} type="text" onChange={this.onUpdateCity} value={this.state.city} placeholder="55 Moleye street"/>
                <button className="btn btn-success" onClick={this.onSubmitCity}>Get Weather</button>
            </div>

        )
    }
})


module.exports = Search;
