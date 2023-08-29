import SmoothieCard from "../components/SmoothieCard"
import supabase from "../config/supabaseClient"
import { useState, useEffect } from 'react'

const Home = () => {

   const [fetchError, setFetchError] = useState(null) //null = no value
   const [smoothies, setSmoothies] = useState(null) //for smoothies data


   useEffect(() => {

    //to get data from Supabase
    const fetchSmoothies = async() => { //can't use await without async 
      const { data,error } = await supabase //this is to fetch the data from supabase
        .from('smoothies') //where to get the data? from smoothies table in supabase
        .select()//to select all data from the table, just put empty

        if (error){ //if ther's error, will execute a message below
          setFetchError('Could not fetch the smoothies')
          setSmoothies(null)//if there's error, value of smoothie would be null

        }
        if (data){//if successfully get data, setSmoothies will display data
          setSmoothies(data)
          setFetchError(null) //error will not execute = null
        }
    }

    fetchSmoothies() //to callback the function, write this

   }, [])
   
  return (
    <div className="page home">
      {/* if there's error, mesej from line19 will be shown in below code */}
      {fetchError && <p>{fetchError}</p>}
      {/* if data available, smooties will show all data */}
      {smoothies && (
        <div className="smoothies">
          {/* order by button */}
          <div className="smoothie-grid">
            {smoothies.map((smoothie) => (
              <SmoothieCard key={smoothie.id} smoothie={smoothie} /> //state the key props so thee's no error shown. Use id coz it is the unique props
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Home