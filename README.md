# human.resources ![License](https://img.shields.io/static/v1?label=License&message=MIT&color=blueviolet&style=plastic)

A Web based Employee directory list.

## Table of Contents

* [Summary](#summary)
* [User Story](#user-story)
* [Dependencies](#Dependencies)
* [Installation](#Installation)
* [Functionality](#Functionality)
* [Creator](#creator)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [License](#license)

______________________________________________________________________________

## Summary

This web application is...

* [Live Site](https://gcvarela21.github.io/human.resources/)
* [Project Repository](https://github.com/gcvarela21/human.resources)

![GIF Visual of The Deployed Web Application]()

______________________________________________________________________________

## User-Story

______________________________________________________________________________

## Dependencies

**Built With**

* [HTML 5](https://www.w3schools.com/html/)
* [CSS](https://www.w3schools.com/css/css_howto.asp)
* [GitHub](https://github.com/)
* [JavaScript](https://www.w3schools.com/js/default.asp)
* [BootStrap](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
* [Git](https://git-scm.com/downloads)
* [Node](https://nodejs.org/en/)
* [react](https://reactjs.org/docs/getting-started.html)
* [axios](https://www.npmjs.com/package/axios)

______________________________________________________________________________
  
## Installation

For local installation [Node.js](https://nodejs.org/en/) needs to be installed.

Please clone or download the project folder.

Open your prefered terminal or comand_promt program and navigate into the project folder, and then the slapapp folder. From the root of that folder run the following commands:

```javascript
npm install
```

and then run the application with the next command:

```javascript
npm start
```

The application should launch a web-browser with the running app. The application will be visible in your web browser of choice at:

```javascript
localhost:3000
```

______________________________________________________________________________
  
## Funtionality

This Apllication in its development uses Node Js and React to render the single web page. Using various componets and passing variables through props we build the functionallity the directory by using an [API](https://randomuser.me/) to fill our directory.

The images objects are stored in an array of objects and imported for use in within the componets. Components are exported to the App.js file, and then exported to the index.js where the index.html renders page.

Using the [npm axios package](https://www.npmjs.com/package/axios) we can make get requests from the api to fill our directory with staff, names, email, phone number, DOB, and an image.

Below you can see the get request being made and how it is exported. A return defines the information we want to pull and use from api obects. The original api data set of each employee id pretty extensive.

```javascript
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
```

The farthest point our API call informain is passed along to is in our Mesa (Table), where we pull the data response into a row. The information is passed on to this set up with the use of props.

```javascript
import React from "react";
import "./Mesa.css"
const Mesa = (props) => (
    <tbody>
      <tr>
        <td><img src={props.image}></img></td>
        <td>{props.fullname}</td>
        <td>{props.phone}</td>
        <td>{props.email}</td>
        <td>{props.dob}</td>
      </tr>
    </tbody>
);

export default Mesa;
```

The Directory is our main body content. This is where our useEffect and setState/useState is established to hold and update the information pulled in by the Api call. The return contains the table header and table generated by passing the array of objects into the Maps() to interate throught the information, that is passed off to Mesa (the table) that will build a row for every employee.

```javascript
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
```

______________________________________________________________________________

## Creator

**& Gloria C Varela**

* [GitHub Profile Page](https://github.com/gcvarela21)
* [Web Developer Portfoio Website](https://gcvarela21.github.io/glo.digital/)
* [Interactive Design Portfolio Website](https://www.glo.digital/)
* [LinkenIn](https://www.linkedin.com/in/glovarela/)

______________________________________________________________________________

### Contributing

```javascript
// There are no contributions at this time
```

______________________________________________________________________________

### Tests

```javascript
// There is no test at this time
```

______________________________________________________________________________

### Questions

If you have any questions contact: Any of the [Creators](#creators)

______________________________________________________________________________

### License

This project is licensed under: ![License](https://img.shields.io/static/v1?label=License&message=MIT&color=blueviolet&style=plastic)
