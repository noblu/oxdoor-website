import React, { useState } from "react";
import { products } from "../../types/products";

const Select = () => {
  const [product, setProduct] = useState("");
  const onAuthorChanged = (e: any) => setProduct(e.target.value);
  let productOptions;

  productOptions = products.map((item: any) => (
    <option key={item.id} value={item.name}>
      {item.name}
    </option>
  ));
  return (
    <div>
      <select
        name=""
        id="postAuthor"
        value={product}
        onChange={onAuthorChanged}
        placeholder="All products"
        className="select"
      >
        <option value="">All Products</option>
        {productOptions}
      </select>
    </div>
  );
};

export default Select;
