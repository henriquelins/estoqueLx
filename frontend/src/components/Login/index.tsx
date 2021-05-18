import { useEffect, useState } from "react";
import "../Login/styles.css"
import { logar } from "services/api";
import { login } from "services/auth";
//import { useHistory} from "react-router-dom";

type loginData = {
  email: string;
  password: string;
};

const Login = () => {

  //const history = useHistory();

  const [loginData, setLoginData] = useState<loginData>({
    email: "",
    password: ""
    }
  );

  const submit = async (e: { preventDefault: () => void; }) => {
  e.preventDefault();
  console.log(loginData.email, loginData.password);
  }

    /*const getData = useCallback(() => {

      try {
        const response = await logar(loginData);
        login(response.data.token);
        console.log("ok")
        history.push('/')
      } catch (error) {
        console.log(`erro ${error}`)
        history.goBack()
      }

    }, [])

    useEffect( () => {
      getData()
    }, [getData])*/


    useEffect(() => {
      async function getData() {
          try {
          console.log(loginData.email, loginData.password);
          const response = await logar(loginData);
          login(response.data.token);
          console.log("ok")
          //history.push('/')
        } catch (error) {
          console.log(`erro ${error}`)
          //history.goBack()
        }
      }
      getData();
   },[loginData]);


    /* const submit = async ( e: { preventDefault: () => void; }) => {
       e.preventDefault();
       console.log(loginData.email, loginData.password);
   
       try {
         const response = await logar(loginData);
         login(response.data.token);
         //history.push('/')
       } catch (err) {
         //history.goBack()
       }
   
     }*/

    return (

      <form onSubmit={submit} className="form-signin">
        <div className="text-center mb-4">
          <h1 className="h1 mb-3 font-weight-normal">Login</h1>
        </div>
        <div className="form-label-group">
          <input
            value={loginData.email}
            name="email"
            onChange={e => setLoginData({ ...loginData, email: e.target.value })}
            type="email"
            id="inputEmail"
            className="form-control"
            placeholder="Email..."
            required autoFocus
          />
          <label htmlFor="inputEmail">E-mail do usuário</label>
        </div>
        <div className="form-label-group">
          <input
            value={loginData.password}
            name="password"
            onChange={e => setLoginData({ ...loginData, password: e.target.value })}
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Senha..."
            required />
          <label htmlFor="inputPassword">Senha</label>
        </div>
        <div className="text-center">
          <button
            className="btn btn-lg btn-primary btn-block "
            type="submit" >Acessar</button>
        </div>
      </form>

    )
  }

  export default Login;