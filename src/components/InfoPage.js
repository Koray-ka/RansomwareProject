import React from 'react';
import './InfoPage.css';
import { useNavigate } from 'react-router-dom';


function InfoPage() {
  const navigate = useNavigate();
  return (
    <div className="info-page">
      <h2>What is Ransomware?</h2>
      <p>Ransomware is a type of malicious software (malware) that locks or encrypts a user's data, demanding payment (a form of payments like, cryptocurrency) to restore access to the data.</p>
      
      <h3>How to Prevent/Reduce Ransomware:</h3>
      <ul>
        <li>Regularly backup important files</li>
        <li>Recommended to use strong passwords and multi-factor authentication (M2A)</li>
        <li>Remember to update your system and antivirus.</li>
        <li>Make sure any suspicious links, attachments or email are avoid at all times.</li>
      </ul>
      <button onClick={() => navigate('/')}>Back to Home</button>
    </div>
  );
} //code above displays information on the info page with titles, and buttons to return to home

export default InfoPage;