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
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
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
      <header>
        <h1>Crea un nuovo post</h1>
      </header>
      <main>
        <div className='container'>
          <div className="row">
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type='text'
                  name='author'
                  id='author'
                  placeholder='Author'
                  className='form-control'
                  value={formData.author}
                  onChange={handleChange} />
              </div>
              <div>
                <input
                  type='text'
                  name='title'
                  id='title'
                  placeholder='title'
                  className='form-control'
                  value={formData.title}
                  onChange={handleChange} />
              </div>
              <div>
                <textarea
                  name='body'
                  id='body'
                  placeholder='body'
                  className='form-control'
                  value={formData.body}
                  onChange={handleChange} />
              </div>
              <div>
                <input
                  type='checkbox'
                  name='public'
                  id='public'
                  placeholder='Public'
                  className='form-check-input'
                  checked={formData.public}
                  onChange={handleChange} />
                <label htmlFor="">Pubblica</label>
              </div>
              <div>
                <button type='submit'>Invia</button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
