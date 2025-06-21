import { useState , useEffect } from "react";
import { options } from "../utils/Options.jsx"

const useFetch = (apiPath) => {

    const [data , setData] = useState([]);


    useEffect(() => {
         const fetchMovies = async () => {
            try{
                const response = await fetch(`https://api.themoviedb.org/3/${apiPath}` , options)
                const data  = await response.json();

                setData(data.results ? data.results : data)
            }catch(error){
                console.error("Error in fetching" , error)
            }
        }
        fetchMovies()
    } , [apiPath])

    return{
        data
    }



}

export default useFetch;