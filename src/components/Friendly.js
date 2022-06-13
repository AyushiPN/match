import React from 'react'

function Friendly() {
  return (
    <div>
        <form>
            <input type="datetime-local" id="start" name="start">Start Date And Time</input>
            <input type='text' id='location' name='loc'>Match Location</input>
            <input type="datetime-local" id="end" name="end">End Date and Time</input>
            <textarea rows="5" cols="60" name="text" placeholder="Comments">Comments</textarea>
        </form>
    </div>
  )
}

export default Friendly