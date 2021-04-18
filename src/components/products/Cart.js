// import React from "react";
// import Button from "./../shared/button";
// import PropTypes from "prop-types";

// const Cart = props => {
//   return (
//     <React.Fragment>
//       <h2>Cart</h2>
//       {props.cartProducts && props.cartProducts.length > 0 ? (
//         <table border="1">
//           <tbody>
//             <tr>
//               <th>Name</th>
//               <th>Price</th>
//               <th>Quantity</th>
//               <th />
//             </tr>
//             {props.cartProducts.map((product, index) => {
//               return (
//                 <tr key={product.name}>
//                   <td>{product.name}</td>
//                   <td>{product.price}</td>
//                   <td>{product.quantity}</td>
//                   <td>
//                     <Button onClick={() => props.removeFromCart(index)}>
//                       Remove
//                     </Button>
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       ) : (
//         <React.Fragment>
//           <h2>Cart is empty..</h2>
//         </React.Fragment>
//       )}
//     </React.Fragment>
//   );
// };
// Cart.propTypes = {
//   cartProducts: PropTypes.array,
//   removeFromCart: PropTypes.func
// };

// export default Cart;

import React, { Component } from 'react';
import { Container, Row, Col, Form, Button, Table, Spinner, Toast, Alert } from 'react-bootstrap';



class Cart extends Component
{
  constructor(props)
  {
    super(props);

  }


  render()
  {

    return (
      <div>
        <div><span style={{ color: 'red' }}><b>cart</b></span></div>

        <Table striped bordered hover >
          <thead>
            <tr>
              <td><h6>Product</h6></td><td><h6>Quantity</h6></td><td><h6>Price</h6></td><td><h6></h6></td>
            </tr>
          </thead>
          <tbody>

            {

              this.props && this.props.cart && this.props.cart.map((k, i) =>
              {

                return (
                  <React.Fragment>


                    <tr key={Math.floor(i + Math.random())}>
                      <td  >{k.name}</td>
                      <td  >{k.qty}</td>
                      <td>
                        {k.price}
                      </td>
                      <td>{k.sumofValue}</td>
                      <td><Button onClick={(e) => this.props.handleRemoveCartProduct(k, i)}>Remove</Button></td>

                    </tr>

                  </React.Fragment>

                )
              })
            }
            <tr><td>Total</td><td></td><td></td><td>{this.props.totalPrice}</td></tr>
          </tbody>
        </Table>

      </div>
    )
  }
}

export default Cart;
