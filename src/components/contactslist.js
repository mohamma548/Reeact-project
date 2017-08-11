import React from 'react';
import './contactlist.css';
import contactsJson from './contacts.json';
const tableheaders= ['Name','email address','phone number'];

export const ContactList=({users})=>{
  return (
    <div>
    <table className="table">
    <thead>
    <tr>
    {tableheaders.map((header)=><th key={header}>{header}</th>)}
    </tr>
    </thead>
    <tbody>
      {
        contactsJson.map(user => {
          return(<tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.tel}</td>
            </tr>);
        })
      }
    </tbody>
    </table>
    </div>
  );

}
