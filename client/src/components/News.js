import React, { useState} from 'react';
import userAPI from '../Utils/userAPI';


function News() {
    const [search, setSearch] = useState('')
    const [newsData, setNewsData] = useState({})

    const getNewsData = () => {
        userAPI.getNews(search)
        .then(res => {
            console.log(res.data)
            setNewsData(res.data.data)
            console.log(newsData)
        })
        .catch(err => {console.log(err)})
    }

    const handleInputChange = (e) => {
        const value = e.target.value
        setSearch(value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        getNewsData()
    }
    
    const formatDate = (date) => {
        const dateArr = date.split('-')
        const month = dateArr[1]
        const year = dateArr[0]
        const dayArr = dateArr[2].split('T')
        const day = dayArr[0]
        const newDate = [month, day, year].join('-')
        return newDate
    }

    return(
        <div>
        <input type='text' name='search' value={search} onChange={(e) => {handleInputChange(e)}} />
        <button onClick={handleSubmit}>Search</button>
        {newsData.length>0 ? newsData.map(data => {
            return (
                <article>
                    <h5>{data.title}</h5>
                    <p>Author: {data.author}</p>
                    <p>Published: {formatDate(data.published_at)}</p>
                    <p>{data.description}</p>
                </article>
            
            )
        }): <div>no data</div>}
        </div>
    )
}

export default News;