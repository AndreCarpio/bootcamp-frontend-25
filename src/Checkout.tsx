import { useEffect, useState } from "react";
import styles from "./Checkout.module.css";
import { LoadingIcon } from "./Icons";
import { getProducts, Product as ProductType } from "./dataService";
// import { getProducts } from './dataService';

// You are provided with an incomplete <Checkout /> component.
// You are not allowed to add any additional HTML elements.
// You are not allowed to use refs.

// Demo video - You can view how the completed functionality should look at: https://drive.google.com/file/d/1bcXpGUzJUyUwITOqEn8QPj8ZOgUbTGQD/view?usp=sharing

// Once the <Checkout /> component is mounted, load the products using the getProducts function.
// Once all the data is successfully loaded, hide the loading icon.
// Render each product object as a <Product/> component, passing in the necessary props.
// Implement the following functionality:
//  - The add and remove buttons should adjust the ordered quantity of each product
//  - The add and remove buttons should be enabled/disabled to ensure that the ordered quantity can’t be negative and can’t exceed the available count for that product.
//  - The total shown for each product should be calculated based on the ordered quantity and the price
//  - The total in the order summary should be calculated
//  - For orders over $1000, apply a 10% discount to the order. Display the discount text only if a discount has been applied.
//  - The total should reflect any discount that has been applied
//  - All dollar amounts should be displayed to 2 decimal places

const Product = ({
  id,
  name,
  availableCount,
  price,
  orderedQuantity,
  total,
  handleAddQuantityProduct,
  handleRemoveQuantityProduct,
}) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{availableCount}</td>
      <td>${price}</td>
      <td>{orderedQuantity}</td>
      <td>${total}</td>
      <td>
        <button
          onClick={handleAddQuantityProduct}
          className={styles.actionButton}
          disabled={orderedQuantity >= availableCount}
        >
          +
        </button>
        <button
          onClick={handleRemoveQuantityProduct}
          className={styles.actionButton}
          disabled={orderedQuantity <= 0}
        >
          -
        </button>
      </td>
    </tr>
  );
};

const Checkout = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const res = await getProducts();
        const resAux = res.map((p) => {
          return { ...p, orderedQuantity: 0 };
        });
        setProducts(resAux);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  const handleAddQuantityProduct = (id: number) => {
    console.log("--------");
    setProducts((prev) => {
      const newProd = prev.map((p) => {
        const aux = p;
        if (aux.id == id) {
          if (aux.orderedQuantity >= p.availableCount) {
            return aux;
          }
          aux.orderedQuantity++;
        }
        return aux;
      });
      return newProd;
    });
  };

  const handleRemoveQuantityProduct = (id) => {
    console.log("--------");
    setProducts((prev) => {
      const newProd = prev.map((p) => {
        const aux = p;
        if (aux.id == id) {
          if (aux.orderedQuantity == 0) {
            return aux;
          }
          aux.orderedQuantity--;
        }
        return aux;
      });
      return newProd;
    });
  };
  return (
    <div>
      <header className={styles.header}>
        <h1>Electro World</h1>
      </header>
      <main>
        {loading && <LoadingIcon />}
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Product ID</th>
              <th>Product Name</th>
              <th># Available</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => {
              return (
                <Product
                  key={p.id}
                  id={p.id}
                  name={p.name}
                  availableCount={p.availableCount}
                  price={p.price}
                  total={p.orderedQuantity * p.price}
                  orderedQuantity={p.orderedQuantity}
                  handleAddQuantityProduct={() => {
                    handleAddQuantityProduct(p.id);
                  }}
                  handleRemoveQuantityProduct={() => {
                    handleRemoveQuantityProduct(p.id);
                  }}
                ></Product>
              );
            })}
          </tbody>
        </table>
        <h2>Order summary</h2>
        <p>Discount: $ 
          {products.reduce((accumulator, currentValue) => {
            const  sum = accumulator + (currentValue.price * currentValue.orderedQuantity);
            let discount = 0 ;
            if(sum > 1000 ){
              discount = sum * 0.1
            }
            return (
              accumulator + discount
            );
          }, 0)}
           </p>
        <p>
          Total: $
          {products.reduce((accumulator, currentValue) => {
            return (
              accumulator + currentValue.price * currentValue.orderedQuantity
            );
          }, 0)}
        </p>
      </main>
    </div>
  );
};

export default Checkout;
