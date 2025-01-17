import React, { useState } from 'react'
import { imageUpload } from '../../utils/imageUpload';
import axios from 'axios';
import "./AddCourse.css"
import Header from '../Header/Header';

const AddCourse = () => {
  const [name,setName] = useState();
  const [description,setDescription] = useState();
  const [image,setImage] = useState();
  const [level,setLevel] = useState("easy");
 

  const handleMedia = (e) => {
    e.preventDefault();
    setImage(e.target.files[0]);
  };


  const pushData = async (e) => {
    e.preventDefault();
    
    try{
    const img = await imageUpload(image);

    const courseDetails = {
      name: name,
      description:description,
      level:level,
      image: img.url
    };

    const c = await axios.post(`${url}/create-course`,courseDetails);
    alert(c.data.msg);
    }catch(err){
      console.log(err,"err")
      alert("Something went wrong");
    }
    };

  return (
    <div>
        <Header />

        <form onSubmit={(e)=>{pushData(e)}}>
          <ul className="form-style-1">
              <li>
                <label>Full Name <span className="required">*</span></label>
                <input type="text" name="field1" className="field-divided" placeholder="Name" 
                onChange={(e) => setName(e.target.value)}/>
              </li>
              <li>
                  <label>Level</label>
                  <select  className="field-select"
                    id="level"
                    onChange={(e) => setLevel(e.target.value)}
                    >
                    <option value="easy">Easy</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="hard">Hard</option>
                  </select>
              </li>
              <li>
                  <label>Desciption <span className="required">*</span></label>
                  <textarea name="field5" id="field5" className="field-long field-textarea" 
                  onChange={(e) => setDescription(e.target.value)}></textarea>
              </li>

              <li>
              <input
                    type="file"
                    name="file"
                    id="file"
                    onChange={handleMedia}
                    accept="image/*,video/*"
                  />
              </li>
              <li>
                  <input type="submit" value="Add" />
              </li>
          </ul>
        </form>

    </div>
  )
}

export default AddCourse;