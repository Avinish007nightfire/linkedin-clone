
import React, {useEffect, useState}from "react";
import './Feed.css'
import CreateIcon from '@material-ui/icons/Create'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import ImageIcon from '@material-ui/icons/Image'
import EventNoteIcon from '@material-ui/icons/EventNote'
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay'
import InputItems from './InputItems';
import Posts from './Posts';
import db from './firebase';
import firebase from 'firebase/compat/app';

function Feed(){
    //hooks
    const[input, setInput]= useState('')
    const [posts, setPosts]= useState ([])

    useEffect(() => {

        db.collection('posts').orderBy('timestamp','desc').onSnapshot((snapshot) => {
            setPosts(snapshot.docs.map(doc => ({
                id: doc.id,
                data:doc.data()
            })))
        })
    }, [])

    const sendPost =(e)=>{
        e.preventDefault();

        // database db
        db.collection('posts').add ({
            name: "Avinish kumar singh",
            description : 'singhavinish1999@gmail.com' ,
            message: input ,
            photoUrl:"",
            timestamp: firebase.firestore.FieldValue.serverTimestamp ()
        
        })
        setInput('');
    }
    return(
        <div className="feed_container">
           <div className="container">
               <div className="input_container">
                 <CreateIcon/>
                 <form>
                     <input value ={input} onChange={(e)=> setInput (e.target.value)} type='text'/>
                     <button onClick={sendPost} type="submit">Submit</button>
                 </form>
               </div>
               <div className="input_items">
                    <InputItems Icon={ImageIcon} title='Photo' color='blue'/>
                    <InputItems Icon={SubscriptionsIcon} title='Video' color='blue'/>
                    <InputItems Icon={EventNoteIcon} title='Event' color='blue'/>
                    <InputItems Icon={CalendarViewDayIcon} title='Write Artical' color='blue'/>
                    
             
               </div>
           </div>
           {posts.map(({id, data:{name, description, message, photoUrl}}) => (
            <Posts 
            id = {id}
            name = {name}
            description={description}
            message={message}
            photoUrl={photoUrl}
         />
        ))}

           <Posts name = 'Avinish kumar singh' description='This is a discription' message="Hi iam Avinish"/>
        </div>
    )
}
export default Feed;


