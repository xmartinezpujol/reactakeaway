import React from 'react';
import '../css/Card.css';

class IngredientsCard extends React.Component {
  constructor(props) {
    super(props);

    this.toggleSelect = this.toggleSelect.bind(this);
  }

  toggleSelect() {
    this.props.onSetIngredients(this.props.name);
  }

  render() {

    return (
      <div
        className={`card multiselect ${this.props.selected ? "active" : ""}`}
        style={{
          backgroundImage: `linear-gradient(
                    rgba(20,20,20, .1),
                    rgba(20,20,20, .4)),
                    url(${this.props.image})`,
          backgroundSize: 'cover',
          backgroundPosition: '50% 50%'
        }}
      >
        <svg
          onClick={this.toggleSelect}
          className="card-title circular"
          height="100%"
          width="100%"
        >
          <rect
            className="card-shape"
            fill={this.props.selected ? this.props.color : null}
            x="0"
            y="0"
            height="100%"
            width="100%"
          />
          <text
            textAnchor="middle"
            alignmentBaseline="central"
            x="50%"
            y="50%"
            className="card-name"
          >
            {this.props.name}
          </text>
        </svg>
      </div>
    );
  }
}

export default IngredientsCard
