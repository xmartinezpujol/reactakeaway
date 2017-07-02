import React from 'react';
import BaseCard from './BaseCard.js';
import SizeCard from './SizeCard.js';
import SauceCard from './SauceCard.js';
import IngredientsCard from './IngredientsCard.js';
import '../css/CardList.css';

class CardList extends React.Component {
  constructor(props) {
    super(props);

    this.setBaseFood = this.setBaseFood.bind(this);
    this.setSizeFood = this.setSizeFood.bind(this);
    this.setSauceFood = this.setSauceFood.bind(this);
    this.setIngredients = this.setIngredients.bind(this);
  }

  componentWillMount() {
    if(this.props.type === 'base'){
      this.state = { active : window.ClientOrder.base }
    }
    else if(this.props.type === 'size'){
      this.state = { active : window.ClientOrder.size }
    }
    else if(this.props.type === 'sauce'){
      this.state = { active : window.ClientOrder.sauce }
    }
    else if(this.props.type === 'ingredients'){
      this.state = { multactive : window.ClientOrder.ingredients }
    }
  }

  // Sets selected food as order
  setBaseFood(name) {

    //Get the selected item
    let selectedfood = this.props.data.filter(food => {
      return food.name === name;
    });

    //Save order to JSON
    window.ClientOrder.base = selectedfood[0].name;
    window.ClientOrder.baseprice = selectedfood[0].price;

    this.setState({
      active: name
    })

    //Update order in App
    this.props.onOrderUpdate();
  }

  // Sets selected size as order
  setSizeFood(name, price) {

    //Save size to JSON
    window.ClientOrder.size = name;
    window.ClientOrder.sizeprice = price;

    this.setState({
      active: name
    })

    //Update order in App
    this.props.onOrderUpdate();
  }

  // Sets selected size as order
  setSauceFood(name, price) {

    //Save size to JSON
    window.ClientOrder.sauce = name;
    window.ClientOrder.sauceprice = price;

    this.setState({
      active: name
    })

    //Update order in App
    this.props.onOrderUpdate();
  }

  // Sets selected size as order
  setIngredients(name) {

    //Get current active ingredients and save the new one
    let inglist = window.ClientOrder.ingredients;

    //Check for repeated ingredients before adding
    let ingchecklist = inglist.filter(food => {
      return food === name;
    })

    if(ingchecklist.length === 0){
      inglist.push(name);
    }
    else{
      inglist = inglist.filter(food => {
        return food !== name;
      })
    }

    this.setState({
      multactive: inglist
    })

     window.ClientOrder.ingredients = inglist;

    //Update order in App
    this.props.onOrderUpdate();
  }

  render() {
    return (
      <div className={this.props.type === 'ingredients' ? 'cards-multiselectlist' : 'cards-list'}>
        {/* BaseCard List */}
        {this.props.type === 'base' && this.props.data.map(item => {
          return (
            <BaseCard
              name={item.name}
              key={item.name}
              color={item.color}
              image={item.img}
              text={item.desc}
              price={item.price}
              selected={this.state.active === item.name ? true : false}
              type={this.props.type}
              onSetBaseFood={this.setBaseFood}
            />
          );
        })}
        {/* SizeCard List */}
        {this.props.type === 'size' && this.props.data.map(item => {
          return (
            <SizeCard
              name={item.name}
              key={item.name}
              color={item.color}
              image={item.img}
              price={item.price}
              selected={this.state.active === item.name ? true : false}
              type={this.props.type}
              onSetSizeFood={this.setSizeFood}
            />
          );
        })}
        {/* SauceCard List */}
        {this.props.type === 'sauce' && this.props.data.map(item => {
          return (
            <SauceCard
              name={item.name}
              key={item.name}
              color={item.color}
              image={item.img}
              text={item.desc}
              price={item.price}
              selected={this.state.active === item.name ? true : false}
              type={this.props.type}
              onSetSauceFood={this.setSauceFood}
            />
          );
        })}
        {/* ingredientsCard List */}
        {this.props.type === 'ingredients' && this.props.data.map(item => {

          return (
            <IngredientsCard
              name={item.name}
              key={item.name}
              color={item.color}
              image={item.img}
              selected={this.state.multactive.filter(food => {
                return food === item.name;
              })[0] === item.name ? true : false}
              type={this.props.type}
              onSetIngredients={this.setIngredients}
            />
          );
        })}
      </div>
    );
  }
}

export default CardList
