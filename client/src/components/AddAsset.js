import React, {useEffect, useState} from 'react'
import API from "../Utils/API"

export default function AddAsset() {

    const [ symbolList, setSymbolList ] = useState([])
    const [ formInputs, setFormInputs ] = useState({ })

    useEffect(( ) => {
        // get list of all valid cryptocurrency symbols
        // set state using the valid symbols arrays and save it to symbolList
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (symbolList.includes(formInputs.symbol)) {
            API.postNewTransaction(formInputs)
            .then(window.location.replace("/portfolio"))
        } else {
            window.alert("Please provide a valid symbol")
        }
        // check if user provided symbol matches one in the symbolList array
    }

    const handleInputChange = (e) => {
        setFormInputs({...formInputs, [e.target.name]:e.target.value})
    } 


    return (
        <div>
            <form>
                <div class="dropdown col-sm-2 col-form-label">
                    <button class="btn btn-primary dropdown-toggle " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Bought
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="#">Sold</a>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="symbol" class="col-sm-2 col-form-label">Asset Symbol</label>
                    <div class="col-sm-10">
                    <input onChange={handleInputChange} class="form-control" name="symbol" placeholder="BTC"/>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="amountPurchased" class="col-sm-2 col-form-label">Amount Purchased</label>
                    <div class="col-sm-10">
                    <input onChange={handleInputChange} class="form-control" name="amountPurchased" placeholder=".5344"/>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="dollarsSpent" class="col-sm-2 col-form-label">Dollars Spent</label>
                    <div class="col-sm-10">
                    <input onChange={handleInputChange} class="form-control" name="dollarsSpent" placeholder="$10,000"/>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-2 col-form-label">
                    <button onClick={handleSubmit}type="submit" class="btn btn-primary">Add Transaction</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
