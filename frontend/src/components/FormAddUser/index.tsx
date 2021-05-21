import { useState } from 'react';
import '../Login/styles.css';
import { useHistory } from 'react-router-dom';
import api from '../../services/api.js';

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
		console.log(userData.username, userData.email, userData.password);

		try {
			await api.post("/users",  { ...userData });
			alert('Usuário Cadastrado com sucesso');
			history.push('/');
		} catch (err) {
			alert(err + ' - Erro ao cadastrar o usuário');
			history.goBack();
		}
	};

	return (
		<form onSubmit={submit} className="form-signin">
			<div className="mb-3">
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
			<div className="text-center mb-4">
				<button type="submit" className=" btn btn-primary">
					Novo Usuário
				</button>
			</div>
		</form>
	);
};

export default FormAddUser;
