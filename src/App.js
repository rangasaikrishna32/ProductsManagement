// import React from "react";
// import axios from "axios";
// import Products from "../src/components/products/Products";
// import Cart from "../src/components/products/Cart";
// import AddProduct from "../src/components/products/AddProduct";
// import ErrorBoundary from "./ErrorBoundary";
// import styled from "styled-components";

// const CartDiv = styled.div`
//   float: right;
//   background: #ffeeee;
// `;

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       availableProducts: [],
//       catalogProduct: {
//         name: "",
//         price: ""
//       },

//       cartProducts: []
//     };
//   }
//   componentDidMount() {
//     this.getAvailableProducts();
//   }
//   componentDidUpdate(prevProps, prevState) {
//     console.log("PreviousProps" + JSON.stringify(prevProps));
//     console.log("PreviousState" + JSON.stringify(prevState));
//     console.log("componentDidUpdate");
//   }
//   getAvailableProducts = () => {
//     axios
//       .get(
//         "https://optix-checkout-trans-dev.ebiz.verizon.com/funatlearning/getproductcatalog"
//       )
//       .then(response => {
//         this.setState({ availableProducts: response.data.catalog });
//       })
//       .catch(error => {
//         console.log("Error");
//       });
//   };

//   handleCatalogProductNameChange = event => {
//     let currentState = { ...this.state };
//     currentState.catalogProduct.name =
//       event && event.target && event.target.value ? event.target.value : "";
//     this.setState({ catalogProduct: currentState.catalogProduct });
//   };

//   handleCatalogProductPriceChange = event => {
//     let currentState = { ...this.state };
//     currentState.catalogProduct.price =
//       event && event.target && event.target.value ? event.target.value : 0;
//     this.setState({ catalogProduct: currentState.catalogProduct });
//   };
//   addCatalogProduct = () => {
//     let currentState = { ...this.state };
//     currentState.availableProducts.push(currentState.catalogProduct);
//     this.setState({ availableProducts: currentState.availableProducts });

//     this.setState({ catalogProduct: {} });
//   };

//   handleProductQuantityChange = (event, index) => {
//     let currentState = { ...this.state };
//     currentState.availableProducts[index].quantity =
//       event && event.target && event.target.value ? event.target.value : 0;

//     this.setState({ availableProducts: currentState.availableProducts });
//   };

//   addToCart = index => {
//     let currentState = { ...this.state };
//     if (
//       currentState.availableProducts[index] &&
//       currentState.availableProducts[index].quantity
//     ) {
//       currentState.cartProducts.push(currentState.availableProducts[index]);
//       this.setState({ cartProducts: currentState.cartProducts });
//     }
//   };

//   removeFromCart = index => {
//     let currentState = { ...this.state };

//     currentState.cartProducts.splice(index, 1);

//     this.setState({ cartProducts: currentState.cartProducts });
//   };

//   render() {
//     return (
//       <React.Fragment>
//         <ErrorBoundary>
//           <AddProduct
//             catalogProduct={this.state.catalogProduct}
//             addCatalogProduct={this.addCatalogProduct}
//             handleCatalogProductNameChange={this.handleCatalogProductNameChange}
//             handleCatalogProductPriceChange={
//               this.handleCatalogProductPriceChange
//             }
//           />
//           <table width="100%">
//             <tbody>
//               <tr>
//                 <td>
//                   <Products
//                     availableProducts={this.state.availableProducts}
//                     handleProductQuantityChange={
//                       this.handleProductQuantityChange
//                     }
//                     addToCart={this.addToCart}
//                   />
//                 </td>
//                 <td>
//                   <CartDiv>
//                     <Cart
//                       cartProducts={this.state.cartProducts}
//                       removeFromCart={this.removeFromCart}
//                     />
//                   </CartDiv>
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </ErrorBoundary>
//       </React.Fragment>
//     );
//   }
// }
// export default App;


import React, { Component } from 'react';

import { Container, Row, Col, Form, Button, Table, Spinner, Toast, Alert, Nav, Card } from 'react-bootstrap';
//import HttpService from "./services/HttpService";
import Products from "./components/products/Products";
import Catalog from "./components/products/Catalog";
import Cart from "./components/products/Cart";


class App extends Component
{
  constructor(props)
  {
    super(props);
    //this.service = new HttpService();
    this.state = {
      data: [],
      cart: [],
      totalPrice: 0
    };
    this.getProducts();
  }
  updateCatelog = (productName, price) =>
  {
    let products = this.state.data;
    products.push({
      name: productName,
      price: price,
      productId: Math.random(),
      qty: 1,
      sumofValue: price,
    });
    this.setState({
      products
    });
  };

  updateCartProduct = (product, price, qty, productId) =>
  {
    if (!product.qty || product.qty < 1)
    {
      alert('Plese enter the quantity!!!');
      return;
    }
    let cartCopy = this.state.cart;
    let foundExistingProduct = false;
    let totalPrice = this.state.totalPrice;
    cartCopy = cartCopy.map(item =>
    {
      if (item.name == product.name)
      {
        foundExistingProduct = true;
        item.qty = Number(item.qty) + Number(product.qty);
        item.sumofValue = Number(item.qty) * item.price;
      }


      return item;
    });
    if (!foundExistingProduct)
    {
      cartCopy.push({
        ...product,
        productId
      });
    }
    totalPrice += Number(product.qty) * product.price;
    this.setState({
      cart: cartCopy
    });
    this.setState({
      totalPrice: totalPrice
    });
  };

  getProducts()
  {
    var url = "https://optix-checkout-trans-dev.ebiz.verizon.com/funatlearning/getproductcatalog";
    // this.service.invokeApi(url, 'GET', null, (response) =>
    // {
    //   response.data && response.data.catalog ? this.setState({ ...this.state, data: response.data.catalog }) : this.setState({ ...this.state, data: {} });
    //   let cartCopy = response.data.catalog.map((item, index) =>
    //   {
    //     item.productId = index;
    //     return item;
    //   });
    //   this.setState({ ...this.state, cartCopy });
    // }, (ex) =>
    // {
    //   console.log(ex);
    // });
  }

  removeCartItem = (product, index) =>
  {
    let cart = this.state.cart;
    if (index > -1)
      cart.splice(index, 1);
    let totalPrice = this.state.totalPrice - (product.price * product.qty);
    console.log("Cart Removed", cart);
    this.setState({
      cart: cart
    });
    this.setState({
      totalPrice: totalPrice
    });
  };
  addTocart = (cartItems) =>
  {
    this.setState({ ...this.state, cartItem: cartItems });
    var item = this.state;
  }





  render()
  {
    // this.state
    return (
      <Container fluid="true">
        <Row>
          <Col sm={8}>
            <Catalog updateCatelog={this.updateCatelog}></Catalog>
            <br></br><hr></hr><br></br>
            <Products catalog={this.state.data} handleAddCartProduct={this.updateCartProduct}></Products>
          </Col>
          <Col sm={4}><Cart cart={this.state.cart} totalPrice={this.state.totalPrice} handleRemoveCartProduct={this.removeCartItem}></Cart></Col>
        </Row>





      </Container>
    )
  }
}


export default App;
