import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Input } from './components/input';
import { Select } from './components/select';
import { Button } from './components/button';

function App() {
  const [formData, setFormData] = useState({
    nomeCompleto: '',
    dataNasc: '',
    cep: '',
    endereco: '',
    numero: '',
    cidade: '',
    uf: '',
    complemento: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    console.log(id, value);
    setFormData(prevState => ({ ...prevState, [id]: value }));
  };

  const handleCepChange = (data) => {
    setFormData(prevState => ({
      ...prevState,
      endereco: data.endereco,
      cidade: data.cidade,
      uf: data.uf
    }));
  };

  const enviar = (e) => {
    e.preventDefault(); // evita a tela carregar depois do click Salvar
    console.log('Form:', formData);
  };

  return (
    <>
      <main className='form-pessoa'>
        <h2>Cadastro de Alunos</h2>
        <form className="row g-3" onSubmit={enviar}>
          <Input
            inputSize={9}
            label='Nome Completo'
            id='nomeCompleto'
            placeholder='Seu nome completo'
            onChange={handleChange}
          />
          <Input
            inputSize={3}
            label='Data Nasc.'
            type='date'
            id='dataNasc'
            placeholder='Data Nasc.'
            onChange={handleChange}
          />

          <Input
            inputSize={3}
            label='CEP'
            id='cep'
            placeholder='Seu CEP'
            onChange={handleChange}
            onCepChange={handleCepChange}
          />
          <Input
            inputSize={8}
            label='Endereço'
            id='endereco'
            placeholder='Seu endereço'
            value={formData.endereco}
            onChange={handleChange}
          />
          <Input
            inputSize={1}
            label='Número'
            id='numero'
            placeholder='Número'
            onChange={handleChange}
          />

          <Select
            inputSize={6}
            label='Cidade'
            id='cidade'
            selected={formData.cidade}
            onChange={handleChange}
          />
          <Select
            inputSize={2}
            label='UF'
            id='uf'
            selected={formData.uf}
            onChange={handleChange}
          />
          <Input
            inputSize={4}
            label='Complemento'
            id='complemento'
            placeholder='Seu complemento'
            onChange={handleChange}
          />

          <Input
            inputSize={8}
            label='E-mail'
            type='email'
            id='email'
            placeholder='Seu e-mail'
            onChange={handleChange}
          />
          <Input
            inputSize={4}
            label='Senha'
            type='password'
            id='password'
            placeholder='Sua senha'
            onChange={handleChange}
          />

          <Button inputSize={2} label='Cadastrar' type='submit' cor='btn-success' />
          <Button inputSize={2} label='Limpar' type='reset' cor='btn-warning' onClick={e => setFormData({})} />

          <div className='mt-4' style={{color: '#000', textAlign:'left'}}>
            <h4>Dados JSON</h4>
            <pre>{JSON.stringify(formData, null, 2)}</pre>
          </div>
          
        </form>
      </main>
    </>
  );
}

export default App;
