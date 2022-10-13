import { Box } from '@mui/material';
import React from 'react'

import { useState } from 'react';
import { Post } from './Post';

const Feed = () => {
  const [post,setPost]=useState([1,2,3]);
  return (
    <Box flex={4} p={2}>
      {post.map(e=><Post/>)}
    </Box>
  )
}
export default Feed;