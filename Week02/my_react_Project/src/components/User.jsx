import React from 'react'

import'./user.css'
export default function User() {
   const user={
    prefix : "Mr",
    first_name : "Jyoti Ranjan",
    last_name : "Swain"
   }
  return (
        <span className='Uname'>
          {user.prefix} {user.last_name}
        </span>
  );
}
