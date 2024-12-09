import { useState } from 'react';
import './App.css';
import ReactPlayer from 'react-player';
import movieTrailer from 'movie-trailer';
import { FaSearch } from "react-icons/fa";

function App() {

  const [video, setVideo] = useState();
  const [videoURL, setvideoURL ] = useState()
  const [error, seterror] = useState(null);

  function handleSearch(){

    

    movieTrailer(video).then((res) =>{
      if(res){
        seterror(null);
        setvideoURL(res);
      }else{
        setvideoURL("");
        seterror(`Trailer not found for "${video}". Please try another movie.`)
      }

    })
     .catch((err)=>{
        setvideoURL("");
        seterror(`Something went when searching for "${video}".Please try again`)

     });
  }
  return (
    <div className='App'>
      <div >
        <h1> Movie Trailer Finder 🎥</h1>
        <input 
        type="text" 
        placeholder="Enter movie name..."
        className='SearchBar'
        onChange= {(e) => { setVideo(e.target.value) }} />

                <button onClick={() => { handleSearch() }}>
                   <FaSearch size={24 } color="blue" />
                </button>
          
      </div>
      
      {error && <p>{error}</p>} 
      <ReactPlayer className="custom-player" url={videoURL}  controls={true}  />
    </div>
  )
  }

export default App
