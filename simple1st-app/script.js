
//Standard Hello World, simple renders dynamically a HTML element defined in a ES6 and JSX syntax element
const element = <h1>Hello, world</h1>;

ReactDOM.render(
  element,
  document.getElementById('one')
);

//Using Babel to precompile the JSX you can have the added bonus of using ES6!!


//Create the base class component and its initial state plus constructors
class UrlForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  //changeHandler is the source of truth for the state of the passed event
  changeHandler(event) {
    this.setState({ value: event.target.value });
  }

  submitHandler(event) {
    event.preventDefault();
  }

  //When ReactDOM.render is called this will fire, this also creates the first instance of the DOM element
  render() {
    return (
      <form className="pure-form" onSubmit={this.submitHandler}>
        <label>
          Picture URL:
          <input type="text" value={this.state.value} onChange={this.changeHandler} />
        </label>
        <input className="pure-button pure-button-primary" type="submit" value="Submit" />
        <img className="pure-img" src={this.state.value} />
      </form>
    );

  }

}


//Activates renderer(render) and chooses the component element and when to render
ReactDOM.render(<UrlForm />, document.getElementById('two'));
