import {Routes, Route} from 'react-router-dom';
import AppNav from './components/AppNav';
import Home from './pages/Home';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAuthUser } from './redux/actions/user';
import PrivateRoutes from './components/PrivateRoutes';
import Notifications from './pages/Notifications';
import Users from './pages/Users';
import AddPost from './pages/AddPost';
// import Posts from './pages/Posts';
import UserScreen from './pages/UserScreen';
import Explore from './pages/Explore';
import Bookmarks from './pages/Bookmarks';
import Friends from './pages/Friends';
import Chat from './pages/Chat';
import Leaderboard from './pages/Leaderboard';
import Profile from './pages/Profile';
import Sidebar from './components/Sidebar';
import Search from './components/Search';
import Feed from './pages/Feed';
import './App.css'

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    if(localStorage.getItem('token')){
    dispatch(getAuthUser())
    }
  },[])
  return (
    <div className="App">
      <AppNav/>
      {/* <Sidebar/> */}
      {/* <Search/> */}
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/users' element={<Users/>}/>
      <Route path='/user/:id' element={<UserScreen />} />
      {/* <Route path='/posts' element={<Posts/>}/> */}
      <Route path='/feed' element={<PrivateRoutes><Feed/> </PrivateRoutes>}/>
      <Route path='/explore' element={<PrivateRoutes><Explore/> </PrivateRoutes>}/>
      <Route path='/bookmarks' element={<PrivateRoutes><Bookmarks/> </PrivateRoutes>}/>
      <Route path='/notifications' element={<PrivateRoutes><Notifications/> </PrivateRoutes>}/>
      <Route path='/friends' element={<PrivateRoutes><Friends/> </PrivateRoutes>}/>
      <Route path='/chat' element={<PrivateRoutes><Chat/> </PrivateRoutes>}/>
      <Route path='/leaderboard' element={<PrivateRoutes><Leaderboard/> </PrivateRoutes>}/>
      <Route path='/profile' element={<PrivateRoutes><Profile/> </PrivateRoutes>}/>
      <Route path='/addpost' element={<PrivateRoutes><AddPost/> </PrivateRoutes>}/>
    </Routes>
    
    </div>
  );
}

export default App;
