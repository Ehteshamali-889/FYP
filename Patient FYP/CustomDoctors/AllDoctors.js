import React, { useEffect, useState } from "react";
import axios from "axios";

import { View,StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import Button from '@mui/material/Button';



import './Search.scss'

// import CryptoList from "./components/CryptoList";
import CryptoList from "../custom/CryptoList";
import Pagination from "../custom/Pagination";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useNavigation } from '@react-navigation/native';
import DoctorList from "./DoctorList";
const AllDoctors = () => {
    const navigation = useNavigation();
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(2);

    const [searchApi, setSearchApi] = useState([]);
    const [query, setQuery] = useState("");
    console.log('local id', localStorage.getItem('patientid'));

    const currentid=localStorage.getItem('patientid');
    useEffect(() => {
        
        getdata();

        return () => {
            console.log("This will be logged on unmount");
        }
    }, []);
    const getdata=async()=>{
        const response = await axios.get(
            "http://localhost:3010/doctor/alldoctor/"
        );

        setUsers(response.data);
        setSearchApi(response.data);
    }
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = users.slice(firstPostIndex, lastPostIndex);

    const handleFilter=(e)=>{
        if(e.target.value==''){
            setUsers(searchApi)
        }
        else{
            const filterData=searchApi.filter(item=>item.namedoctor.toLowerCase().includes(e.target.value.toLowerCase()));
            setUsers(filterData);
        }
        setQuery(e.target.value)
    }

    return (
        <View className='app'>
        {users.length!==0 &&
                    <View style={styles.search}>

        {/* <Button mode="contained" onPress={() => console.log("Pressed")} >
        Go Back
        </Button> */}
            
            
            <TextInput
                style={styles.input}
                onChange={(e) => handleFilter(e)}
                value={query}
                placeholder="Search..."
                right={<TextInput.Icon icon="card-search" />}
                mode='outlined'
            />
        </View>
        }
                
                
            <DoctorList users={currentPosts} updateUsers={setUsers} />
            <View
            style={{marginTop:50}} 
            ></View>
            <Pagination
                totalPosts={users.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
            {/* <View style={{width:'20%',justifyContent:'center',alignItems:'center'}}>
            <Button variant="contained" onClick={() => navigation.navigate('Nav')}>GO BACK</Button>
            </View>  */}
            
        </View>
    );
};


const styles = StyleSheet.create({

    search: {
        display: "flex",
        alignItems: "center",
        padding: "3px",
        margin:20
    },
    myinput:{
        border: 'none',
        outline: 'none',
        background: 'transparent'
    },
    input: {
        // height: 40,
        // margin: 12,
        // borderWidth: 1,
        // padding: 10,
        display:'flex',justifyContent:'center',alignItems:'center'
      },
  });

export default AllDoctors;
