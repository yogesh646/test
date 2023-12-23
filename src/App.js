import logo from './logo.svg';
import React, { useState,useEffect } from 'react'
import './App.css';


function App() {
const [file,setFile]=useState();
const [list,setList]=useState([]);
const folder=new FileReader();

const clicked=(e)=>{
setFile(e.target.files[0])
}

const filinglist=string=>{
  //headline
  const line=string.slice(0,string.indexOf("\n")).split(",");
  //row
  const lined=string.slice(string.indexOf("\n")+1).split("\n");
const list=lined.map(i=>{
  const values=i.split(",");
  const obj=line.reduce((a,b,index)=>{
    a[b]=values[index];
    return a;
  },{});
  return obj;
});
setList(list);

};
const Uploadbutton =(e)=>{
  e.preventDefault();
  console.log("clicked");
  if(file){
    folder.onload = function(event){
      const csv=event.target.result;
      filinglist(csv);
    };
    folder.readAsText(file);
  }
  alert('success')
};
const move=Object.keys(Object.assign({},...list));

  return (
    <main className="App">
  <h1>React CSV file Project</h1>
  <form>
    <input 
    type='file' 
    id={'csvFile'} 
    onChange={clicked} 
    accept={'.csv'}/>

    <button onClick={(e)=>Uploadbutton(e)}>CSV upload</button>

  </form>
  <br/>
  {/* <h>Table</h> */}
  <table className='cool'>
    <thead>
      
      <tr key={"keys"}>
        {/* <th>S.no</th> */}
        {move.map((key)=>(
          <th>
            {key}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {list.map((c,d)=>(
        <tr key={c.id}>
          {/* <td>{d+1}</td> */}
          {
            Object.values(c).map((d)=>(
         
              <td>{d}</td>
            ))
          }
        </tr>
      ))}
    </tbody>
  </table>
</main>
  );
}

export default App;
