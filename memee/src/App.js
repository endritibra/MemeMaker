import './App.css';
import Form from './components/Form';
import { useEffect,useState } from 'react';

function App() {

 

  return (
    <div className="App bg-[#6ECCAF] p-8 flex justify-center items-center w-[30rem] md:w-[40rem] lg:w-[50rem] h-auto flex-col">
        <h1 className='text-black text-2xl md:text-5xl font-bold'>Meme Generator</h1>
        <Form  />


    </div>
  );
}

export default App;
