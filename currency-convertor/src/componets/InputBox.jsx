import {useId} from "react";
import './inputBox.css';

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
   
const amountInputId = useId()
    return (
        <div className={`currency-wrapper ${className}`}>
            <div className="input-currency">
                <label htmlFor={amountInputId}  className="label-name">
                    {label}
                </label>
                <input
                    id ={amountInputId}
                    className="input-box"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="currency-dropdown">
                <p className="currency-type">Currency Type</p>
                <select
                    className="currency-type-list"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled= {currencyDisable}
                >
                          {currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>
                            {currency}
                            </option>
                        ))
                    }
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;
