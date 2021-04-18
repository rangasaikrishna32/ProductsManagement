import React from "react";
import Button from "./../shared/button";
import PropTypes from "prop-types";

const AddProduct = props => {
  return (
    <React.Fragment>
      <h2>Product Catalog</h2>
      <span>Product Name: </span>
      <input
        type="text"
        value={props.catalogProduct.name}
        onChange={props.handleCatalogProductNameChange}
      />
      <span>Product Price: </span>
      <input
        type="text"
        value={props.catalogProduct.price}
        onChange={props.handleCatalogProductPriceChange}
      />
      <Button onClick={props.addCatalogProduct}>Add</Button>
    </React.Fragment>
  );
};

AddProduct.propTypes = {
  catalogProduct: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number
  }),
  handleCatalogProductNameChange: PropTypes.func,
  handleCatalogProductPriceChange: PropTypes.func
};

export default AddProduct;
