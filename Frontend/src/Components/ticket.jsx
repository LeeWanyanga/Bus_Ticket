import {useEffect, useState } from "react";
import axios from 'axios';


function Ticket()
{

const mysql = require('mysql');

const connection =
mysql.createConnection({
    host: 'localhost' ,
    user: 'root' ,
    password: '',
    database: 'busticket'
});

connection.connect((err) => {
    if (err) throw err;
    console.log ('Connected!');
    connection.query('SELECT* FROM your_table', (err, results) =>{
        if (err) throw err;
        console.log(results);
    });
});

  const [id, setId] = useState('');
  const [name, setName] = useState("");
  const [destination, setDestination] = useState("");
  const [age, setAge] = useState("");
  const [passengers, setUsers] = useState([]);

useEffect(() => {
  (async () => await Load())();
  }, []);
  
  
  async function  Load()
  {
     const result = await axios.get(
        "http://127.0.0.1:8000/Ticket");
        setUsers(result.data);
        console.log(result.data);
  }

  async function  save(event)
  {
     event.preventDefault();
     try
     {
        await axios.post("http://127.0.0.1:8000/Ticket",
        {
            name:name,
            destination:destination,
            age:age

        });
     
        alert("Ticket Purchase Successful");
        setId("");
        setName("");
        setDestination("");
        setAge("");
        Load();

    }

    catch(err)
    {
        alert("Ticket Purchase Failed");
    }
}

async function editTicket(tickets){
    setName(tickets.name);
    setDestination(tickets.destination);
    setAge(tickets.age);
    setId(tickets.id);

}

async function DeleteTicket(id)
{
    await axios.delete("http://127.0.0.1:8000/Ticket/"+id);
    alert("Ticket Delete Successful");
        setId("");
        setName("");
        setDestination("");
        setAge("");
        Load();
}

async function update(event)
{
    event.preventDefault();
    try{
        await axios.put("http://127.0.0.1:8000/Ticket/"+students.find(u=> u.id === id).id||id,
        {
            id:id,
            name:name,
            destination:destination,
            age:age

        });

        alert("Ticket Update Successful");
        setId("");
        setName("");
        setDestination("");
        setAge("");
        Load();

    }

    catch(err)
    {
        alert("Ticket Update Failed");
    }
    }
    return(
        <div class="container">
       <h1>Student Details</h1>
       <div class="container mt-4" >
        <form>
            <div class="form-group">

                <label>Full Name</label>
                <input type="text" class="form-control" id="name" value={name} onChange={(event)=>
                    {
                        setName(event.target.value);
                    }}
                    />
            </div>

            <div class="form-group">

                <label>Destination</label>
                <input type="text" class="form-control" id="destination" value={destination} onChange={(event)=>
                    {
                        setName(event.target.value);
                    }}
                    />
                </div>

             <div class="form-group">

                <label>Age</label>
                <input type="text" class="form-control" id="age" value={age} onChange={(event)=>
                    {
                        setName(event.target.value);
                    }}
                    />
                </div>
                <div>
                    <button class="btn btn-primary mt4" onClick={save}>Purchase</button>
                    <button class="btn btn-primary mt4" onClick={update}>Update</button>
                </div>


        </form>

       </div>

       <table class="table table-dark" align="center">
        <thead>
            <tr>
                <th scope="col">Ticket Id</th>
                <th scope="col">Passenger Name</th>
                <th scope="col">Destination</th>
                <th scope="col">Age</th>

                <th scope="col">Option</th>
            </tr>
        </thead>
        {tickets.map(function fn(student)
        {
            return(
                <tbody>
                    <tr>
                        <th scope="row">{tickets.id}</th>
                        <td>{tickets.name}</td>
                        <td>{tickets.destination}</td>
                        <td>{tickets.age}</td>
                        <td>
                            <button type="button" class="btn btn-warning" onClick={()=> editTicket(tickets)}>Edit</button>
                            <button type="button" class="btn btn-danger" onClick={()=> DeleteTicket(ticket.id)}>Delete</button>

                        </td>
                    </tr>
                </tbody>
            );
        })}

        
       </table>
        </div>
    );
}

export default Ticket;