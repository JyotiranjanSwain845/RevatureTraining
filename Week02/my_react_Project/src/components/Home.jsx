import React, { useContext, useReducer } from "react";
import { useState } from "react";
import styles from "../css/home.module.css";
import User from "./User";
import IncidentListCard from "./IncidentListCard";
import Welcome from "./Welcome";
import incidents from '../assets/incidents.json'
import { ThemeContext } from "./ThemeContext";
 
function incidentReducer(state,action){

  switch (action.type) {
    case 'add':
      { return [...state,action.payload]}
      break;
    case 'delete':
      {return state.filter(val=>val.incident_id!==action.payload)}
    default:
      break;
  }

}

export default function Home() {
  const getTime = `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()} - ${new Date().getHours()}:${new Date().getMinutes()}`;

  var [content,setContent] = useState("home");
  
  var [myincident,dispatch] = useReducer(incidentReducer,incidents);
  
  function handleDelete(id){
    dispatch({type:'delete',payload:id})
  }
  
  function handleSubmit(data){
        dispatch({type:'add',payload:data})
  }

  const {theme,setTheme} = useContext(ThemeContext);
  return (
    <>
      <header className={`${styles.header}  ${theme === "light" ? styles.lightHeader : styles.darkHeader}`}>
        <section className={`${styles.namePlate}`}>
          <p className={styles.welcome}>Welcome : <User/></p> 
          <p className={styles.gettime}>time since last_incident : {getTime}</p>
        </section>
        <nav className={styles.navigater}>
          <ul className={styles.navList}>
            <li className={`${`${styles.listItems}  ${theme === "light" ? styles.lightlistItems : styles.darklistItems}`}  ${theme === "light" ? styles.lightlistItems : styles.darklistItems}`}>
              <a href="#" onClick={()=>setContent("home")} >Home</a>
            </li>
            <li className={`${styles.listItems}  ${theme === "light" ? styles.lightlistItems : styles.darklistItems}`}>
              <a href="#" onClick={()=>setContent("list")} >Incidents</a>
            </li>
            <li className={`${styles.listItems}  ${theme === "light" ? styles.lightlistItems : styles.darklistItems}`}>
              <button className={styles.toggleDarkMode} onClick={() => setTheme(theme === "light" ? "dark" : "light")}>darkMode</button>
            </li>
          </ul>
        </nav>
      </header>
      {((content=="home")?(<Welcome/>):(<IncidentListCard myincident={myincident} onDelete ={handleDelete} onSave={handleSubmit}/>))}
    </>
  );
}
