// import React, { forwardRef } from 'react';
// //import React from 'react';
// import './style.css';

// const Menu = () => {
//   return (
//     <main ref={ref}>
//     {list.map((item) => (
//       <MenuItem item={item} key={item.id }/>
//     ))}
//   </main>
//   )
// }

// export default Menu;
import React from 'react';
import {menuItemsData} from './data';
import MenuItem from './MenuItem';
import './style.css';


const Menu = () => {
  return (
    <main>
     {menuItemsData.map((item)=>
     <MenuItem item={item} key={item.id }/>)}
    </main>
  )
}

export default Menu