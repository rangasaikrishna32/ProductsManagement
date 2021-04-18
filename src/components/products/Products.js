// import React from "react";
// import Button from "./../shared/button";

// class Products extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   render() {
//     return (
//       <React.Fragment>
//         <h2>Products</h2>
//         <table border="1">
//           <tbody>
//             <tr>
//               <th>Name</th>
//               <th>Price</th>
//               <th>Quantity</th>
//               <th />
//             </tr>

//             {this.props.availableProducts.map((product, index) => {
//               return (
//                 <tr key={product.name}>
//                   <td>{product.name}</td>
//                   <td>{product.price}</td>
//                   <td>
//                     <input
//                       type="text"
//                       value={product.quantity || ""}
//                       onChange={event =>
//                         this.props.handleProductQuantityChange(event, index)
//                       }
//                     />
//                   </td>
//                   <td>
//                     <Button onClick={() => this.props.addToCart(index)}>
//                       Add to Cart
//                     </Button>
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </React.Fragment>
//     );
//   }
// }
// export default Products;

import React, { Component } from 'react';
import { Container, Row, Col, Form, Button, Table, Spinner, Toast, Alert } from 'react-bootstrap';



class Products extends Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      name: false,
      price: false,
      quantity: "0"
    };
  }

  onfieldChange(e)
  {
    this.setState({ ...this.state, quantity: e.target.value })

  }

  addToCatalog(item)
  {
    this.setState({ ...this.state, name: item.name });
    this.setState({ ...this.price, name: item.price });

    let cartItem = this.state;
    this.props.triggerCart(cartItem);

  }
  render()
  {

    return (
      <div>
        <div><span style={{ color: 'red' }}><b>Products</b></span></div>

        <Table striped bordered hover >
          <thead>
            <tr>
              <td><h6>Product</h6></td><td><h6>Price</h6></td><td><h6>Quantity</h6></td><td><h6></h6></td>
            </tr>
          </thead>
          <tbody>

            {

              this.props.catalog && this.props.catalog.map((k, i) =>
              {
                let item = k;
                return (
                  <React.Fragment>

                    <tr Key={Math.floor(i + Math.random())}>
                      <td  >{k.name}</td>
                      <td>
                        {k.price}
                      </td>
                      <td><input type="number" name="points" min="1" step="1" onChange={(e) => { item.qty = e.target.value, item.sumofValue = item.price * item.qty }} /></td>
                      <td><Button onClick={(e) => this.props.handleAddCartProduct(item)}>Add</Button></td>

                    </tr>

                  </React.Fragment>
                )
              })
            }

          </tbody>
        </Table>

      </div>
    )
  }
}

export default Products;

