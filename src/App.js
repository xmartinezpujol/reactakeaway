import React, { Component } from 'react';
import './css/App.css';
import CardList from './components/CardList.js';
import PriceTotal from './components/PriceTotal.js';

window.ClientOrder = {
  base: 'noodles',
  price: 3.50
}


let food = {
  base: [
    {
      name: "ramen",
      color: "#D32F2F",
      img: "http://xmpdesign.com/img/codepen/ramen.jpg",
      price: "2.10",
      desc: "Bacon ipsum dolor amet andouille tri-tip beef ribs bresaola short loin, cow spare ribs filet mignon pork pork chop picanha."
    },
    {
      name: "udon",
      color: "#673AB7",
      img: "http://xmpdesign.com/img/codepen/udon.jpg",
      price: "3.50",
      desc: "Bacon ipsum dolor amet andouille tri-tip beef ribs bresaola short loin, cow spare ribs filet mignon pork pork chop picanha."
    },
    {
      name: "mifun",
      color: "#EF6C00",
      img: "http://xmpdesign.com/img/codepen/mifun.jpg",
      price: "1.80",
      desc: "Bacon ipsum dolor amet andouille tri-tip beef ribs bresaola short loin, cow spare ribs filet mignon pork pork chop picanha."
    },
    {
      name: "soba",
      color: "#827717",
      img: "http://xmpdesign.com/img/codepen/soba.jpg",
      price: "3.20",
      desc: "Bacon ipsum dolor amet andouille tri-tip beef ribs bresaola short loin, cow spare ribs filet mignon pork pork chop picanha."
    },
    {
      name: "lo mein",
      color: "#536DFE",
      img: "http://xmpdesign.com/img/codepen/lomein.jpg",
      price: "2.75",
      desc: "Bacon ipsum dolor amet andouille tri-tip beef ribs bresaola short loin, cow spare ribs filet mignon pork pork chop picanha."
    },
    {
      name: "jazmin rice",
      color: "#FBC02D",
      img: "http://xmpdesign.com/img/codepen/rice.jpg",
      price: "1.50",
      desc: "Bacon ipsum dolor amet andouille tri-tip beef ribs bresaola short loin, cow spare ribs filet mignon pork pork chop picanha."
    }
  ]
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order: "Let's order something!",
      total: 0
    };

    this.orderUpdate = this.orderUpdate.bind(this);
  }

  orderUpdate() {
    this.setState({
      order: window.ClientOrder.base,
      total: window.ClientOrder.price
    })
  }

  render() {
    return (
      <div className="app-viewport">
        <CardList shoplist={food.base} onOrderUpdate={this.orderUpdate} />
        <PriceTotal order={this.state.order} total={this.state.total} />
      </div>
    );
  }
}

export default App;
