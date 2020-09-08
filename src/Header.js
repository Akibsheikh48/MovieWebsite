import React from 'react';
import './Header.css';
import HomeIcon from '@material-ui/icons/Home';
import FlashIcon from '@material-ui/icons/FlashOn';
import LiveTvIcon from '@material-ui/icons/LiveTv'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import SearchIcon from '@material-ui/icons/Search';
import PersonOutLinedIcon from '@material-ui/icons/PersonOutline';



function Header() {
    return (
        <div className="header">
          <div className="header__icons">
            <div className="header__icon header__icon--active">
                <HomeIcon/>
                <p>Home</p>
            </div>

            <div className="header__icon">
                <FlashIcon />
                <p>Trending</p>
            </div>

            <div className="header__icon">
                <LiveTvIcon />
                <p>Verified</p>
            </div>

            <div className="header__icon">
                <VideoLibraryIcon />
                 <p>Collection</p>
            </div>

            <div className="header__icon">
                <SearchIcon/>
                <p>Search</p>
            </div>

            <div className="header__icon">
                 <PersonOutLinedIcon/>
                <p>Account</p>
            </div>
            
          </div>  
          <img src={process.env.PUBLIC_URL + "/movie.png"}
           alt=""

          />
        </div>
    )
}

export default Header
