import React from 'react';
import './styles.scss';


export const FormRegister = (props) => {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [dnNascimento, setDnNascimento] = React.useState('');
    const [nome, setNome] = React.useState('');
    const [sobrenome, setSobrenome] = React.useState('');
    const [sexo, setSexo] = React.useState('');
    const [pais, setPais] = React.useState('');
    const [termos, setTermos] = React.useState();



    return (
        <div class="form-style-8">
            <h2>bem-vindo(a) ao orkut.br!</h2>
            <form>
                <input  type="email" name="email" placeholder="Email" />
                <input type="password" name="password" placeholder="Senha" />
                <input type="date" name="dtNascimento" placeholder="Data de Nascimento" />
                <input type="text" name="nome" placeholder="Nome" />
                <input type="text" name="sobrenome" placeholder="Sobrenome" />

                <label for="sexo">Sexo:</label>

                <select onChange={(e) => {setSexo(e.target.value)}} value={sexo}  name="sexo" id="sexo">
                    <option value="M">Masculino</option>
                    <option value="F">Feminino</option>
                </select>

                <label for="pais">País: </label>

                <select onChange={(e) => { setPais(e.target.value) }} value={pais}  name="pais" id="pais">
                    <option value="1">Brasil</option>
                    <option value="2">Canadá</option>
                </select>
                
                <label>
                    <input type="checkbox" name="termos" id="termos" value="1"/>
                    Sei que devo ter 18 anos ou mais para usar o orkut.br.Tenho 18 anos ou mais e aceito cumprir o <a href="https://www.orkut.br.com/privacidade">Estatuto da Comunidade</a> ao usar o orkut.Também concordo em cumprir com estes <a href="https://www.orkut.br.com/termos">termos adicionais</a>.
                </label>

                <br/>
                <br/>

                <input type="button" value="Criar Conta" />

            </form>

            <h1> Sexo setado = {sexo} </h1>
        </div>
    )
}