import React from "react";
import { useState, useEffect } from "react"

// import {useState , useEffect} from "react"
import SideBar from "./SideBar/SideBar";
import PageHead from "./PageHead/PageHead";
import ContactsData from "./ContactsData/ContactsData";
import PopUp from "../PopUp/PopUp";

const TotalContact = () => {
    const [searchData, setSearchData] = useState([])
    const [popUp, setPopUp] = useState({ importPopUp: false, deletePopUp: false })
    const getSearchData = (data) => {
        setSearchData(data)
    }
    return (
        <>
            <SideBar />
            <PageHead getSearchData={getSearchData} />
            <ContactsData trigger={popUp} setTrigger={setPopUp} searchData={searchData} />
            <PopUp trigger={popUp} setTrigger={setPopUp} />
        </>
    )
}
export default TotalContact;