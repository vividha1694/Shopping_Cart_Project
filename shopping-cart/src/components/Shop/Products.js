import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  const product = useSelector((state) => state.product.products);
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
      {product.map((product)=>{
        return(
          <ProductItem
          product={{
            title:product.title,
            price:product.price,
            description:product.description          
          }}
          />
        )
      })}
      </ul>
    </section>
  );
};

export default Products;
