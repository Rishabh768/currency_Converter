import React from 'react'

const Input = ({
  label,
  amount,
  onAmountChange,
  selectCurrency,
  onCurrencyChange,
  currencyOption,
  readonly=false
  }) => {
  

  return (
    
      <div className="flex text-sm bg-white p-3 rounded-lg">
       
       <div className='w-1/2 '>
           <label className="text-black/40 mb-2 inline-block" htmlFor={label}>
             {label}
           </label>
           <input 
             className='w-full text-xl p-2 rounded-lg outline-none '
             id={label}
             type='text' 
            value={amount}
             onChange={(e)=>onAmountChange(e.target.value)}
             readOnly={readonly}
             />
          </div>
  
      <div className='w-1/2  flex flex-wrap justify-end text-right'>
        
        <p className='text-black/40 mb-2 w-full'>currency type</p>
        
        <select className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
         value={selectCurrency}
         onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
         >
          {currencyOption.map((currency)=>(
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
          </select>
      </div>
    </div>
    
  )
}

export default Input