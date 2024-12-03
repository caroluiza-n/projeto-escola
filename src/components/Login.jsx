import '../styles/Login.css';
export function Login(){
    return(
        <div className='box'>
            <form action="post">
                <h1>Login</h1><br/>
                <label htmlFor="user">Digite seu usuário:</label><br/>
                <input type="text" placeholder="Usuário"/><br/>
                <label htmlFor="password">Digite sua senha:</label><br/>
                <input type="password" placeholder="Senha"/><br/>
                <input type="submit" value="Entrar"/>
            </form>
        </div>
    )
}
