import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import { useState } from 'react';
import { useLocation ,Link} from 'react-router-dom';

function EditPost() {
  
  
  const [allPost, setAllPost] = useState(JSON.parse(localStorage.getItem('posts')) || []);
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  let locations = useLocation();

  

  useEffect(()=>{
     setImage(locations?.state?.image) 
     setTitle(locations?.state?.title) 
     setDescription(locations?.state?.description) 
  },[locations?.state])

  const editPost = (e) => {
    e.preventDefault();

    let update =allPost.map((val)=>{
      if(val.id== locations?.state?.id){
        val.image =image
        val.title =title
        val.description =description
      }
      return val;
    })
  
    localStorage.setItem('posts', JSON.stringify(update))
    setAllPost(update);
    setImage("")
    setTitle("")
    setDescription("")

  }


  return (
    <>

      <Navbar />
      <div className="container p-5 mt-5 rounded-5 bg-dark text-light">
        <form className="row g-3">
          <h1 align="center" className="mt-2 fw-bold fs-1">
            Add-Post
          </h1>
          <div className="col-12">
            <label className="form-label">
              Image
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="Enter A Image URL" onChange={(e) => setImage(e.target.value)}
              value={image}
            />
          </div>

          <div className="col-12">
            <label className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="inputEmail4"
              placeholder="Enter a Title" onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </div>

          <div className="col-12">
            <label className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="inputCity"
              placeholder="Enter product Description " onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          </div>

          <div className="col-12 d-flex justify-content-center">

            {image == "" || image[0] == " " ||
              title == "" || title[0] == " " ||
              description == "" || description[0] == " " ? (
              <button disabled type="submit" className="btn btn-primary mt-4" onClick={(e) =>editPost(e)}>
                <Link to={`/Home`}className="text-light fs-3 text-decoration-none">Edit Post</Link>
              </button>
              ) : (
              <button type="submit" className="btn btn-primary mt-4" onClick={(e) => editPost(e)}>
                <Link to={`/Home`}className="text-light fs-3 text-decoration-none">Add Post</Link>
              </button>

            )}

          </div>
        </form>
      </div>

    </>
  )
}

export default EditPost
