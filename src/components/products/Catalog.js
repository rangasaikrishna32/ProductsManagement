import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Table, Spinner, Toast, Alert } from 'react-bootstrap';



// class Catalog extends Component {
//   constructor(props) {
//     super(props);

//   }


//   render() {

//     return(
//       <div>
// <div><span style={{color:'red'}}><b>Catalog</b></span></div>

// <Form>
//   <Form.Group controlId="formGroupEmail">
//     <Form.Label>Product Name</Form.Label>
//     <Form.Control type="ProductName" placeholder="Product Name" />
//   </Form.Group>
//   <Form.Group controlId="formGroupPassword">
//     <Form.Label>Price</Form.Label>
//     <Form.Control type="Price" placeholder="Price" />
//   </Form.Group>
//   <Button>Add</Button>
// </Form>

//                 </div>
//     )
//   }
// }
function Catalog(props)
{
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("");

    return (
        <div>
            <table>
                <tr>
                    <td>Product Name</td>
                    <td><input
                        type="text"
                        value={productName}
                        onChange={e =>
                        {
                            setProductName(e.target.value);
                        }}
                    /></td>
                    <td>
                        Price
      </td>
                    <td> <input
                        type="text"
                        value={productPrice}
                        onChange={e =>
                        {
                            setProductPrice(e.target.value);
                        }}
                    /></td>
                    <td>
                        <button
                            onClick={() =>
                            {
                                setProductName("");
                                setProductPrice("");
                                props.updateCatelog(productName, productPrice);
                            }}
                        >
                            Add
      </button>
                    </td>
                </tr>
            </table>




        </div>
    );
}

export default Catalog;
