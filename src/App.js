
import './App.css';
import { useEffect, useState } from 'react';

function App() {
let [lista, setLista]= useState([]);
let[novoItem, setNovoItem] = useState("");

useEffect(( ) =>{
setLista(["Tarefa 1 ", "Tarefa 2", "Tarefa 3", "Tarefa 4"]);
}, []);


  return (
    <div className='container'>
    <div className='new-item'>
    <input placeholder='Tarefa' value={novoItem} onChange={value => setNovoItem(value.target.value)} type="text"/>
    <button onClick={() => adicionarNovoItem()}>Adicionar</button>
    </div>
    <ul className='Lista31'>
      {lista.map((item, index) => (
      <li key={index} className="Lista31">
        {item}
        <button onClick={() => deletarItem(index)}>
        Deletar
        </button>
        </li>
        ))}
  </ul>
  </div>
  );


function adicionarNovoItem() {
if(novoItem.length <= 0){
  alert("por favor digite algo no campo 'Tarefa'. ")
  return;
}

let itemIndex = lista.indexOf(novoItem);
if(itemIndex >= 0){
  alert("Você ja adicionou esta tarefa.")
  return;
}

    setLista([...lista, novoItem]);
    setNovoItem("");
  }

  function deletarItem(index){
    let tmpArray = [...lista];
    tmpArray.splice(index, 1);

    setLista(tmpArray);
  }

}

export default App;
