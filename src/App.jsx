import { useState } from 'react'

export default function App() {
  const [billAmount, setBillAmount] = useState('');
  const [tip, setTip] = useState(null);
  const [customTip, setCustomTip] = useState('');
  const [noOfPeople, setNoOfPeople] = useState('');
  const [error, setError] = useState(false);

  const handleBillAmount = (e)=> {
    setBillAmount(e.target.value);
  }

  const handleNoOfPeople = (e) => {
    const value = e.target.value;
    setNoOfPeople(value); // Update the state with the new value

    // Check if the value is '0' or empty (which parseFloat/parseInt will treat as 0 or NaN)
    // We parse it as an integer because 'number of people' implies whole numbers.
    const parsedValue = parseInt(value, 10);

    if (parsedValue === 0) {
      setError(true); // Set error to true if the value is 0
    } else {
      setError(false); // Clear error if it's not 0
    }
  };

  const handleCustomTip = (e)=> {
    const value = e.target.value;
    setCustomTip(value);
    setTip(null);
  }

  const clearAll = () => {
    setBillAmount('');
    setTip(null);
    setCustomTip('');
    setNoOfPeople('');
    setError(false);
  }

  const canCalculate = billAmount !== '' && tip !== '' && noOfPeople !== '' && parseInt(noOfPeople, 10) !== 0;

  return (
    <div className='grid font-Spacemono mx-auto content-center h-screen font-bold  bg-Grey200 pt-1'>
      <h1 className='justify-self-center w-24 text-center text-2xl tracking-[0.5rem] text-Green900 my-10'>SPLT <span>TTER</span></h1>

      <section className='bg-white rounded-t-3xl sm:rounded-3xl p-8 sm:w-xl lg:w-3xl xl:w-4xl h-full lg:flex lg:gap-10 justify-self-center'>
          <section className='lg:w-1/2 lg:p-2'>
            <label className='text-Grey400' htmlFor="bill">Bill
              <div className='relative' >
                <span className='absolute top-1/3 left-4'>
                  <img src="/public/images/icon-dollar.svg" alt="icon-dollar" />
                </span>
                <input 
                  className='w-full bg-Grey50 p-2.5 mt-1 text-right text-2xl text-Green900 
                  outline-Green400 hover:border-2 hover:rounded-md hover:border-Green400 cursor-pointer' 
                  type="number" 
                  id='bill' 
                  value={billAmount}
                  onChange={handleBillAmount}
                  min='0' 
                />
              </div>
            </label>

            <form className='my-6'>
              <span className='text-Grey400'>Select Tip %</span>
              
              <div className='grid grid-cols-2 sm:grid-cols-3 gap-4 mt-3'>
                <label
                  className='flex items-center rounded-md cursor-pointer' 
                  htmlFor="5%">
                  <input
                    className='hidden peer' 
                    type="radio" 
                    name="tip" 
                    id="5%"
                    value='5'
                    checked={tip === '5'}
                    onChange={() => setTip("5")}
                  />
                  <span className='w-full text-2xl text-center p-2 bg-Green900 text-white rounded-md
                  hover:bg-HoverGreen hover:text-Green900
                  peer-checked:bg-Green400 peer-checked:text-Green900'>5%
                  </span>
                </label>

                <label
                  className='flex items-center rounded-md cursor-pointer' 
                  htmlFor="10%">
                  <input
                    className='hidden peer' 
                    type="radio" 
                    name="tip" 
                    id="10%"
                    value='10'
                    checked={tip === '10'}
                    onChange={() => setTip("10")}
                  />
                  <span className='w-full text-2xl text-center p-2 bg-Green900 text-white rounded-md
                  hover:bg-HoverGreen hover:text-Green900
                  peer-checked:bg-Green400 peer-checked:text-Green900'>10%
                  </span>
                </label>

                <label
                  className='flex items-center rounded-md cursor-pointer' 
                  htmlFor="15%">
                  <input
                    className='hidden peer' 
                    type="radio" 
                    name="tip" 
                    id="15%"
                    value='15'
                    checked={tip === '15'}
                    onChange={() => setTip("15")}
                  />
                  <span className='w-full text-2xl text-center p-2 bg-Green900 text-white rounded-md
                  hover:bg-HoverGreen hover:text-Green900
                  peer-checked:bg-Green400 peer-checked:text-Green900'>15%
                  </span>
                </label>

                <label
                  className='flex items-center rounded-md cursor-pointer' 
                  htmlFor="25%">
                  <input
                    className='hidden peer' 
                    type="radio" 
                    name="tip" 
                    id="25%"
                    value='25'
                    checked={tip === '25'}
                    onChange={() => setTip("25")}
                  />
                  <span className='w-full text-2xl text-center p-2 bg-Green900 text-white rounded-md
                  hover:bg-HoverGreen hover:text-Green900
                  peer-checked:bg-Green400 peer-checked:text-Green900'>25%
                  </span>
                </label>

                <label
                  className='flex items-center rounded-md cursor-pointer' 
                  htmlFor="50%">
                  <input
                    className='hidden peer' 
                    type="radio" 
                    name="tip" 
                    id="50%"
                    value='50'
                    checked={tip === '50'}
                    onChange={() => setTip("50")}
                  />
                  <span className='w-full text-2xl text-center p-2 bg-Green900 text-white rounded-md
                  hover:bg-HoverGreen hover:text-Green900
                  peer-checked:bg-Green400 peer-checked:text-Green900'>50%
                  </span>
                </label>

                <label htmlFor="custom">
                  <input
                    className='bg-Grey50 p-2 pr-4 rounded-md w-full text-2xl lg:text-xl text-right placeholder:text-center text-Green900  outline-Green400 hover:border-2 hover:rounded-md hover:border-Green400' 
                    id='custom' 
                    type="number" 
                    placeholder='Custom'
                    value={customTip}
                    onChange={handleCustomTip}
                    min='0' 
                  />
                </label>
              </div>
            </form>
            
            <label className='relative text-Grey400' htmlFor="no-of-people">Number of People
              <div className='relative'>    
                <span className='absolute top-1/3 left-4'>
                  <img src="/public/images/icon-person.svg" alt="icon-person" />
                </span>
                <input 
                  className={`w-full bg-Grey50 p-2.5 mt-1 text-right text-2xl text-Green900  outline-Green400 
                  hover:border-2 hover:rounded-md hover:border-Green400 cursor-pointer
                  ${error ? 'border-2 rounded-md border-red-400' : 'border-0'}`}
                  type="number" 
                  id='no-of-people'
                  value={noOfPeople}
                  onChange={handleNoOfPeople}
                  min='0'
                  step='1'
                />
              </div>
              {error && <p className="absolute right-0 text-red-400 text-sm mt-1 lg:top-0">Can't be zero</p>}
            </label>
          </section>

          <section className='flex flex-col justify-between bg-Green900 p-6 pt-8 rounded-2xl mt-8 
            lg:w-1/2 lg:p-10 lg:m-0'>
            <div className='grid gap-8'>
              <div className='flex' htmlFor="tip-per-person">
                <div className='w-1/2 flex flex-col'>
                  <span className='text-white text-[0.85rem] lg:text-[1rem] xl:text-[1.3rem]'>Tip Amount </span> 
                  <span className='text-Grey400 text-[0.75rem] lg:text-[0.9rem] xl:text-[1.1rem]'>/ person</span>
                </div>
                <p className='w-1/2 text-right self-center text-Green400 text-3xl lg:text-4xl'>
                  {canCalculate
                    ? `$${((parseFloat(billAmount) * (tip !== null ? tip : parseFloat(customTip))) / 100 / parseFloat(noOfPeople)).toFixed(2)}`
                    : ''}
                </p>
              </div>

              <div className='flex' htmlFor="total-per-person">
                <div className='w-1/2 flex flex-col'>
                  <span className='text-white text-[0.85rem] lg:text-[1rem] xl:text-[1.3rem]'>Total </span> 
                  <span className='text-Grey400 text-[0.75rem] lg:text-[0.9rem] xl:text-[1.1rem]'>/ person</span>
                </div>
                <p className='w-1/2 text-right self-center text-Green400 text-3xl lg:text-4xl'>
                  {canCalculate
                  ? `$${((parseFloat(billAmount) + (parseFloat(billAmount) * (tip !== null ? tip : parseFloat(customTip)) / 100)) / parseFloat(noOfPeople)).toFixed(2)}`
                  : ''}
                </p>
              </div>
            </div>
            

            <button 
              type="reset" 
              className='w-full bg-Green400 text-Green900 text-xl rounded-md p-2 mt-4 
              hover:bg-HoverGreen cursor-pointer'
              onClick={clearAll}
            >
              RESET
            </button>
          </section>
      </section>
    </div>
  )
}
