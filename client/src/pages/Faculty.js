import Header from '../components/Navbar/Navbar';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Form from '../components/Form/Form';


const columns = [
    { field: 'id', headerName: 'ID', width: 70},
]
const Home = () => {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();
    console.log(setCurrentId);
   /* useEffect(() => {
      dispatch(getPosts());
    }, [currentId, dispatch]);*/
  
    return (
        <div>
            <Header />
            <div>
               <Form/>

            </div>
        </div>
    );
};
  
  export default Home;