import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid } from '@mui/material';
import { useDispatch } from 'react-redux';

import { getPosts } from '../../actions/actionsPosts';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';

const Home = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Grow in>
      <Container>
        <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
          <Grid item xs={12} sm={7}>
            <Table> 
              
            </Table>
        
           
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
  //<Form currentId={currentId} setCurrentId={setCurrentId} />
//<Posts setCurrentId={setCurrentId} />