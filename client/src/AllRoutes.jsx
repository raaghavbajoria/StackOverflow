import React from 'react'
import {Routes, Route} from 'react-router-dom'

import Home from './pages/Home/Home'
import Auth from './pages/Auth/Auth'
import Questions from './pages/Questions/Questions'
import AskQuestion from './pages/AskQuestion/AskQuestion'
import DisplayQuestion from './pages/Questions/DisplayQuestion'
import Tags from './pages/Tags/Tags'
import Users from './pages/Users/Users'
import UserProfile from './pages/UserProfile/UserProfile'

import Card from './Card';
import Cards from './Cards';
import PaymentSuccess from './PaymentSuccess';
import SocialMediaPage from './Components/SocialMediaPage';
import LinkForm from './Components/LinkForm';
import FriendButton from './Components/FriendButton';
import PostItem from './Components/PostItem';
import CreatePostForm from './Components/CreatePostForm';
import Socials from './pages/Socials'
import PageSucess from './PageSucess'

const AllRoutes = ({ slideIn, handleSlideIn }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home slideIn={slideIn} handleSlideIn={handleSlideIn} />}
      />
      <Route path="/Auth" element={<Auth />} />
      <Route path="/AskQuestion" element={<AskQuestion />} />
      <Route
        path="/Questions"
        element={<Questions slideIn={slideIn} handleSlideIn={handleSlideIn} />}
      />
      <Route
        path="/Questions/:id"
        element={
          <DisplayQuestion slideIn={slideIn} handleSlideIn={handleSlideIn} />
        }
      />
      <Route
        path="/Tags"
        element={<Tags slideIn={slideIn} handleSlideIn={handleSlideIn} />}
      />
      <Route
        path="/Users"
        element={<Users slideIn={slideIn} handleSlideIn={handleSlideIn} />}
      />
      <Route
        path="/Users/:id"
        element={
          <UserProfile slideIn={slideIn} handleSlideIn={handleSlideIn} />
        }
      />
      <Route 
      path="/Paymentsuccess" 
      element={<PaymentSuccess slideIn={slideIn} handleSlideIn={handleSlideIn}  />} 
      />
      <Route 
      path="/Card" 
      element={<Card slideIn={slideIn} handleSlideIn={handleSlideIn}  />}
      />
      <Route 
      path="/Cards" 
      element={<Cards slideIn={slideIn} handleSlideIn={handleSlideIn} />} />
      <Route 
      path="/SocialMediaPage" 
      element={<SocialMediaPage slideIn={slideIn} handleSlideIn={handleSlideIn} />} 
      />
        <Route 
        path="/LinkForm" 
        element={<LinkForm  slideIn={slideIn} handleSlideIn={handleSlideIn} />} 
        />
        <Route 
        path="/FriendButton" 
        element={<FriendButton slideIn={slideIn} handleSlideIn={handleSlideIn} />} 
        />
        <Route 
        path="/PostItem" 
        element={<PostItem  slideIn={slideIn} handleSlideIn={handleSlideIn}/>} 
        />
        <Route 
        path="/CreatePstForm" 
        element={<CreatePostForm slideIn={slideIn} handleSlideIn={handleSlideIn} />} 
        />
        <Route 
        path="/Socials" 
        element={<Socials slideIn={slideIn} handleSlideIn={handleSlideIn} />} 
        />
        <Route 
        path="/Pagesucess" 
        element={<PageSucess slideIn={slideIn} handleSlideIn={handleSlideIn} />} 
        />
    </Routes>
    
  );
};

export default AllRoutes;