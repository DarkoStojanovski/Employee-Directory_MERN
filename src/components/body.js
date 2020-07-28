import React, { useEffect, useState } from 'react';
import "../styles/body.css";
import Table from './table';
import axios from 'axios';


const proxyurl = "https://cors-anywhere.herokuapp.com/";

const Body = () => {
    const [employees, setEmployees] = useState ([])
    const [filterEmployees, setFilterEmployees] = useState ([])

    const testEmployees = [ {
        name: {
            first: 'darko',
        },
        email: 'darko@gmail.com',
        picture: {
            thumbnail: ''
        }
    },
    {
        name: {
            first: 'lighto',
        },
        email: 'lighto@gmail.com',
        picture: {
            thumbnail: ''
        }
    }
]

    useEffect(() => {
        axios('https://randomuser.me/api/?results=50')
        // .then(res => res.json())
        .then((res) => {

         console.log(res);
         setEmployees(res.data.results);   
         //setEmployees(testEmployees);   
         setFilterEmployees(res.data.results);
         //setFilterEmployees(testEmployees);
        })

        //setEmployees(testEmployees);   
         //setFilterEmployees(testEmployees);

    },[])

    const handleChange = (event) => {
        console.log(event.target.value);
            if (event.target.value ===''){
                 setFilterEmployees(employees);
                 return
             }
        const selctedEmployees = filterEmployees.filter((employee) => {
            return (employee.name.first.toLowerCase().includes(event.target.value.toLowerCase()))

        })
        setFilterEmployees(selctedEmployees);
    }

    return(
    <div>
        <input  onChange= {handleChange}/>
        <Table employees = {filterEmployees}/> 


    </div>
    )
    


}

export default Body;