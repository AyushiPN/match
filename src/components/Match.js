import React from 'react'
import { useState } from 'react'
import Friendly from "./Friendly"
import Tournament from './Tournament';

function Match() {

     const [matches, setMatches] = useState();
     if(matches==="friendly"){
        return <Friendly></Friendly>
     }
     else
     if(matches==="tournament"){
        return <Tournament></Tournament>
     }
    
  return (
    <div>
        <form>
        <label for="match">Choose Match Type:</label>

        <select id="match" value={matches} onChange={(e)=> setMatches(e.target.value)} defaultValue="Select Match">
        <option value="friendly" name="friendly">Friendly</option>
        <option value="tournament" name="tournament">Tournament</option> 

        </select>

       </form>       
    </div>
  )
}

export default Match