
import './App.css';
import ComponentButton from './components/Esercizio';
import MyButton from './components/Esercizio';
import ImageComponent from './components/EsercizioDue';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      
      </header>
      <div>
       <ComponentButton Bottone="salva" />
      <MyButton Bottone="modifica" />
      <ImageComponent Src="https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" Alt="img"/>
</div>
<div>
      <ComponentButton Bottone="salva" />
      <MyButton Bottone="modifica" />
      <ImageComponent Src="https://images.pexels.com/photos/1045113/pexels-photo-1045113.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" Alt="imgTwo"/>
</div>
          </div>
  );
}

export default App;
