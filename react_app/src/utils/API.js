import axios from "axios";

// Export an object containing methods we'll use 
//for accessing the random user API 
//to generate an employee list.
export default {
    getStaff: function() {
      return new Promise((resolve, reject) => {
        axios.get("https://randomuser.me/api/?results=30").then((res) => {
          const staff = res.data.results;
          const results = staff.map((employee) => {
            return {
              firstname: employee.name.first,
              lastname: employee.name.last,
              fullname: employee.name.first + " " + employee.name.last,
              email: employee.email,
              image: employee.picture.large,
              phone: employee.cell,
              dob: employee.dob.date
            };
          });
          console.log(results);
          resolve(results);
        }).catch((err) => reject(err));
      });
    },
    getStaffList: function() {
      return new Promise((resolve) => {
        resolve();
      });
    }
  };
