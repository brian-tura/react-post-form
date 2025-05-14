import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {

  const [formData, setFormData] = useState({
    author: "",
    title: "",
    body: "",
    public: false
  })

  const handleChange = (e) => {
    const {name, value, type, checked} = e.target;
    setFormData({
      ...formData,
      [name]: type ==='checkbox'
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts", formData).then((res) => {
      console.log(res.data);
      setFormData({
        author: "",
        title: "",
        body: "",
        public: false
      })
    })
  }


  return (
    <>

    </>
  )
}

export default App
