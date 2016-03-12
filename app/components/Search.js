var React = require('react')

var Search = React.createClass({
    render: function(){
        var direction = this.props.flexDirection
        return (
            <div className="search" style={{flexDirection: direction ? direction : "row"}}>
                <input style={{marginBottom: direction ? "10px" : "0"}} type="text"  placeholder="55 Moleye street"/>
                <button className="btn btn-success">Get Weather</button>
            </div>

        )
    }
})


module.exports = Search;
