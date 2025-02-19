import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'
import './Home.css'

function Home() {

  const [printPost, setPrintPost] = useState(JSON.parse(localStorage.getItem('posts')) || [])

  let nav =useNavigate()

  
  

  const deletePost = (id) => {
    let del = printPost.filter((val)=>{
      return(
        val.id !=id
      )
    })

    localStorage.setItem('posts',JSON.stringify(del));
setPrintPost(del)
  }


  return (
    <>
      <Navbar />

      <h1 align="center" className='fw-bold mt-4'> All Post</h1>
      <div className="container" id='table'>
        <table className="table table-dark table-striped mt-3" >
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Image</th>
              <th scope="col">Action</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              printPost.map((val) => {
                return (

                  <tr>
                    <th>{val.id}</th>
                    <td>{val.title}</td>
                    <td> {val.description} </td>
                    <td><img src={val.image} alt="Product Image" width={"50px"} height={"50px"} className='rounded-5' /></td>
                    <td><button className='btn btn-light px-4' onClick={()=> nav(`/EditPost`,{state:val})}>Edit</button></td>
                    <td><button className='btn btn-light px-4' onClick={() => deletePost(val.id)}>x</button></td>
                  </tr>
                )
              })
            }

          </tbody>
        </table>
      </div>
    </>
  )
}

export default Home
