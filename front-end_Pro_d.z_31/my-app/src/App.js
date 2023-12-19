import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

class ListItem extends Component {
  render() {
    return <li>{this.props.value}</li>;
  }
}

ListItem.propTypes = {
  value: PropTypes.string.isRequired,
};

class ItemList extends Component {
  render() {
    return (
      <ul>
        {this.props.items.map((item) => (
          <ListItem key={item.id} value={item.name} />
        ))}
      </ul>
    );
  }
}

ItemList.propTypes = {
  items: PropTypes.array.isRequired,
};

class App extends Component {
  state = {
    items: [
      { id: 1, name: 'Товар 1' },
      { id: 2, name: 'Товар 2' },
      { id: 3, name: 'Товар 3' },
      { id: 4, name: 'Товар 4' },
      { id: 5, name: 'Товар 5' },
      { id: 6, name: 'Товар 6' },
      { id: 7, name: 'Товар 7' },
    ]
  };

  render() {
    return (
      <div className="App">
        <ItemList items={this.state.items} />
      </div>
    );
  }
}

export default App;