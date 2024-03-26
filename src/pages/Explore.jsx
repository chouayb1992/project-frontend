import React, { useEffect } from 'react'
import TopPostList from './TopPostList'
import { useDispatch} from "react-redux";
import { getTopPosts } from '../redux/actions/post';
const Explore = () => {

  const dispatch = useDispatch();
   
    useEffect(()=>{
        dispatch(getTopPosts())
   } ,[]
    )

  return (
    <div>
      <TopPostList/>
    </div>
  )
}

export default Explore
