import { useForm } from 'react-hook-form';
import { useDialog } from 'react-st-modal';
import { toast } from 'react-toastify';
import { Product } from 'types/product';
import { deleteProduct } from '../../../services/api';

type Props = {
	product: Product;
};

type Inputs = {
	id: number;
};


export function DeleteProductDialogModal({ product }: Props) {
	
	const refreshPage = () => {
		window.location.reload();
	};
	
	const dialog = useDialog();
	
	const { handleSubmit } = useForm<Inputs>({
		defaultValues: {
			id: Number(product.id)
		}
	});
	
	
	


	const onSubmit = (data: Inputs) => {
			
		JSON.stringify(data);
		
		deleteProduct(data)
			.then(() => {
			
				toast.success('Produto excluído com sucesso!', {
					position: 'top-right',
					onClose: (props) => refreshPage(),
					autoClose: 1500,
					hideProgressBar: true,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined
				});
				
			})
			.catch(() => {
				
				toast.error('Produto não excluído!', {
					position: 'top-right',
					autoClose: 1500,
					hideProgressBar: true,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined
				});
				
			})
			.finally(() => {
				dialog.close();
			});
		
	};
	
	

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="form-signin  ">
			<div className="mb-3">
				<label htmlFor="name" className="form-label">
					Deseja excluir o produto {product.name} ?
				</label>
			</div>

			<div className="d-flex p-2 md-2 justify-content-end ">
				<button type="submit" className="btn btn-success px-2 mx-2">
					{
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							className="bi bi-check-circle"
							viewBox="0 0 20 20"
						>
							<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
							<path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
						</svg>
					}
					Sim
				</button>

				<button className="btn btn-danger" onClick={dialog.close}>
					{
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							className="bi bi-x-circle"
							viewBox="0 0 20 20"
						>
							<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
							<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
						</svg>
					}
					Não
				</button>
			</div>
		</form>
	);
}
