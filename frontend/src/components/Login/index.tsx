import { useState } from 'react';
import '../Login/styles.css';
import api from 'services/api';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { login } from 'services/auth';

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
		console.log(loginData.email, loginData.password);
		
 try {
      const response =	await api.post("/authenticate", { ...loginData });
			login(response.data.token);
			history.push('/home');
	} catch (err) {
			alert('Erro ao fazer o login');
			history.push('/');
	}		
  }

	return (
		<form onSubmit={submit} className="form-signin">
		   <div className="text-center mb-4">
				<h1 className="h1 mb-3 font-weight-normal">Login</h1>
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
			<div className="text-center">
				<button className="btn btn-lg btn-primary btn-block " type="submit">
					Acessar
				</button>
			</div>
			<div className="text-center mb-4">
				<Link to="/signup">Criar novo usuário</Link>
			</div>			
		</form>
  );
};

export default Login;
