import ProductCard from '../ProductCard';
import { Product } from '../../../types/product';
import '../styles.css';
import FooterProduct from 'components/FooterProduct';

type Props = {
	products: Product[];
};

const ProductList = ({ products }: Props) => {
    return (
        <>
        <div className="orders-list-container">
            <div className="container-fluid orders-list-items ">
               {products.map(product => (
                   <ProductCard  
                   key={product.id} 
                   product={product}
                   />
               ))}
            </div>
        </div>
        <FooterProduct/>
        </>
    )
}

export default ProductList;
