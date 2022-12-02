import './allPatients.scss'
import { useState, useEffect } from 'react';

import { Table, TableHead, TableCell, TableRow, TableBody, Button, styled } from '@mui/material'
import { getPatients, deletePatient } from '../Service/patientapi';
// import { Link } from 'react-router-dom';
import axios from 'axios';

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PatientList from './PaymentList';
import PaymentPagination from './PaymentPagination';
import AddIcon from '@mui/icons-material/Add';
import PaymentList from './PaymentList';



// const StyledTable = styled(Table)`
//     width: 90%;
//     margin: 50px 0 0 50px;
// `;

// const THead = styled(TableRow)`
//     & > th {
//         font-size: 20px;
//         background: #000000;
//         color: #FFFFFF;
//     }
// `;

// const TRow = styled(TableRow)`
//     & > td{
//         font-size: 18px
//     }
// `;


const ViewAllPayments = () => {
    const [users, setUsers] = useState([]);
    const [searchApi, setSearchApi] = useState([]);
    const [query, setQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(2);
    console.log('local id', localStorage.getItem('patientid'));

    const currentid=localStorage.getItem('patientid');
    useEffect(()=>{
        const fetchData=async()=>{
            const response = await axios.get(
                "http://localhost:3010/appointment/unpaidappointments/"+currentid
            );
            console.log(response.data);
            setUsers(response.data);
            setSearchApi(response.data);
            // fetch("http://localhost:3010/appointment/unpaidappointments/"+currentid)
            // .then(response=>response.json())
            // .then(json=>{
            //     console.log(json);
            //     setUsers(json);
            //     setSearchApi(json);
            // })
        }
        fetchData()
    },[])
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = users.slice(firstPostIndex, lastPostIndex);
    const handleFilter=(e)=>{
        if(e.target.value==''){
            setUsers(searchApi)
        }
        else{
            const filterData=searchApi.filter(item=>item.name.toLowerCase().includes(e.target.value.toLowerCase()));
            setUsers(filterData);
        }
        setQuery(e.target.value)
    }
    // useEffect(() => {
    //     const fetchData = async () => {
    //       const res = await axios.get(`http://localhost:5000/customsearch?q=${query}`);
    //       setUsers(res.data);
    //     };
    //     if (query.length === 0 || query.length > 2) fetchData();
    //   }, [query]);
    // const base_url = "http://localhost:3010/doctor/search";
    // const getsearch = async () => {
    //     try {
    //         const url = `${base_url}`;
    //         const data  = await axios.get(url);
    //         console.log("Data",data);
            
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };
    useEffect(() => {
        getAllUsers();
    }, []);

    const deleteUserData = async (id) => {
        await deletePatient(id);
        getAllUsers();
    }

    const getAllUsers = async () => {
        const response = await axios.get(
            "http://localhost:3010/appointment/unpaidappointments/"+currentid
        );
        console.log(response.data)
        setUsers(response.data);
    }

    

    return (
        <>
            
            <PaymentList users={currentPosts} updateUsers={setUsers} />
            <PaymentPagination
                totalPosts={users.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
            {/* <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Experience</TableCell>
                    <TableCell>Operations</TableCell>
                </THead>
            </TableHead>
            <TableBody>
                {users.map((user) => (
                    <TRow key={user._id}>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.experience}</TableCell>
                        <TableCell>
                            <Button variant="contained" style={{marginRight:10,backgroundColor:'#6439ff'}} component={Link} to={`/editdoctor/${user._id}`}>Edit</Button>
                            <Button color="secondary" variant="contained" onClick={() => deleteUserData(user._id)}>Delete</Button> 
                        </TableCell>
                    </TRow>
                ))}
            </TableBody>
        </StyledTable> */}
        </>
        
    )
}

export default ViewAllPayments;