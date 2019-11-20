import React, { Component } from "react";
import axios from "axios";

class Inventory extends React.Component {
  state = {
    inventory: undefined
  };

  render() {
    const inventory = this.state.inventory;

    if (this.state.inventory) {
      const InventoryList = inventory.map(product => {
        return (
          <div className="inventory__div">
            <div className="inventory__item">
              <h2 className="inventory__label">ITEM</h2>
              <p>{product.item}</p>
              <p>{product.description}</p>
            </div>
            <div className="inventory__order">
              <h2 className="inventory__label">LAST ORDERED</h2>
              <p>{product.ordered}</p>
            </div>
            <div className="inventory__location">
              <h2 className="inventory__label">LOCATION</h2>
              <p>{product.location}</p>
            </div>
            <div className="inventory__quantity">
              <h2 className="inventory__label">QUANTITY</h2>
              <p>{product.quantity}</p>
            </div>
            <div className="inventory__status">
              <h2 className="inventory__label">STATUS</h2>
              <p>{product.status}</p>
            </div>
          </div>
        );
      });

      return (
        <div>
          <h1>INVENTORY</h1>
          <input className="inventory__input" placeholder="Search"></input>
          <div>{InventoryList}</div>
        </div>
      );
    } else return <div>Loading...</div>;
  }
  componentDidMount() {
    axios.get("http://localhost:5000/inventory" + "/").then(response => {
      this.setState({
        inventory: response.data
      });
    });
  }
}

export default Inventory;
