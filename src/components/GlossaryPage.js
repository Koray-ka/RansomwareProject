import React from 'react';
import './GlossaryPage.css'; // imports from glossarypage.css for styling

function GlossaryPage() {
  const glossaryTerms = [
    { term: 'Ransomware', definition: 'A type of malicious software (malware) designed to deny access to a computer system or data until a ransom is paid.' },
    { term: 'Phishing', definition: 'A method of attempting to obtain sensitive information by disguising as a trustworthy entity in electronic communications.' },
    { term: 'HIPAA', definition: 'The Health Insurance Portability and Accountability Act, a U.S. law designed to provide privacy standards to protect patients\' medical records and other health information provided to health plans, doctors, hospitals, and other healthcare providers.' },
    { term: 'Encryption', definition: 'The process of converting information or data into a code, especially to prevent unauthorized access.' },
    { term: 'Malware', definition: 'Malicious software intended to damage, disrupt, or gain unauthorized access to computer systems.' },
    { term: 'Zero-Day Exploit', definition: 'A vulnerability in a system that is unknown to the vendor and is exploited by attackers before the vendor is aware and can patch it.' },
    { term: 'Backups', definition: 'A copy of data that is stored separately, often used to restore data in case of a ransomware attack.' },
    { term: 'WannaCry', definition: 'A ransomware attack that affected thousands of organizations globally, particularly in the healthcare sector in 2017.' }
  ];
// displays all terms or keywords on the glossary page
  return (
    <div className="glossary-container">
      <h1>Glossary of Terms</h1>
      <ul className="glossary-list">
        {glossaryTerms.map((item, index) => (
          <li key={index} className="glossary-term">
            <strong>{item.term}:</strong> {item.definition}
          </li>
        ))}
      </ul>
    </div>
  );
} //this shows the title of page and actually loads the page with all informations along with it

export default GlossaryPage;
