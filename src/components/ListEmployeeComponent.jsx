import React, {useState, useEffect} from "react";
import { listEmployees } from "../services/EmployeeServices";

const ListEmployeeComponent = ()=>{

    // for dummy data 
    // const dummyData = [
    //     {
    //         "id":1,
    //         "firstName":"Amit",
    //         "lastName": "Sharma",
    //         "email":"amitsharma123@gmail.com"
    //     },
    //     {
    //         "id":3,
    //         "firstName":"Umesh",
    //         "lastName": "Thakur",
    //         "email":"umeshthalur212@gmail.com"
    //     },
        
    //     {
    //         "id":3,
    //         "firstName":"Ramesh",
    //         "lastName": "Jalodia",
    //         "email":"rameshjalodia321@gmail.com"
    //     }
    // ]

    const [employees, setEmployees] = useState([])
        useEffect(()=>{
            listEmployees().then((response) =>{
                setEmployees(response.data);
                console.log(response.data)
            }).catch(error =>{
                console.error(error);
            })
        })


    return(
        <div className="container">
            <h2 className ="text-center">List of Employees</h2>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Employee id</th>
                        <th>Employee First name</th>
                        <th>Employee Last name</th>
                        <th>Employee Email Id</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map(employee=>
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.emailId}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListEmployeeComponent