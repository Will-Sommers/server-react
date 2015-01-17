var DressSizeInput = React.createClass({
  getInitialState: function() {
    return {selectedSize: this.props.size} ;
  },

  componentWillReceiveProps: function(nextProps) {
    this.setState({selectedSize: nextProps.size}); 
  },

  placeholderText: function() {
     return this.props.primary ? "Select a Size" : "Select a free Backup Size";
  },

  changeSize: function(e) {
    this.setState({selectedSize: e.target.value });
  },

  render: function() {
    var _this = this;
    var options = this.props.availableSizes.map(function(size) {
      return <option value={size}>{size}</option>;
    });
    return (
      <div>
        <input type="text" style={{width: "300px"}} value={this.state.selectedSize} placeholder={this.placeholderText()} readOnly="true" />
        <select value={this.state.selectedSize} onChange={_this.changeSize } >
          {options}
        </select>
      </div>
    );
  }
});

var ZipcodeInput = React.createClass({
  getInitialState: function() { 
    return {
      zipcode: this.props.zipcode
    };
  },
  handleZipChange: function(e) {
    this.setState({zipcode: e.target.value });
  },

  componentWillReceiveProps: function(nextProps) {
    this.setState({zipcode: nextProps.zipcode }); 
  },

  render: function() {
    var _this = this;
    return (
      <div> 
        <input type="text" value={this.state.zipcode} onChange={function(e) {_this.handleZipChange(e)}}> </input>
      </div>
    );
  }
});

var DressReservationForm = React.createClass({
  getInitialState: function() { 
    return {
      zipcode: null,
      primaryDressSize: null,
      backupDressSize: null, 
      availableSizes: [2,4,6,8,10,12]
    };
  },

  componentDidMount: function() {
    this.makeTheAjaxCall();
  },

  makeTheAjaxCall: function() {
    var _this = this;
    $.ajax("/welcome/user_form_data").done(function(data) {
      var temp_hash = {};
      Object.keys(data).map(function(key) {
        temp_hash[key] = data[key];
      });
      _this.setState(temp_hash);
    }).fail(function(data) {

    });
  },

  render: function() {
    return (
      <div>
        <h2> hi world </h2>
        <ZipcodeInput zipcode={this.state.zipcode}/>
        <DressSizeInput primary={true} size={this.state.primaryDressSize} availableSizes={this.state.availableSizes} />
        <DressSizeInput primary={false} size={this.state.backupDressSize} availableSizes={this.state.availableSizes}/>
        <button> Reserve Now! </button>
      </div>
    );
  }
});
