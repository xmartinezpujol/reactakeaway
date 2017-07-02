import React, { Component } from 'react';
import './css/App.css';
import CardList from './components/CardList';
import PriceTotal from './components/PriceTotal';
import Modal from './components/Modal';

const INGREDIENT_PRICE = 1.20;

let food = {
  base: [
    {
      name: "ramen",
      color: "#D32F2F",
      img: "./img/ramen.jpg",
      price: 2.10,
      desc: "Bacon ipsum dolor amet andouille tri-tip beef ribs bresaola short loin, cow spare ribs filet mignon pork pork chop picanha."
    },
    {
      name: "udon",
      color: "#673AB7",
      img: "./img/udon.jpg",
      price: 3.50,
      desc: "Bacon ipsum dolor amet andouille tri-tip beef ribs bresaola short loin, cow spare ribs filet mignon pork pork chop picanha."
    },
    {
      name: "mifun",
      color: "#EF6C00",
      img: "./img/mifun.jpg",
      price: 1.80,
      desc: "Bacon ipsum dolor amet andouille tri-tip beef ribs bresaola short loin, cow spare ribs filet mignon pork pork chop picanha."
    },
    {
      name: "soba",
      color: "#827717",
      img: "./img/soba.jpg",
      price: 3.20,
      desc: "Bacon ipsum dolor amet andouille tri-tip beef ribs bresaola short loin, cow spare ribs filet mignon pork pork chop picanha."
    },
    {
      name: "lo mein",
      color: "#536DFE",
      img: "./img/lomein.jpg",
      price: 2.75,
      desc: "Bacon ipsum dolor amet andouille tri-tip beef ribs bresaola short loin, cow spare ribs filet mignon pork pork chop picanha."
    },
    {
      name: "jasmine rice",
      color: "#FBC02D",
      img: "./img/rice.jpg",
      price: 1.50,
      desc: "Bacon ipsum dolor amet andouille tri-tip beef ribs bresaola short loin, cow spare ribs filet mignon pork pork chop picanha."
    }
  ],
  size: [
    {
      name: "small",
      color: "#536DFE",
      img: "./img/lomein.jpg",
      price: 1  // 0% rise
    },
    {
      name: "big",
      color: "#D32F2F",
      img: "./img/ramen.jpg",
      price: 1.5  // 50% rise
    }
  ],
  sauce: [
    {
      name: "yakisoba",
      color: "#536DFE",
      img: "./img/udon.jpg",
      price: 0,  // free
      desc: "Bacon ipsum dolor amet andouille tri-tip beef ribs bresaola short loin, cow spare ribs filet mignon pork pork chop picanha."
    },
    {
      name: "peanut",
      color: "#827717",
      img: "./img/rice.jpg",
      price: 0.25,  // free
      desc: "Bacon ipsum dolor amet andouille tri-tip beef ribs bresaola short loin, cow spare ribs filet mignon pork pork chop picanha."
    },
    {
      name: "oyster",
      color: "#FBC02D",
      img: "./img/ramen.jpg",
      price: 0.30,  // free
      desc: "Bacon ipsum dolor amet andouille tri-tip beef ribs bresaola short loin, cow spare ribs filet mignon pork pork chop picanha."
    },
    {
      name: "thai chili",
      color: "#EF6C00",
      img: "./img/udon.jpg",
      price: 0.50,  // free
      desc: "Bacon ipsum dolor amet andouille tri-tip beef ribs bresaola short loin, cow spare ribs filet mignon pork pork chop picanha."
    }
  ],
  ingredients: [
    {
      name: "chicken",
      color: "#536DFE",
      img: "./img/udon.jpg",
    },
    {
      name: "beef",
      color: "#827717",
      img: "./img/rice.jpg",
    },
    {
      name: "pork",
      color: "#FBC02D",
      img: "./img/ramen.jpg",
    },
    {
      name: "mushrooms",
      color: "#EF6C00",
      img: "./img/udon.jpg",
    },
    {
      name: "bacon",
      color: "#D32F2F",
      img: "./img/ramen.jpg",
    },
    {
      name: "corn",
      color: "#827717",
      img: "./img/udon.jpg",
    },
    {
      name: "broccoli",
      color: "#FBC02D",
      img: "./img/ramen.jpg",
    },
    {
      name: "bamboo",
      color: "#536DFE",
      img: "./img/udon.jpg",
    }
  ]
};

