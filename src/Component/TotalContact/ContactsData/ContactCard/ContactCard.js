
import React, { Component }  from 'react';

import {useState , useEffect} from "react"
import './ContactCard.css'
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Tooltip from '@mui/material/Tooltip';
import {useContext} from 'react'
import { contextProvider } from "../../../../App";
import { selectContactsContext } from '../../../../App';
const ContactCard = (props)=>{
    // console.log(props.data.obj)
    let dualId = '';
    if(props.data.i % 2 === 0){
        dualId = 'dual-tone'
    }
    const [checked, setChecked] = useState(false)
    const [contactsArr, setContactsArr] = useContext(contextProvider)
    const [selectContacts,setSelectContacts] = useContext(selectContactsContext)
    const {_id, name,designation,company,industry,email,phoneNumber, country} = props.data.obj
    // console.log(name,_id)
    const handleSelect=(event)=>{
        setChecked(prev=>!prev) 
        if(!checked){
            setSelectContacts((prev)=>{console.log(prev);return [...prev,_id]})
        }else{
            setSelectContacts((prev)=>{console.log(prev);return prev.filter((e)=>e!==_id)})
        }    
    }
    console.log("selectContacts",selectContacts)
    // useEffect(()=>{
    //     setChecked(false)
    // },[])
    return (
        <tbody id={dualId}>   
        {/* <Tooltip title={{email}} arrow>    */}
            <tr >
                <td id='namefild'> <input type='checkbox' onClick={handleSelect} defaultChecked={checked} />{name}</td>
                <td id='desiggnationfild'>{designation}</td>
                <td id='companyfild'>{company}</td>
                <td id='industryfild'>{industry}</td>
                <Tooltip title={`${email}`} arrow style={{"colur":"#ffff"}}>
                <td id='email'>
                
                    {email}
                    <button></button>
                
                </td>
                </Tooltip>
                <td id='phonenofild'>{phoneNumber}</td>
                <td id='countryfild'>{country}</td>
                <td id='actionfild'>
                    <button><ModeEditOutlineOutlinedIcon/></button>
                    <button><DeleteOutlineOutlinedIcon/></button>
                </td>
            </tr>
        {/* </Tooltip>            */}
        
        </tbody>      
        
    )
}
export default ContactCard;
