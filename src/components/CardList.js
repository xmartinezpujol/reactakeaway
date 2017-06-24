import React from 'react';
import Card from './Card.js';
import '../css/CardList.css';

class CardList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: ''
    };

    this.setBaseFood = this.setBaseFood.bind(this);
  }

  // Sets selected food as order
  setBaseFood(name) {

    //Get the selected item
    let selectedfood = this.props.shoplist.filter(food => {
      return food.name === name;
    });

    //Save order to JSON
    window.ClientOrder = {
      base: selectedfood[0].name,
      price: selectedfood[0].price
    }

    this.setState({
      active: name
    })

    //Update order in App
    this.props.onOrderUpdate();
  }

  render() {
    return (
      <div className="cards-list">
        {this.props.shoplist.map(item => {
          return (
            <Card
              name={item.name}
              key={item.name}
              color={item.color}
              image={item.img}
              text={item.desc}
              price={item.price}
              selected={this.state.active === item.name ? true : false}
              //onAddToOrder={this.handleOrder}
              //onRemoveToOrder={this.removeOrder}
              onSetBaseFood={this.setBaseFood}
            />
          );
        })}
      </div>
    );
  }
}

export default CardList
