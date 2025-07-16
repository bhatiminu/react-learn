import { useState } from 'react'
import InputBox from './componets/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setconvertedAmount] = useState(0)
  const currencyInfo = useCurrencyInfo(from)
const options = Object.keys(currencyInfo ?? {});

  const swap = () => {
    setFrom(to)
    setTo(from)
    setconvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
  setconvertedAmount(amount * currencyInfo[to])
  }


 return (
        <div
            className="currency-card-wrap"
           
        >
          
                <div className="card-currency">
                    <form
                      onSubmit={(e) => {e.preventDefault();
                        convert()

                      }  }
                    >
                        <div className="currency-box">
                            <InputBox
                               label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setAmount(amount)}
                            selectCurrency={from}
                             onAmountChange={(amount) => setAmount(amount)}
                            />
                        </div>
                        <div className="swap-wrap">
                            <button
                                type="button"
                                className="swap-btn"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="currency-box">
                            <InputBox
                                 label="To"
                                amount={convertedAmount}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => setTo(currency)}
                                selectCurrency={from}
                                amountDisable
                            />
                        </div>
                        <button type="submit" className="convert-button">
                            Convert {from.toUpperCase()} to {to.toLowerCase()}
                        </button>
                    </form>
                </div>
           
        </div>
    );
}

export default App
