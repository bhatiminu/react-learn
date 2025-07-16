import React, { useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
   const data =  useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/bhatiminu')
    //     .then((res) => res.json())
    //     .then((data) => {console.log(data);
    // setData(data)})
    //     .catch((err) => console.log(err))
    // }, [])
    return (
        <>
        <div>GitHub: {data.followers}</div>
         <div><img src={data.avatar_url} alt="" /> </div>
        </>
    )
    
}

export default Github

export const GithubInfoLoader  = async () => {
const response = await fetch('https://api.github.com/users/bhatiminu')
return response.json()
}