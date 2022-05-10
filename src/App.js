import Header from './components/Header';
import './App.css';

function App() {

  const dados = {
    nome: "Gabriele Amorim",
    empresa: "Avanade",
    site: "https://fiap.com.br",
    className: "App-link",
    
  };

  return (
    <div className="App">
      <Header title="Bem vindo! Bom almoço!" options={dados}/>
      
    </div>
  );
}

export default App;
