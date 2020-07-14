// import React, { useState } from "react";
// import PlacesAutocomplete, {
//   geocodeByAddress,
//   getLatLng,
// } from "react-places-autocomplete";

// export default function Map() {
//   const [address, setaddress] = useState("");

//   const handleSelect = async (value) => {};
//   return (
//     <div>
//       <PlacesAutocomplete
//         value={address}
//         onChange={setaddress}
//         onSelect={handleSelect}
//       >
//         {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => {
//           return (
//             <div>
//               <input {...getInputProps({ placeholder: "Type Address" })} />
//               <div>
//                 {loading ? <div>loading...</div> : null}
//                 {suggestions.map((suggestion) => {
//                   return <div> {suggestion.description}</div>;
//                 })}
//               </div>
//             </div>
//           );
//         }}
//       </PlacesAutocomplete>
//     </div>
//   );
// }
