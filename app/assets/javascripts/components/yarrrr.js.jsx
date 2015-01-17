

var Person = React.createClass({
  render: function() {
    var tehstyle = {
      border: '1px solid ' + this.props.color
    };
    return (
      <div style={tehstyle}>
        <h2> 
          {this.props.person.name}
        </h2>
        <span> 
          {this.props.person.occupation}
        </span>
      </div>
    );
  }
});

var ProfileIndex = React.createClass({

  getInitialState: function() {
    return {
      persons: JSON.parse(this.props.tehdata),
      color: "#0000ff"
    };
  },

  makeTheAjaxCall: function() {
    var _this = this;
    $.ajax("/welcome/update").done(function(data) {
      _this.setState({ 
        persons: data 
      });
    }).fail(function(data) {

    });
  },


  componentDidMount: function() {
    var _this = this;
    window.setTimeout(function() { _this.makeTheAjaxCall() }, 5000);
  },

  render: function() {
    var _this = this;
    var persons = this.state.persons.map(function(person) {
      return <Person person={person} color={ _this.state.color }/>
    });
    return (
      <div>
        {persons}
      </div>
    );
  }
});

