import React,{useEffect, useState} from 'react'
import axios  from '../../axios'
import {API_KEY,imageURL} from '../../constants/constants'
import './Banner.css'

function Banner() {
    const [movies, setMovies] = useState()
    useEffect(()=>{
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
            setMovies(response.data.results[1])
        })
    },[])
    return (
        <div
        style={{backgroundImage:`url(${movies ? imageURL+movies.backdrop_path : null})`}}
         className="Banner">
            <div className="content">
                <h1 className="MovieTitle">{movies ? movies.title : ""}</h1>
                <div className="banner_buttons">
                    <button className="button">Play</button>
                    <button className="button">My List</button>
                </div>
                <div>
                    <p className="description">{movies ? movies.overview : ""}</p>
                </div>
            </div>
            <div className="fade_bottom"></div>
        </div>
    )
}

export default Banner
