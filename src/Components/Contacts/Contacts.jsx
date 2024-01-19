import React from 'react'
import './Contacts.css'
import { useState } from 'react'

function Contacts(props) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("");
    return (
        <>
            <div className="contacts">
                <div className='inputs'>
                    <form>
                        <label>Name: </label>
                        <input type="text" placeholder='Alice' id='name'/><br />
                        <label>Email: </label>
                        <input type="text" placeholder="alice123@email.com" id='email'/><br />
                        <label>Description:</label>
                        <textarea cols="40" rows="7" placeholder='Hey how do you do?' id='message'></textarea>
                        <input type="submit" value="Submit" 
                        onClick={(e)=>{
                            e.preventDefault();
                            setName(document.getElementById('name').value);
                            setEmail(document.getElementById('email').value);
                            setMessage(document.getElementById('message').value);
                        }}
                        class='formSubmit' onMouseEnter={(e)=>{e.target.style.backgroundColor="#ff9a47"; e.target.style.color="white"}} onMouseLeave={(e)=>{e.target.style.backgroundColor="#f8eca8"; e.target.style.color="black"}}/>
                    </form>
                </div>
                <img src="../../../public/Images/contactUs.png" alt=""/>
            </div>
        </>
    )
}

export default Contacts
