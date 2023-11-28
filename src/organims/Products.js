import { useContext } from "react";
import Product from "@/molecules/shoppingCart/Product";
import { ProductsContext } from "@/context/ProductsContext";
import { CartContext } from "@/context/CartContext";

const ProductsPage = () => {
  const { products } = useContext(ProductsContext);
  const { addToCart } = useContext(CartContext);

  return (
    <>
      <h3>Productos</h3>
      <div className="grid-responsive">
        {products.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>

      <style jsx global> {`
         

          .grid-responsive {
            display: flex;
            flex-wrap: wrap;
          }

        
        `} </style>
    </>
  );
};

export default ProductsPage;