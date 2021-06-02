import { useState } from 'react';
import '../Login/styles.css';
import api from 'services/api';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { login, logout } from 'services/auth';
import { toast } from 'react-toastify';
import { ReactComponent as Logo2 } from '../../assets/images/logo2.svg';

type loginData = {
	email: string;
	password: string;
};

const Login = () => {
	const history = useHistory();

	const [ loginData, setLoginData ] = useState<loginData>({
		email: '',
		password: ''
	});

	const submit = async (e: { preventDefault: () => void }) => {
		e.preventDefault();

		const response = await api.post('/authenticate', { ...loginData });

		if (!response.data.token) {

			toast.error('Usuário não autenticado!', {
				onOpen:  (props) => logout(),
				onClose: (props) => window.location.reload(),
				position: 'top-right',
				autoClose: 2000,
				hideProgressBar: true,
				closeOnClick: false,
				pauseOnHover: false,
				draggable: false,
				progress: undefined
			});
			
		} else {
			login(response.data.token);
			history.push('/home');
		}
	};

	return (
		<form onSubmit={submit} className="form-signin border rounded-3 ">
			<div className="text-center">
				<Logo2 />
				<h1 className="h1 font-weight-normal">
					{
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="35"
							height="35"
							fill="currentColor"
							className="bi bi-lock-fill"
							viewBox="0 0 18 18"
						>
							<path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
						</svg>
					}
					Faça o login
				</h1>
			</div>
			<div className="form-label-group">
				<input
					value={loginData.email}
					name="email"
					onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
					type="email"
					id="inputEmail"
					className="form-control"
					placeholder="Email..."
					required
					autoFocus
				/>
				<label htmlFor="inputEmail">E-mail do usuário</label>
			</div>
			<div className="form-label-group">
				<input
					value={loginData.password}
					name="password"
					onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
					type="password"
					id="inputPassword"
					className="form-control"
					placeholder="Senha..."
					required
				/>
				<label htmlFor="inputPassword">Senha</label>
			</div>
			<div className="text-center ">
				<button className="btn btn-lg btn-primary btn-block border-bottom" type="submit">
					{
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							className="bi bi-lock"
							viewBox="0 0 17 17"
						>
							<path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
						</svg>
					}
					Acessar
				</button>
			</div>
			<div className="pb-4 mb-2 border-bottom" />

			<div className="text-center mb-2 ">
				<Link to="/signup">Criar novo usuário</Link>
			</div>
		</form>
	);
};

export default Login;
