// export default function PlaceImg({place}) {
//     return(
//         <>
//         <img src={place?.photos[0]} className="" alt="" />
//         </>
//     )
   
// }

export default function PlaceImg({ place }) {
    console.log(place);
    if (!place || !place.photos || place.photos.length === 0) {
       return null; 
    }
    return (
       <img src={place.photos[0]} className="w-32 h-32 object-cover" alt="place image"/>
 );
 }