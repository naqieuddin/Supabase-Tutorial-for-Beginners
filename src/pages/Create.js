import { useState } from "react"
import supabase from "../config/supabaseClient"

const Create = () => {

  const [title, setTitle] = useState('')
  const [method, setMethod] = useState('')
  const [rating, setRating] = useState('')
  const [formError, setFormError] = useState(null)

  const handleSubmit = async (e) => { // use e to submit a form
    e.preventDefault() //prevent the page to reloading 

    if(!title || !method|| !rating){ //if user don't fill in the input 
      setFormError('Please fill in all the fields') //this message will appear
      return //when this return, all code below wil not executed
    }

    const {data,error} = await supabase //fetch data from supabase
      .from('smoothies')
      .insert([{title, method,rating}]) // key in data as object in an array
      .select() //to get back the data of row

    if (error){
      console.log(error);
      setFormError('Please fill in all the fields') //this message will appear

    }
    if (data){
      console.log(data);
      setFormError(null) //this message will appear

    }



  }


  return (
    <div className="page create">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="method">Method:</label>
        <input
          type="text"
          id="method"
          value={method}
          onChange={(e) => setMethod(e.target.value)}
        />

        <label htmlFor="rating">Rating:</label>
        <input
          type="number"
          id="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />

        <button>Create Smoothie Recipe</button>

        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  );
}

export default Create