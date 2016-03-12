var React = require('react')

var Search = React.createClass({

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
        console.log(this.state.city)
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
