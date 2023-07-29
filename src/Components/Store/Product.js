import { useParams } from "react-router-dom";
import classes from "./Product.module.css";

const Product = (props) => {
  const param = useParams();
  const proTitle = param.productId;
  const prod = props.productsArr.filter((ele) => ele.title === proTitle);

  if (prod.length === 0) {
    return <div>Product Not Found!</div>;
  }

  const product = prod[0];
  return (
    <div className={classes.sec}>
      <h1>Product Details </h1>
      <section className={classes.sectop}>
        <h3>{param.productId}</h3>
        <div className={classes.image}>
          {product.imageUrl.map((img, index) => (
            <li key={index}>
              <img alt="prodImg" src={img} />
            </li>
          ))}
        </div>
        <div className={classes.lowersec}>
          <div className={classes.details}>
            <span>Price: ${product.price}</span>
            <span>Details: {product.des}</span>
          </div>
          <div className={classes.review}>
            <span>Reviews:</span>
            <li>Review 1</li>
            <li>Review 2</li>
            <li>Review 3</li>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
