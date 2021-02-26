import React, { useState, useEffect } from "react";
import API from "../utils/API";
// import SearchForm from "../components/SearchForm";
import Mesa from "../components/Mesa";


function Directory() {

const [staff, setStaff] = useState([]);

  useEffect(() => {
    loadStaff();
  }, []);

  function loadStaff() {
    API.getStaffList()
      .then(() => {
        API.getStaff().then((staff) => {
          setStaff(staff);
        });
      })
      .catch(err => console.log(err));
  }
  return (
    
    // console.log("render")
    <div>
     

        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Picture</th>
              <th scope="col">Name</th>
              <th scope="col">Phone</th>
              <th scope="col">Email</th>
              <th scope="col">DOB</th>
            </tr>
          </thead>
          {staff.map(employee => {
            return <Mesa
              fullname={employee.fullname}
              email={employee.email}
              image={employee.image}
              phone={employee.phone}
              dob={employee.dob}
            />
          })}
        </table>
    </div>



  );
}

export default Directory;
