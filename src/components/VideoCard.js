import React from "react"

const VideoCard = ({info}) => {
   // console.log(info);
  const{snippet, statistics} = info;
  const{channelTitle, title,thumbnails} = snippet;  
  return (
    <div className="pt-4 m-4 w-48 shadow-black">
        <div>
            <img className="rounded-lg" src={thumbnails.medium.url} alt="thumbnail" />
        </div>
        <div>
            <ul>
                <li className="font-bold">{title}</li>
                <li>{channelTitle}</li>
                <li>{statistics.viewCount}</li>
            </ul>
        </div>
        
    </div>
  )
}

// High Order function for VideoCard which is of Advertisment type
export const AdVideoCard = ({info})=>{

    return (
        <div className="p-1 m-1 border border-red-700">
            <VideoCard info={info}/>
        </div>
    )
}
export default VideoCard