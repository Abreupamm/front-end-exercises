import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  const tarefas = ['Estudar conteúdo do dia', 'Fazer execícios', 'Participar das mentorias']
  const general = tarefas.map((tarefa) => Task(tarefa));
  return general;
}

export default App;
