import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { imageURL,API_KEY, base_url } from '../../constants/constants'
import './RowPost.css'
import YouTube from 'react-youtube'


function RowPost(props) {
    const [originals, setOriginals] = useState([])
    const [urlId, setUrlId] = useState('')
    useEffect(()=>{
        axios.get(props.url).then((response)=> {
            setOriginals(response.data.results)
        }).catch(err=>{
            alert("Network Not Available")
        })
    },[])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        },
      };
      const handleMovie = (id) => {
          axios.get(`${base_url}/movie/${id}/videos?api_key=${API_KEY}&language=en-US&`).then((responce)=>{
              if(responce.data.results.length !== 0){
                  setUrlId(responce.data.results[0])
              }else{
                  console.log('array empty')
              }
          })
      }
    return (
        <div className="Posters">
           <h2 className="title">{props.title}</h2>
           <div className="RowPosters">
               {
                   originals.map((obj) => 
                        <img onClick={() => handleMovie(obj.id)} className={props.isSmall ? "smallPoster" : "poster"} src={`${imageURL+obj.backdrop_path}`} alt="poster" />
                   )
               }
           </div>
        { urlId && <YouTube videoId={urlId.key} opts={opts}/> }
        </div>
    )
}

export default RowPost
