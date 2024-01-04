import Input from "./components/Input";
import useCurrency from "./hooks/useCurrency";
import { useState } from "react";
function App() {

  const [to,setTo]=useState('inr');
  const [from,setFrom]=useState('usd');
  const [amount,setAmount]=useState(0);
  const [converted,setConverted]=useState(0);

  const data= useCurrency(from);
  const options=Object.keys(data);

   function converter(){
          const targetCurreny=amount*data[to];

          setConverted(targetCurreny.toFixed(5));
       }
  


  return (
    <>
        
    
        <div className="flex justify-center items-center h-lvh ">

      <div className="md:w-[40%] md:px-20  bg-[#E7E9EB] rounded-lg border-2 border-slate-800 ">
        <div className="text-2xl text-center p-4 font-semibold text-gray-700">
          Currency Converter
        </div>
        <div>
         <Input
         label="From"
         amount={amount}
         selectCurrency={from}
         onCurrencyChange={(c)=>setFrom(c)}
         onAmountChange={(amount)=>setAmount(amount)}   
         currencyOption={options}
         />
       </div>
      

       <div className="mt-3"> 
      <Input 
      currencyOption={options}
      label="To"
      selectCurrency={to}
      onCurrencyChange={(c)=>setTo(c)}
      amount={converted}
      readonly={true}
      />
      </div>

      
       <button
        className="w-full mb-10 text-center text-xl mt-4 p-2 bg-[#1473e6] rounded-lg text-white"
        onClick={converter}>Convert {from.toUpperCase()} to {to.toUpperCase()} </button>
      
      </div>
</div>

</>
  );
}

export default App;
