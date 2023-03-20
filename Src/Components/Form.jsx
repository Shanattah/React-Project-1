import React from 'react'
import MovieApi from './MovieApi'

const Form = () => {
    const [movie, setMovie] = React.useState({
        title: '',
        year: '',
        imdbid: '',
        type: ''
    })
  return (
    <div>
     <input placeholder='Input title you want to search for' onChange={event => setMovie(event.target.value)}/>
     {
        MovieApi.map((title, index) => {
            <div key={index}>{title.title}</div>})
     }
    </div>
  )
}

export default Form
