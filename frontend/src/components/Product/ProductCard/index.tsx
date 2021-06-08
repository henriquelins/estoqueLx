import { CustomDialog } from 'react-st-modal';
import { UpdateBalanceProductDialogModal } from '../UpdateBalanceProductDialog';
import { Product } from 'types/product';
import { EditProductDialogModal } from '../EditProductDialogModal';
import { DeleteProductDialogModal } from '../DeleteProductDialogModal';


type Props = {
	product: Product;
};

const ProductCard = ({ product }: Props) => {
	return (
		<div className="order-card-container">
			<h3 className="order-card-title">{product.name}</h3>
			<img className="order-card-image" src={product.imageUri} alt={product.name} />

			<div className="container">
				<button
					className="btn btn-secondary m-1"
					data-mdb-toggle="tooltip"
					data-mdb-placement="bottom"
					title="Atualizar Saldo"
					onClick={async () => {
						await CustomDialog(<UpdateBalanceProductDialogModal key={product.id} product={product} />, {
							title: 'Atualizar saldo'
						});
					}}
				>
					{
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							className="bi bi-arrow-repeat"
							viewBox="0 0 20 20"
						>
							<path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
							<path
								fillRule="evenodd"
								d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"
							/>
						</svg>
					}
					Saldo
				</button>

				<button
					className="btn btn-success m-1"
					data-mdb-toggle="tooltip"
					data-mdb-placement="bottom"
					title="Editar"
					onClick={async () => {
						await CustomDialog(<EditProductDialogModal key={product.id} product={product} />, {
							title: 'Editar Produto'
						});
					}}
				>
					{
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							className="bi bi-pencil"
							viewBox="0 0 16 16"
						>
							<path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
						</svg>
					}
				</button>
				
				<button
					className="btn btn-danger m-1"
					data-mdb-toggle="tooltip"
					data-mdb-placement="bottom"
					title="Excluir"
					onClick={ async () => {
						await CustomDialog(<DeleteProductDialogModal key={product.id} product={product} />, {
						title: 'Excluir Produto'
						});
					}}
				>
					{
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							className="bi bi-trash"
							viewBox="0 0 16 16"
						>
							<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
							<path
								fillRule="evenodd"
								d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
							/>
						</svg>
					}
				</button>
			</div>

			<div className="order-card-description">
				<h3 >Quantidade</h3>
				<p>{product.amount}</p>
				<h3>Descrição</h3>
				<p>{product.description}</p>
			</div>
		</div>
	);
};

export default ProductCard;
