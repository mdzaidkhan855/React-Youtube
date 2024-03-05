
import React from "react"

const commentsData =
[
    {
        name:"Akshay saini",
        text:"loren ipsum dolor sit amet",
        replies:[
            {
                name:"Akshay saini",
                text:"loren ipsum dolor sit amet",
                replies:[
                    {
                        name:"Akshay saini",
                        text:"loren ipsum dolor sit amet",
                        replies:[
                            
                        ]
                    }
                    
                ]
            },
            {
                name:"Akshay saini",
                text:"loren ipsum dolor sit amet",
                replies:[
                    
                ]
            }

        ]
    },
    {
        name:"Akshay saini",
        text:"loren ipsum dolor sit amet",
        replies:[
            {
                name:"Akshay saini",
                text:"loren ipsum dolor sit amet",
                replies:[
                    {
                        name:"Akshay saini",
                        text:"loren ipsum dolor sit amet",
                        replies:[
                            
                        ]
                    }
                    
                ]
            }

        ]
    }
    
]

const CommentsList = ({comments})=>{
    return comments.map((comment,index)=> {
        return (
            <div key={index}>
                <Comment  data={comment}/>
                <div  className="pl-5 border border-l-black ml-5">
                    <CommentsList  comments={comment.replies}/>
                </div>
            </div>
        )
         
    });
}

const Comment = ({data})=>{
    const {name,text,replies} = data;

    return ( 
        <div className="flex">
            <img 
                className="h-8"
                alt="user" 
                src="data:image/jpeg;base64,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" />
            <div className="px-3">
                <p className="font-bold">{name}</p>
                <p>{text}</p>
            </div>
        </div>
    )
}
const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
        <h1 className="text-2xl font-bold">Comments:</h1>
        <CommentsList comments={commentsData}/>
    </div>
  )
}
export default CommentsContainer