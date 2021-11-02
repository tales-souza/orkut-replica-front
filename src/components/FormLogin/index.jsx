import React from 'react';
import logoOrkut from '../../assets/orkut_logo.png';
import './styles.scss'

export const FormLogin = (props) => {


    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');



    return (

        <div class="formLogin">

            <form>

                <div class="form__group field">
                    <input onChange={(e) => {setEmail(e.target.value)} }  value={email} type="input" class="form__field" placeholder="Email" name="email" id='email' required />
                    <label for="email" class="form__label">Email</label>
                </div>

                <div class="form__group field">
                    <input  onChange={(e) => {setPassword(e.target.value)} }   value={password} type="password" class="form__field" placeholder="Senha" name="password" id='password' required />
                    <label for="password" class="form__label">Senha</label>
                </div>

                <div class="form__group field">
                    <button value="1" class="submitLogin" name="login" data-testid="royal_login_button" type="submit" id="u_0_m_Az">Entrar</button>
                </div>
            </form>
        </div>


    )
}