var React = require('react');

var DetailView = React.createClass({

    componentDidMount: function() {
        var value = this.props.location.state.ListItems
        console.log(value);
    },

    render: function() {
        return (
            <div>
                <h2>you have reached the detail view page...</h2>
            </div>
        );
    }

});

module.exports = DetailView;
