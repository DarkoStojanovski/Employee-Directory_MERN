import React from "react";
import "../styles/table.css";

const Table = (props) => {

return (
    <div>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
  
    {props.employees && props.employees.map((e) => {
      console.log(e);
      return (
        <tr>
          <th scope="row"><img src= {e.picture.thumbnail}/></th>
          <td> {e.name.first}</td>
          <td> {e.email}</td>
        </tr>



      )
    })}
  </tbody>
</table>
 
    </div>

)

}

export default Table;