import HeaderSearch from "components/HeaderSearch";
import ProductList from "components/Product/ProductList";
import { useEffect, useState } from "react";
import { fetchProducts, seachProducts } from "services/api";
import { Product } from "types/product";
import "./styles.css";

type SearchData = {
  prod: string;
};

const Products = () => {
  
  const [searchData, setSearchData] = useState<SearchData>();

  const handleSearch = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    
    seachProducts(searchData?.prod)
    .then((response: { data: React.SetStateAction<Product[]>; }
    ) => setProducts(response.data))
    .catch(() => {
        alert('Erro na pesquisa');
    })
        
  };
    
  useEffect( () => {

    fetchProducts()
    .then((response: { data: React.SetStateAction<Product[]>; }
    ) => setProducts(response.data))
    .catch(() => {
      alert('Erro ao listar produtos');
    })
   
},[]);

  
 /* useEffect( () => {

    if (search === "" || search === "undefined" ){
    fetchProducts()
    .then((response: { data: React.SetStateAction<Product[]>; }
    ) => setProducts(response.data))
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
}, []);*/
    
const [products, setProducts] = useState<Product[]>([]);
   
  return (
    <>
   <div className="form-signin pt-5 mt-5">
           <form className="d-flex">
            <input
              className="form-control me-2"
              type="pesquisar"
              placeholder="Pesquisar..."
              aria-label="Pesquisar"
              onChange={(e) =>
                setSearchData({ ...searchData, prod: e.target.value })
              }
            />
            <button
              data-mdb-toggle="tooltip"
              data-mdb-placement="bottom"
              title="Pesquisar"
              className="btn btn-primary "
              type="submit"
              onClick={handleSearch}
            >
              {
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 15 15"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              }
            </button>
          </form>
          </div>
        
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
