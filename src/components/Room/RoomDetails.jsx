import React from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick"; // For the carousel/slider
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const RoomDetails = () => {
  const { id } = useParams();

  // Sample room data with images for the carousel
  const roomData = [
    {
      id: 1,
      name: "VIP Room",
      rate: "₹800/night",
      adults: "2",
      children: "2",
      area: "200 sqft",
      img: "/images/vip room.jpg", // Main image for the room
      images: [
        "/images/vip room.jpg",
        "/images/vip room.jpg",
        "/images/vip room.jpg",
      ],
      description:
        "A luxurious room for VIP guests with stunning views and modern amenities.",
      features: [
        "King-size bed",
        "Jacuzzi",
        "Private Balcony",
        "Air-conditioning",
        "Flat-screen TV",
        "Free Wi-Fi",
        "Mini-bar",
      ],
      availability: "Available for booking",
      bookingInfo:
        "For bookings, call us at +91 123 456 7890 or email us at booking@example.com.",
    },
    {
      id: 2,
      name: "Love Room",
      rate: "₹1400/night",
      adults: "2",
      children: "1",
      area: "240 sqft",
      img: "/images/loveroom-main.jpg",
      images: [
        "/images/loveroom1.jpg",
        "/images/loveroom2.jpg",
        "/images/loveroom3.jpg",
      ],
      description:
        "A romantic room designed for couples, featuring soft lighting and intimate decor.",
      features: [
        "Queen-size bed",
        "Romantic lighting",
        "Air-conditioning",
        "Jacuzzi",
        "Free Wi-Fi",
        "Complimentary champagne",
      ],
      availability: "Limited availability",
      bookingInfo:
        "For bookings, call us at +91 123 456 7890 or email us at booking@example.com.",
    },
    // More rooms...
  ];

  const room = roomData.find((room) => room.id === parseInt(id));

  if (!room) {
    return <div>Room not found</div>;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "ease-in-out",
  };

  return (
    <div className="room-details">
      {/* Room Image (Main Image) */}
      <div className="relative rounded-lg overflow-hidden shadow-xl">
        <img
          src={room.img}
          alt={room.name}
          className="w-full h-96 object-cover transform hover:scale-110 transition duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-50"></div>
        <h1 className="absolute bottom-5 left-5 text-5xl text-white font-extrabold shadow-lg p-4 bg-black bg-opacity-50 rounded-lg">
          {room.name}
        </h1>
      </div>

      {/* Image Carousel Section */}
      <section className="bg-white md:mt-20 w-full">
	<div className="py-4 px-2 max-w-screen sm:py-4 lg:px-6">
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
			<div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col">
				<div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
					<img src="/images/hotel spa.jpg" alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
				</div>
			</div>
			<div className="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50">
				<div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4">
					<img src="/images/pool.jpg" alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
				</div>
				<div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
					<div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
						<img src="/images/hotel dinner.jpg" alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
					</div>
					<div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
						<img src="/images/swimming.jpg" alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
					</div>
				</div>
			</div>
			<div className="col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 h-auto md:h-full flex flex-col">
				<div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
					<img src="/images/hotel pic.jpg" alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
				</div>
			</div>
		</div>
	</div>
</section>

      {/* Room Info Section */}
      <div className="bg-gradient-to-r from-red-400 to-rose-500 p-8 mt-8 rounded-xl shadow-2xl text-white">
        <div className="flex flex-wrap justify-between items-center">
          <p className="text-3xl font-semibold overflow-hidden">{room.rate}</p>
          <p className="text-lg">{room.adults} Adults | {room.children} Children | {room.area}</p>
        </div>
        <p className="mt-6 text-lg">{room.description}</p>

        {/* Room Features */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold">Room Features</h2>
          <ul className="list-disc pl-6 mt-3 text-lg">
            {room.features.map((feature, index) => (
              <li key={index} className="text-lg">{feature}</li>
            ))}
          </ul>
        </div>

        {/* Availability Section */}
        <div className="mt-6">
          <h2 className="text-2xl font-bold">Availability</h2>
          <p className="text-lg">{room.availability}</p>
        </div>

        {/* Booking Info Section */}
        <div className="mt-6">
          <h2 className="text-2xl font-bold">Booking Information</h2>
          <p className="text-lg">{room.bookingInfo}</p>
        </div>
      </div>

      {/* Additional Info Section */}
      <div className="bg-white shadow-2xl p-8 mt-8 rounded-xl">
        <h2 className="text-2xl font-bold text-gray-800">Room Layout</h2>
        <p className="mt-3 text-lg text-gray-700">
          The room is designed to offer maximum comfort and privacy, with a
          spacious layout that includes a king-sized bed, a cozy sitting area, a
          well-lit workspace, and a luxurious bathroom with a rain shower.
        </p>

        <div className="mt-6">
          <h2 className="text-2xl font-bold text-gray-800">Location</h2>
          <p className="mt-3 text-lg text-gray-700">
            Located on the top floor of our hotel, the room offers panoramic
            views of the city skyline and nearby landmarks. Perfect for guests
            who prefer a quieter and more exclusive atmosphere.
          </p>
        </div>
      </div>

      {/* Contact & Inquiry Section */}
      <div className="bg-gradient-to-r from-gray-100 via-gray-300 to-gray-100 p-8 mt-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800">Contact & Inquiries</h2>
        <p className="mt-3 text-lg text-gray-700">
          For further inquiries or special requests, feel free to contact our
          team. We will be happy to assist you with your booking and ensure that
          your stay is a memorable one.
        </p>
        <div className="mt-4 text-lg text-gray-700">
          <p>Phone: +91 123 456 7890</p>
          <p>Email: <a href="mailto:booking@example.com" className="text-indigo-600">booking@example.com</a></p>
        </div>
      </div>

      {/* Stylish "Book Now" Button */}
      <div className="flex justify-center mt-8 ">
        <button className="bg-indigo-600 text-white py-3 px-8 rounded-full shadow-xl hover:bg-indigo-700 transition duration-300 transform hover:scale-105 ">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default RoomDetails;
