var React = require('react');
var Search = require('./Search')
require('../styles/styles.css')


var Header = React.createClass({
    render: function(){
        return (
            <div id="header">
                <div>
                    <h2 className="title">Andela Weather</h2>
                </div>
                <Search />
            </div>
        )
    }
})


var Main = React.createClass({

    render: function() {
        return (
            <div className='main-container'>
                <Header />
                {this.props.children}
            </div>
        );
    }

});

module.exports = Main;
