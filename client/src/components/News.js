import React, {useEffect, useState} from 'react';
import userAPI from '../Utils/userAPI';


function News() {
    const [search, setSearch] = useState('')
    const [newsData, setNewsData] = useState({})

    const getNewsData = () => {
        userAPI.getNews(search)
        .then(res => {
            setNewsData(res.data.articles)
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
    return(
        <div>
        <input type='text' name='search' value={search} onChange={(e) => {handleInputChange(e)}} />
        <button onClick={handleSubmit}>Search</button>
        {newsData.length>0 ? newsData.map(data => {
            return (
                <article>
                    <h5>{data.title}</h5>
                    <p>{data.author}</p>
                </article>
            
            )
        }): <>no data</>}
        </div>
    )
}

export default News;