var React = require('react');
var Search = require('./Search')

var styles = {
    container: {
        backgroundImage: "url('app/images/react.svg')"
    },

    header: {
        fontSize: 45,
        color: '#fff',
        fontWeight: 100,
      },
}

var Home = React.createClass({

    render: function() {
        return (
            <div id='home' style={styles.container}>
                <h1 style={styles.header}>Enter a City and State</h1>
                <Search flexDirection="column"/>
            </div>
        );
    }

});

module.exports = Home;
