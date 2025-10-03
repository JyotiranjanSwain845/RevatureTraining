import React from "react";
import styles from "../css/Incident.module.css";
import { ThemeContext } from "./ThemeContext";
import { useContext } from "react";

export default function Incident({ inc, onDelete }) {
  const { incident_id, priority, severity, status } = inc;
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div
      className={`${styles.incident} ${
        theme === "light" ? styles.lightincident : styles.darkincident
      }`}
    >
      <p>Incident_id : {incident_id}</p>
      <p>Priority : {priority}</p>
      <p>Severity : {severity}</p>
      <p>Current_Status : {status}</p>
      <button onClick={() => onDelete(incident_id)}>delete</button>
    </div>
  );
}
