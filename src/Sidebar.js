import { Avatar } from "@material-ui/core";
import React from "react";
import './Sidebar.css';


function Sidebar(){

    const recentItem = (topic) => (
             <div className="sidebar_recentItem">
                 <span className="sidebar_hash">#</span>
                 <p>{topic}</p>
             </div>
    )
    return(

    <div className="sidebar">
        <div className="sidebar_top">
            <img src="https://static8.depositphotos.com/1157310/889/v/600/depositphotos_8894435-stock-illustration-sunrise-over-green-field-of.jpg" alt=""/>
            <Avatar className="sidebar_avatar"/>
            <h2> Avinish Kumar Singh</h2>
            <h4>singhavinish1999@gmail.com</h4>
        </div>
         
         <div className="sidebar_stats">
             <div className="sidebar_stat">
                 <p> Who Viewed you</p>
                 <p className="sidebar_statNumber">2312</p>
             </div>
             <div className="sidebar_stat">
                 <p>Views on your post</p>
                 <p className="sidebar_statNumber">2367</p>
             </div>
         </div>
         <div className="sidebar_bottom">
             <p>Recent</p>
             {recentItem("reactjs")}
             {recentItem("programming")}
             {recentItem("software")}
             {recentItem("design")}
             {recentItem("developer")}
             
           
         </div>
        
          
   
         </div>    
    )
}
export default Sidebar;