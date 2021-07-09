import React, {useEffect, useState} from 'react'
import API from "../Utils/API"
import axios from 'axios';

export default function AddAsset() {

    const [ symbolList, setSymbolList ] = useState([])
    // const [ coinMap, setCoinMap ] = useState({});
    const [ formInputs, setFormInputs ] = useState({ })

    useEffect(() => {
        console.log('test')
        axios
        .get('https://api.coingecko.com/api/v3/coins/list?include_platform=false')
        .then(res => {
            console.log(res.data)
            // const coinMap = res.data.reduce( (acc, coin) => ({ ...acc, [coin.symbol]: coin.name }), {})
            const coinSymbols = res.data.map(data => {
                return(data.symbol)
            })
            const coinNames = res.data.map(data => {
                return(data.name)
            })
            // setCoinMap(coinMap);
            // console.log(coinMap)
            setSymbolList(coinSymbols);
            // console.log(coinSymbols)
            // console.log(coinNames)

            var symbolNameArray = {};
            for(var i = 0; i < coinSymbols.length; i++) {
                var id = coinSymbols[i];
                var count = (coinNames[i]);
                if(symbolNameArray[id] === undefined) {
                    symbolNameArray[id] = count;
                } else {
                    symbolNameArray[id] += count;
                }       
            }

            console.log(symbolNameArray)
        }).catch(error => console.log(error))
        // set state using the valid symbols arrays and save it to symbolList
    }, [] );

    const handleSubmit = (e) => {
        e.preventDefault()
        if (symbolList.includes(formInputs.symbol)) {
            // formInputs.asset = coinMap[formInputs.symbol];
            API.postNewTransaction(formInputs)
            // .then(window.location.replace("/portfolio"))
        } else {
            window.alert("Please provide a valid symbol")
        }
    }

    const handleInputChange = (e) => {
        setFormInputs({...formInputs, [e.target.name]:e.target.value})
    } 

    return (
        <div>
            <form>
                <div className="dropdown col-sm-2 col-form-label">
                    <button className="btn btn-primary dropdown-toggle " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Bought
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#">Sold</a>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="symbol" className="col-sm-2 col-form-label">Asset Symbol</label>
                    <div className="col-sm-10">
                    <input onChange={handleInputChange} className="form-control" name="symbol" placeholder="BTC"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="asset" className="col-sm-2 col-form-label">Asset Name</label>
                    <div className="col-sm-10">
                    <input onChange={handleInputChange} className="form-control" name="asset" placeholder="Bitcoin"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="amountPurchased" className="col-sm-2 col-form-label">Amount Purchased</label>
                    <div className="col-sm-10">
                    <input onChange={handleInputChange} className="form-control" name="amountPurchased" placeholder=".5344"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="dollarsSpent" className="col-sm-2 col-form-label">Dollars Spent</label>
                    <div className="col-sm-10">
                    <input onChange={handleInputChange} className="form-control" name="dollarsSpent" placeholder="$10,000"/>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-2 col-form-label">
                    <button onClick={handleSubmit} type="submit" className="btn btn-primary">Add Transaction</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
