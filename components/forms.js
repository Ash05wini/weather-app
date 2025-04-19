import React from 'react';
import './forms.css';
 function Forms() {
  return (
    <div>
      <h3 id="header">Know your Weather</h3>
      <form className="form1">
      <label >Enter City Name: </label>
      <input type="text" id="city" />
      <button id="search-btn" >Search</button>
      </form>
    </div>

  )
  }
export default Forms;
