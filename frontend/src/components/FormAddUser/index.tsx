import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api.js';
import { toast } from 'react-toastify'; 

type userData = {
	username: string;
	email: string;
	password: string;
};

const FormAddUser = () => {
	const history = useHistory();

	const [ userData, setUserData ] = useState<userData>({
		username: '',
		email: '',
		password: ''
	});

	const submit = async (e: { preventDefault: () => void }) => {
		e.preventDefault();

		try {
			await api.post('/users/add', { ...userData });
			toast.success('Usuário cadastrado com sucesso!', {
				position: 'top-right',
				autoClose: 1500,
				hideProgressBar: true,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined
			});
			history.push('/');
		} catch (err) {
			toast.error('Usuário não cadastrado!', {
				position: 'top-right',
				autoClose: 1500,
				hideProgressBar: true,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined
			});
			history.goBack();
		}
	};

	return (
		<form onSubmit={submit} className="form-signin border rounded-3">
			<div className="mb-3">
				<div className="text-center mb-4">
					<h1 className="h2 mb-2 font-weight-normal">
						{
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="35"
								height="35"
								fill="currentColor"
								className="bi bi-person-fill"
								viewBox="0 0 16 16"
							>
								<path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
							</svg>
						}
						Cadastro de usuário
					</h1>
				</div>
				<label htmlFor="inputText" className="form-label">
					Nome do usuário
				</label>
				<input
					value={userData.username}
					name="nome"
					onChange={(e) => setUserData({ ...userData, username: e.target.value })}
					type="text"
					className="form-control"
					id="InputText"
					placeholder="Nome..."
					required
					autoFocus
				/>
			</div>

			<div className="mb-3">
				<label htmlFor="InputEmail" className="form-label">
					Email para contato
				</label>
				<input
					value={userData.email}
					name="email"
					onChange={(e) => setUserData({ ...userData, email: e.target.value })}
					type="email"
					className="form-control"
					id="InputEmail"
					placeholder="Email..."
					required
				/>
			</div>

			<div className="mb-3">
				<label htmlFor="InputPassword" className="form-label">
					Senha do usuário
				</label>
				<input
					value={userData.password}
					name="senha"
					onChange={(e) => setUserData({ ...userData, password: e.target.value })}
					type="password"
					className="form-control"
					id="InputPassword"
					placeholder="senha..."
					required
				/>
			</div>
			<div className="text-center md-auto ">
				<button type="submit" className=" btn btn-primary md-3">
					{
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							className="bi bi-person-plus"
							viewBox="0 1 17 17"
						>
							<path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
							<path
								fillRule="evenodd"
								d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
							/>
						</svg>
					}
					Novo Usuário
				</button>
			</div>
		</form>
	);
};

export default FormAddUser;
