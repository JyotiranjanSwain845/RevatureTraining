import React, { useState } from 'react'
import Incident from './Incident'
import styles from '../css/IncidentList.module.css'
export default function IncidentListCard({myincident,onDelete,onSave}) {
  
  const [formData, setFormData] = useState({
    incident_id: 'INC-XXXXXX',
    priority: 'low',
    severity : 'A',
    status:'In Progress'
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }

    function handleSubmit(e) {
    e.preventDefault();
    onSave(formData);
  }




  return (
    <section>
      <form className={styles.incidentForm} id="new_incident_form" onSubmit={handleSubmit}>
        <label for="incident_id">Inc_ID : </label>
        <input
          type="text"
          id="incident_id"
          name="incident_id"
          placeholder="INC-XXXXXX"
          onChange={handleChange}
        />
        <label for="priority">Priority :</label>
        <select id="priority" name="priority" onChange={handleChange}>
          <option value="low">low</option>
          <option value="medium">medium</option>
          <option value="high">high</option>
          <option value="critical">critical</option>
        </select>
        <label for="severity">severity :</label>
        <select id="severity" name="severity" onChange={handleChange}>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
        </select>
        <label for="status">status :</label>
        <select id="status" name="status" onChange={handleChange}>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
          <option value="About to complete">About to complete</option>
          <option value="Not started">Not started</option>
        </select>
        <input type="submit" value="Create" />
      </form>
      <section className={styles.IncidentList}>
        {myincident.map((incident) => (
          <Incident
            key={incident.incident_id}
            inc={incident}
            onDelete={onDelete}
          />
        ))}
      </section>
    </section>
  );
}
