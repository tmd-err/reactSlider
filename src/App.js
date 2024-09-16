import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [count,setCount]= useState(0) ; 
  const [msg,setMsg] = useState('') ; 
  const handleClick = ()=>{ 
    setCount(prevCount=>prevCount+1)
    setMsg('Incresead')
    setTimeout(() => {
    setMsg('')
      
    }, 1000);
  }
  const handleDecrease = ()=>{ 
    setCount(prevCount=>prevCount-1)
    setMsg('Decreased')
    setTimeout(() => {
      setMsg('')
        
      }, 1000);

  }
  const handleReset =()=>{
    setCount(0)
    setMsg('Reseted')
    setTimeout(() => {
      setMsg('')
        
      }, 1000);

  }
  useEffect(()=>{
    console.log('hello world')
  },[count])


  return (
   <div className='container mt-5 d-flex text-center justify-content-center flex-column'>
    <div>
    <h1 className='display-6 text-center w-100'>Counter</h1>
    </div>
      <div className='d-flex col-4 mx-auto g-2 justify-content-center'>
      <button onClick={handleClick} className='mx-auto btn btn-primary'>Add Count</button>
      <button onClick={handleReset} className='mx-auto btn btn-success'>Reset</button>
      <button onClick={handleDecrease} className='mx-auto btn btn-danger'>Decrease Count</button>
      </div>
      <span id='number'>{count} {msg}</span>
   </div>
   
  
  );
}

export default App;
