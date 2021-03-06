import React from 'react'
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ViewHeadlineOutlinedIcon from '@material-ui/icons/ViewHeadlineOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';

function Header() {
  
    return (
        <>
        //BEM convention for className
        <div className="header">
        
<ViewHeadlineOutlinedIcon className="header__iconm"/>

          <img className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="amazon"
          />  
        {/* search bar*/}
          <div className="header__search">
           <input type="text" className="header__searchInput" />
           <SearchIcon
          className="header__searchIcon"

           />
          </div>
        

        {/* navigation bar */}
        <div className="header__nav">
        <div className="header__navInner">
            <span className="header__navInnerLineONe"> Hello</span>
            <span className="header__navInnerLineTwo">Accounts & Lists </span>
             <ExpandMoreOutlinedIcon className="header__navInnerLineTwoIcon"/>
        </div>
        <div className="header__navInner">
            <span className="header__navInnerLineONe"> Returns</span>
            <span className="header__navInnerLineTwo"> & Orders </span>
            <ExpandMoreOutlinedIcon className="header__navInnerLineTwoIcon"/>
        </div>
        <div className="header__navInner">
            <span className="header__navInnerLineONe"> Try Prime</span>
        </div>
        <div className="header__navInner">
            <ShoppingCartOutlinedIcon className="header__navInnerCart"/>
        </div>
        </div>
    
        </div>
        <div className="header__secondNav">
        <div className="header__secondNavInner">
            <span className="header__secondNavInnerLineONe"> Holiday Deals</span>
            
           
        </div>
        <div className="header__secondNavInner">
            <span className="header__secondNavInnerLineTwo"> Gift Cards</span>
            </div>

            <div className="header__secondNavInner">
            <span className="header__secondNavInnerLineThree">Browsing History</span>
            <ExpandMoreOutlinedIcon className="header__secondNavInnerLineThreeIcon"/>
            </div>
            <div className="header__secondNavInner">
            <span className="header__secondNavInnerLineFour"> Prime Video</span>
            </div>
            <div className="header__secondNavInner">
            <span className="header__secondNavInnerLineFive">Customer Service</span>
            </div>
            <div className="header__secondNavInner">
            <span className="header__secondNavInnerLineSix">Best Seller</span>
            </div>
            <div className="header__secondNavInner">
            <span className="header__secondNavInnerLineSeven">Buy Again</span>
            </div>
            <div className="header__secondNavInner">
            <span className="header__secondNavInnerLineSeven">Find a Gift</span>
            </div>
            <div className="header__secondNavInner">
            <span className="header__secondNavInnerLineEight">Whole Foods</span>
            </div>
            <div className="header__secondNavInner">
            <span className="header__secondNavInnerLineEight">Shop deals before they're gone</span>
            </div>
            
</div>

        </>
    )
}

export default Header
