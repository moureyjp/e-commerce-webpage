import { useState } from "react";
import { productData } from "../data";

import ProductInformation from "./ProductInformation";
import Summary from "./Summary";

const Product = () => {
  const [products, setProducts] = useState(productData);
  const [quantity, setQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  return (
    <>
      <h1>E-COMMERCE PRODUCT PAGE</h1>
      
    </>
  );
};

export default Product;
