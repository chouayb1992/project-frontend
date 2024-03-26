import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector} from 'react-redux';
import { deleteUser} from '../redux/actions/userList';
import { followUser } from '../redux/actions/follow';
import { getUser } from '../redux/actions/userList';
import { Link } from 'react-router-dom';
import './UserCard.css'
import { useState } from 'react';

function UserCard({user}) {
    const dispatch = useDispatch();
    // const authUser = useSelector((state)=> state.authReducer.user)
    // const {_id} = authUser

    const [btnText, setBtnText] = useState("Follow");

    const deleteOneUser = () =>{
        dispatch(deleteUser(user._id))
    }

    const followOneUser = () =>{
      dispatch(followUser(user._id))
  }

  const toggleText = () => {
    setBtnText((state) => (state === "Follow" ? "Followed" : "Follow"));
};

  return (
    <Card style={{ width: '80rem', margin: '1rem'}}>
       <Card.Body className='user'>
      <Card.Img variant="top" className="user-pic" src={`/../uploads/${user.image}`} alt={user.name} />
        <Link className='userName' to={`/user/${user._id}`}><Card.Title>{user.name} {user.lastName}</Card.Title></Link>
        {/* <Card.Title> </Card.Title> */}
        <div className='grp'>
        <button className='btn' onClick={event => {followOneUser(); toggleText()}} >{btnText}</button>
        
        {/* <Link className='btn-view' to={`/user/${user._id}`}><button>View profile</button></Link> */}
        </div>
      </Card.Body>
    </Card>
  );
}

export default UserCard;

