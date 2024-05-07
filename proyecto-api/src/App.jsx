import { useState } from 'react'
import './App.css'
import IniPage from './pages/ini/IniPage'
import HomePage from './pages/home/HomePage'
import ExplorePage from './pages/explore/ExplorePage'
import NotificationsPage from './pages/notifications/NotificationsPage'
import MessagesPage from './pages/messages/MessagesPage'
import ListsPage from './pages/lists/ListsPage'
import BookmarksPage from './pages/bookmarks/BookmarksPage'
import CommunitiesPage from './pages/communities/CommunitiesPage'
import PremiumPage from './pages/premium/PremiumPage'
import ProfilePage from './pages/profile/ProfilePage'
import MorePage from './pages/more/MorePage'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<IniPage />} />
          <Route exact path="/home" element={<HomePage />} />
          <Route path="/explore" element={<ExplorePage />} /> 
          <Route exact path="/notifications" element={<NotificationsPage />} />    
          <Route path="/messages" element={<MessagesPage />} />
          <Route exact path="/lists" element={<ListsPage />} />
          <Route path="/bookmarks" element={<BookmarksPage />} />     
          <Route path="/communities" element={<CommunitiesPage />} />     
          <Route path="/premium" element={<PremiumPage />} />     
          <Route path="/profile" element={<ProfilePage />} />     
          <Route exact path="/more" element={<MorePage />} />
        </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
