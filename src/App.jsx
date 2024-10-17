import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Input } from './components/input'
import { Select } from './components/select'
import { Button } from './components/button'

function App() {
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [dataNasc, setDataNasc] = useState('');

  const enviar = e => {
    e.preventDefault(); // evita a tela carregar depois do click Salvar
    console.log('Form:', nomeCompleto, dataNasc)
  }

  return (
    <>
      <main className='form-pessoa'>
        <h2>Cadastro de Alunos</h2>
        <form className="row g-3" onSubmit={enviar}>
          <Input inputSize={9} label='Nome Completo' id='nomeCompleto' placeholder='Seu nome completo'
            handleChange={(e) => {
              console.log(e.target.value)
              setNomeCompleto(e.target.value)
            }} />
          <Input inputSize={3} label='Data Nasc.' type='date' id='dataNasc' placeholder='Data Nasc.'
            handleChange={(e) => {
              console.log(e.target.value)
              setDataNasc(e.target.value)
            }} />

          <Input inputSize={3} label='CEP' id='cep' placeholder='Seu CEP' />
          <Input inputSize={8} label='Endereço' id='endereco' placeholder='Seu endereço' />
          <Input inputSize={1} label='Número' id='numero' placeholder='Número' />

          <Select inputSize={6} label='Cidade' id='cidade' selected='Sua cidade' />
          <Select inputSize={2} label='UF' id='uf' selected='Seu estado' />
          <Input inputSize={4} label='Complemento' id='complemento' placeholder='Seu complemento' />

          <Input inputSize={8} label='E-mail' type='email' id='email' placeholder='Seu e-mail' />
          <Input inputSize={4} label='Senha' type='password' id='password' placeholder='Sua senha' />

          <Button inputSize={2} label='Cadastrar' type='submit' cor='btn-success' />
          <Button inputSize={2} label='Limpar' type='reset' cor='btn-warning' />
        </form>
      </main>
    </>
  )
}

export default App
