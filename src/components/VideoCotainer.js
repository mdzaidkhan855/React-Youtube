
import React, { useEffect, useState } from "react";
import {YOUTUBE_VIDEOS_API} from '../utils/constants';
import VideoCard ,{AdVideoCard} from "./VideoCard";
import { Link } from "react-router-dom";


const VideoCotainer = () => {

  const[videos, setVideos] = useState([]);

  useEffect(()=>{
    //console.log(" Inside useEffect");
    getVideos();
  },[])

  const getVideos = async ()=>{
   // console.log(" Inside getVideos");
    const data = await fetch(YOUTUBE_VIDEOS_API);

    const json = await data.json();
    //console.log("videos", json);
    //console.log("Videos",json.items)
    setVideos(json.items);
    //console.log("First Videos",json.items[0])
  }
  return (
    <div className="flex flex-wrap">
      
        {
          videos[0] && <AdVideoCard info={videos[0]}/>
        }
        {
          videos.map((video)=>{
          return <Link key={video.id} to={"/watch?v=" + video.id }><VideoCard  info={video}/></Link> 
          })
        }
      
        
    </div>
  )
}
export default VideoCotainer