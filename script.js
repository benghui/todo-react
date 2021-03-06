class List extends React.Component {
  changeHandler = this.changeHandler.bind(this);
  addToList = this.addToList.bind(this);

  state = {
    list: [],
    word: "",
    error: "Please enter an item"
  };

  changeHandler(event) {
    if (event.target.value.length > 0) {
      this.setState({ error: "" });
    }
    this.setState({ word: event.target.value });
  }

  addToList() {
    let listItem = this.state.list;
    listItem.unshift(this.state.word);
    this.setState({ list: listItem, word: "", error: "Please enter an item" });
  }

  render() {
    // render the list with a map() here
    let list = this.state.list.map((list, index) => {
      return <li key={index}>{list}</li>;
    });

    return (
      <div className="list">
        <input onChange={this.changeHandler} value={this.state.word} />
        <button onClick={this.addToList}>add item</button>
        {this.state.error}
        <ul>{list}</ul>
      </div>
    );
  }
}

ReactDOM.render(
    <List/>,
    document.getElementById('root')
);