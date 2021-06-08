import HeaderSearch from "components/HeaderSearch";
import ProductList from "components/Product/ProductList";
import { useEffect, useState } from "react";
import { fetchProducts } from "services/api";
import { Product } from "types/product";
import "./styles.css";

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);

  //var search = "";
  
useEffect(() => {

    fetchProducts()
      .then((response: { data: React.SetStateAction<Product[]> }) =>
        setProducts(response.data)
      )
      .catch(() => {
        console.log("Erro ao listar produtos");
      });
  }, []);
  

  /*useEffect( () => {

    if (search==="" || search==="undefined"){
    fetchProducts()
    .then((response: { data: React.SetStateAction<Product[]>; }) => setProducts(response.data))
    .catch(() => {
        console.log('Erro ao listar produtos');
      })
    } else {
      seachProducts(search)
			.then((response: { data: React.SetStateAction<Product[]>; }
				) => setProducts(response.data))
			.catch ( () => {
				console.log('Erro na pesquisa!')
			})

    }

    
}, [search]);*/

  return (
    <>
      <HeaderSearch/>
      <div className="product-container">
        <div className="product-content">
          <ProductList products={products} />
        </div>
      </div>
    </>
  );
};

export default Products;
