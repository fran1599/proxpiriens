
import { useShopping } from "@/context/CartContext";
import Product from "@/molecules/Product";


const ProductsPage = () => {
 
  const { state, addToCart, addToFavorites} = useShopping();
  const { products } = state;


  return (
    <>
      <h3>Productos</h3>
      <div className="grid-responsive">
        {products.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} addToFavorites={addToFavorites} />
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