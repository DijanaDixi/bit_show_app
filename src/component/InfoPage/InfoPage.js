import React, { useEffect,useState } from "react";
import { withRouter } from "react-router-dom";
function InfoPage(props){
    const id=props.match.params.id
    const[movie,setMovie]=useState([])
  
        useEffect(() => {
            fetch("http://api.tvmaze.com/shows/"+id)
              .then((response) => response.json())
              .then((data) => {
               
                console.log(data)
              });
          }, []);
   
    return (
        <h1>Info Page</h1>
    )
}

export default withRouter(InfoPage);