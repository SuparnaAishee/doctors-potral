// import React from 'react';
// import Dentist from './Dentist';
// import { useEffect } from "react";
// import { useState } from "react";

// const DentistDetails = () => {
//     const [dentist, setDentist] = useState([]);
//     useEffect(() => {
//       fetch("dentist.json")
//         .then((res) => res.json())
//         .then((data) => setDentist(data));
//     }, []);
   
//   console.log(dentist);
//     return (
//         <div>
//             {dentist.map((dentist) => (
//             <Dentist key={dentist._id} dentist={dentist}></Dentist>
//           ))}
//         </div>
//     );
// };

// export default DentistDetails;