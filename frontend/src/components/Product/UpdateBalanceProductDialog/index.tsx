import { useForm } from 'react-hook-form';
import { useDialog } from 'react-st-modal';
import { updateBalanceProduct } from '../../../services/api.js';
import '../UpdateBalanceProductDialog/styles.css';
import { Product } from '../../../types/product.js';

type Props = {
	product: Product;
};

type Inputs = {
	id: number;
	transactionType: string;
	amount: number;
};

export function UpdateBalanceProductDialogModal({ product }: Props) {
	const refreshPage = () => {
		window.location.reload();
	};

	const dialog = useDialog();

	const { register, handleSubmit } = useForm<Inputs>();
	
	

	const onSubmit = (data: Inputs) => {
		alert(JSON.stringify(data));
		
		if (data.transactionType === "1") {
			data.amount = Number(product.amount) + Number(data.amount);
		} else {
			data.amount = Number(product.amount) - Number(data.amount);
		}
		
		alert(data.amount);
		
		updateBalanceProduct( data.id , data.amount)
			.then((response) => {
				alert(data.amount);
				refreshPage();
			})
			.catch(() => {
				alert('Erro ' + data);
			})
			.finally(() => {
				dialog.close();
			});
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="form-signin ">
			<div className="form-group mb-3">
				<label className="form-label">
					<h5>
						{product.name} - Saldo: {product.amount} unidades
					</h5>
				</label>
			</div>

			<div className="form-group md-4">
				
				<select
					
					id="transactionType"
					className="form-control"
					{...register('transactionType')}
					placeholder="Selecione...">
					<option value="1">Adicionar ao saldo</option>
					<option value="2">Subtrair do saldo</option>
				</select>
			</div>

			<div className="form-group  mb-4">
				<label htmlFor="amount" className="form-label">
					Valor da transação
				</label>
				<input className="form-control" type="number" {...register('amount')} placeholder="Valor..." required />
			</div>

			<div className="text-center">
				<button type="submit" className="btn btn-primary">
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
					Salvar
				</button>
			</div>
		</form>
	);
}
