
export default function PlaceImg({place,index=0,className=null}) {
if (!place.photos?.length) {
    return '';
}
if (!className) {
    className = "flex object-cover w-32 h-32";
}
return (
    <img className={className} src={place.photos[index]} alt=""/>
);
}

// export default function PlaceImg({ place }) {
//     console.log(place);
//     if (!place || !place.photos || place.photos.length === 0) {
//        return null; 
//     }
//     return (
//        <img src={place.photos[0]} className="w-32 h-32 object-cover" alt="place image"/>
//  );
//  }