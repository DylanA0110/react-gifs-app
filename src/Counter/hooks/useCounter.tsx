import { useState } from "react";


export const useCounter = (initialValue: number = 10) => {
    const [counter, setCount] = useState(initialValue);

    const handleCount = () =>{
        setCount(counter+1);
    }

    const handleDecrement = () =>{
        setCount(prevState => prevState - 1);
    }

    const handleReset =() =>{
        setCount(5);
    }

  return {
    //Properties
    counter,
    //Methods / actions
    handleCount,
    handleDecrement,
    handleReset
  }
}

