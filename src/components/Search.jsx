import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { CiSearch } from "react-icons/ci";
import './Search.css'
import { getUsers } from '../redux/actions/userList';

const Search = () => {
    const users = useSelector((state)=> state.userListReducer.users)
    console.log(users)
    const [searchInput, setSearchInput] = useState("");

    const dispatch = useDispatch();
   
    useEffect(()=>{
        dispatch(getUsers())
   } ,[]
    )
 
    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
      };
      
      if (searchInput.length > 0) {
          users.filter((user) => {
          return user.name.match(searchInput);
      });
      }
      
  return (
    <div>
        <form>
            <div className='search-wrapper'>
            
            <div className='form-group'>
            <input
            type='text'
            placeholder='Search'
            className='form-control'
            onChange={handleChange}
            value={searchInput}

            />
            <table>
            <tr>
                <th>Name</th>
            </tr>
            </table>

            {users.map((user) => {
                <div>
                <tr key={user._id}>
                  <td>{user.name}</td>
                </tr>
              </div>
            })}
            
            {/* <button className='search-btn'><CiSearch /></button> */}
            </div>
            </div>
        </form>
        
    </div>
  )
}

export default Search