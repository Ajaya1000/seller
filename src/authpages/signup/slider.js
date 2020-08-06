import React, { useState } from 'react';
import { FormControl, InputLabel, FormHelperText, Input } from '@material-ui/core';

export default function Slider() {
  const [name,setName] = useState('hello');
  return (
    <>
    <div className="container">
      <div className='form-container'>
        <form>
          <div className="form-group">
              <div className='form-group-header'>
                  <h1>Business Information</h1>
              </div>
              <div className='form-group-body'>
                  <div className='input-group'>
                      <label htmlFor='name'>Full Name</label>
                      <input  value={name} onChange={(value)=>setName(value)} />
                  </div>
              </div>
          </div>
          <div className="form-group">
              <div className='form-group-header'>
                  <h1>Personal Information</h1>
              </div>
              <div className='form-group-body'>

              </div>
          </div>
          <div className="form-group">
              <div className='form-group-header'>
                  <h1>Professional Information</h1>
              </div>
              <div className='form-group-body'>

              </div>
          </div>
        </form>
      </div>
    </div>
    </>
  );
}
