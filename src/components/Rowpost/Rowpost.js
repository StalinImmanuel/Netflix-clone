import React, { useEffect, useState } from 'react'
import './Rowpost.css'
import axios from '../../axios'
import YouTube from 'react-youtube'
import { API_KEY, imageUrl } from '../../constants/Constants'
function Rowpost(props) {
  const [movies, setMovie] = useState([])
  const[urlId,setUrlId]= useState('')
  useEffect(() => {
    axios.get(props.url).then((response) => {
      console.log(response.data)
      setMovie(response.data.results)
    })
  }, [])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handlemovie=(id)=>{
  console.log(id)
  axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-us`).then(response=> 
    {
      if (response.data.results.length!==0){
        setUrlId(response.data.results[0])
      }else{
        console.log('array empty')
      }
    })
  }
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className="posters">
        {
          movies.map((obj)=>
            
            <img onClick={()=>handlemovie(obj.id)} className={props.isSmall?'smallposter':'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />

          )
        }

      </div>
 {    urlId && <YouTube opts={opts} videoId={urlId.key}/>
}
    </div>
  )
}

export default Rowpost