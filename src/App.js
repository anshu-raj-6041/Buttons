
import { useState } from 'react';
import './App.css';

function App() {

  // to reflect in  UI
  // setCount count ki value ko update karega
  // count ko initialize 0 se kr diye hai
  const [count, setCount] = useState(0);
  function decHandler() {
    setCount(count - 1);

  }
  function incHandler() {
    setCount(count + 1);


  }
  function resetHandler() {
    setCount(0);


  }
  return (
    <div className='w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10'>
      <div className='text-[#0398d4] font-medium text-3xl'>Increment and Decrement</div>

      <div className='bg-white flex justify-center gap-12 py-3 rounded-sm text-[25px] text-[#344151]'>
        <button onClick={decHandler} className='border-r-2 text-center w-20 border-[#bfbfbf] text-5xl'>-</button>
        <div className='font-bold gap-12 text-5xl'>{count}</div>
        <button onClick={incHandler} className='border-r-2 text-center w-20 border-[#bfbfbf] text-5xl'>+</button>
      </div>

      <button onClick={resetHandler} className='bg-[#0398d4] text-white px-5 py-2 rounded-sm textlg'>Reset</button>
    </div>

  );
}

export default App;