window.ClientOrder = {
  base : '',
  baseprice : 0,
  size : '',
  sizeprice : 0,
  sauce : '',
  sauceprice : 0,
  ingredients: []
};

let alert_message = '';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order: "Let's order something!",
      total: 0,
      currentview: 1,
      alerting: false
    };

    this.orderUpdate = this.orderUpdate.bind(this);
    this.navigateLeft = this.navigateLeft.bind(this);
    this.navigateRight = this.navigateRight.bind(this);
    this.closeAlerts = this.closeAlerts.bind(this);
  }

  orderUpdate() {
    let sauceprice = window.ClientOrder.sauceprice;
    let totalprice = window.ClientOrder.baseprice * (window.ClientOrder.sizeprice === 0 ? 1 : window.ClientOrder.sizeprice.toFixed(2)) + (window.ClientOrder.ingredients.length * INGREDIENT_PRICE) + sauceprice;

    this.setState({
      order: window.ClientOrder.base,
      total: totalprice.toFixed(2)
    })
  }

  navigateLeft(){
    this.setState(() => {
      if(this.state.currentview > 1){
        return {currentview: this.state.currentview - 1}
      }
    });
  }

  navigateRight(){
    switch(this.state.currentview){
      case 1:
        if(window.ClientOrder.base !== ''){
          this.setState(() => {
            return {currentview: this.state.currentview + 1}
          });
        }
        else{
          alert_message = 'Yo! Select a Base of Noodles or Rice!';
          this.setState(() => {
            return {alerting: true}
          });
        }
        break;
      case 2:
        if(window.ClientOrder.size !== ''){
          this.setState(() => {
            return {currentview: this.state.currentview + 1}
          });
        }
        else{
          alert_message = "Let's do this! Select a Size for your order.";
          this.setState(() => {
            return {alerting: true}
          });
        }
        break;
      case 3:
        if(window.ClientOrder.ingredients.length > 0 ){
          this.setState(() => {
            return {currentview: this.state.currentview + 1}
          });
        }
        else{
          alert_message = "Ingredients are key, don't leave without selecting some!";
          this.setState(() => {
            return {alerting: true}
          });
        }
        break;
      case 4:
        if(window.ClientOrder.sauce !== ''){
          this.setState(() => {
            return {currentview: this.state.currentview + 1}
          });
        }
        else{
          alert_message = 'Almost done! Please select some Sauce.';
          this.setState(() => {
            return {alerting: true}
          });
        }
        break;
      default:
        break;
      }
  }

  closeAlerts(){
    this.setState(() => {
      return {alerting:false}
    });
  }

  render() {
    return (
      <div className="app-viewport">
        {this.state.currentview === 1 &&
          <CardList type='base' data={food.base} onOrderUpdate={this.orderUpdate} />
        }
        {this.state.currentview === 2 &&
          <CardList type='size' data={food.size} onOrderUpdate={this.orderUpdate} />
        }
        {this.state.currentview === 3 &&
          <CardList type='ingredients' data={food.ingredients} onOrderUpdate={this.orderUpdate} />
        }
        {this.state.currentview === 4 &&
          <CardList type='sauce' data={food.sauce} onOrderUpdate={this.orderUpdate} />
        }
        {this.state.currentview === 5 &&
          <div>
            <h1>YOUR ORDER</h1>
            <ul>
              <li>{window.ClientOrder.size} {window.ClientOrder.base} ({(window.ClientOrder.baseprice * window.ClientOrder.sizeprice).toFixed(2)} €) </li>
              {window.ClientOrder.ingredients.map(ingredient => {
                return (
                  <li key={ingredient}>{ingredient} ({INGREDIENT_PRICE.toFixed(2)} €)</li>
                );
              })}
              <li>{window.ClientOrder.sauce} sauce ({window.ClientOrder.sauceprice.toFixed(2)} €)</li>
            </ul>
          </div>
        }
        <PriceTotal order={this.state.order} total={this.state.total} />

        <div className='nav-wrapper'>
          <a onClick={this.navigateLeft} className='nav-arrow left-arrow'>◀</a>
          <a onClick={this.navigateRight} className='nav-arrow right-arrow'>▶</a>
        </div>

        <Modal text={alert_message} opened={this.state.alerting} onCloseModal={this.closeAlerts}/>
      </div>
    );
  }
}

export default App;
