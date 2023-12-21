import { useEffect, useState } from "react";
import AccountNav from "../AccountNav";
import axios from "axios";
import PlaceImg from "../PlaceImg";
import { Link } from "react-router-dom";
import BookingDates from "../BookingDates";

export default function BookingsPage() {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    axios.get("/bookings").then((response) => {
      setBookings(response.data);
    });
  }, []);

  // truncate the particullar string

  function truncateString(str, maxLength) {
    if (str.length > maxLength) {
      return str.substring(0, maxLength) + "...";
    } else {
      return str;
    }
  }

  return (
    <div>
      <AccountNav />
      <div>
        {bookings?.length > 0 &&
          bookings.map((booking) => (
            <Link key={booking._id} to={`/account/bookings/${booking._id}`}>
              <div className='mx-2 lg:flex gap-4 lg:h-40 w-full bg-gray-200 px-4 py-2 rounded-lg'>
                <div className='lg:w-48 w-full'>
                  <img
                    src={booking.place.photos[0]}
                    alt='place photo'
                    className='lg:h-full h-64 w-full rounded-lg '
                  />
                </div>
                <div className='py-4'>
                  <h2 className='lg:text-xl text-lg truncate'>
                    {truncateString(booking.place.title, 50)}
                  </h2>
                  <div className='text-xl'>
                    <BookingDates
                      booking={booking}
                      className=' mb-2 mt-4 text-gray-500'
                    />
                    <div className='flex gap-1'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='w-8 h-8'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z'
                        />
                      </svg>
                      <span className='text-2xl'>
                        Total price: ₹{booking.price}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
