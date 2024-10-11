import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Input } from './components/input'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className='form-pessoa'>
        <h2>Cadastro de Alunos</h2>
        <form className="row g-3" action="">
          <Input inputSize={9} label='Nome Completo' id='nomeCompleto' placeholder='Seu nome completo' />
          
          <div className='col-md-3'>
            <label htmlFor="dataNasc" className='form-label'>Data Nasc.</label>
            <input type="date" className='form-control' id='dataNasc' />
          </div>
          <div className='col-md-3'>
            <label htmlFor="cep" className='form-label'>CEP</label>
            <input type="text" className='form-control' id='cep' placeholder="Seu CEP" />
          </div>
          <div className='col-md-8'>
            <label htmlFor="endereco" className='form-label'>Endereço</label>
            <input type="text" className='form-control' id='endereco' placeholder="Seu endereço" />
          </div>
          <div className='col-md-1'>
            <label htmlFor="numero" className='form-label'>Número</label>
            <input type="text" className='form-control' id='numero' placeholder="Número" />
          </div>
          <div className='col-md-6'>
            <label htmlFor="cidade" className='form-label'>Cidade</label>
            <select id="cidade" className="form-select">
              <option selected>Sua cidade</option>
              <option>...</option>
            </select>
          </div>
          <div className='col-md-2'>
            <label htmlFor="uf" className='form-label'>UF</label>
            <select id="uf" className="form-select">
              <option selected>Seu estado</option>
              <option>...</option>
            </select>
          </div>
          <div className='col-md-4'>
            <label htmlFor="complemento" className='form-label'>Complemento</label>
            <input type="text" className='form-control' id='uf' placeholder="Seu complemento" />
          </div>
          <div className="col-md-8">
            <label htmlFor="email" className='form-label'>E-mail</label>
            <input type="email" className='form-control' id='inputEmail4' placeholder="Seu e-mail"/>
          </div>
          <div className="col-md-4">
            <label htmlFor="senha" className='form-label'>Senha</label>
            <input type="password" className='form-control' id='inputPassword4' />
          </div>
          <div className="col-12 form-label">
            <button type="submit" className="btn btn-danger">Cadastrar</button>
          </div>
        </form>
      </main>
    </>
  )
}

export default App
