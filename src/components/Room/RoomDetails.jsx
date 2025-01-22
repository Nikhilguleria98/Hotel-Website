import React from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const RoomDetails = () => {
  const { id } = useParams();

  const roomData = [
    {
      id: 1,
      name: "VIP Room",
      rate: "₹800/night",
      adults: "2",
      children: "2",
      area: "200 sqft",
      img: "/images/vip room.jpg",
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
      reviews: [
        {
          name: "John Doe",
          rating: 5,
          comment: "The VIP room was amazing! The view was breathtaking.",
          date: "2023-01-15",
        },
        {
          name: "Jane Smith",
          rating: 4,
          comment:
            "Very comfortable stay. The jacuzzi was the highlight of our trip.",
          date: "2023-02-10",
        },
      ],
      policies: [
        "Check-in: 2:00 PM, Check-out: 12:00 PM",
        "No smoking inside the room",
        "Pets are not allowed",
        "Cancellation policy: Free cancellation up to 24 hours before check-in",
      ],
      attractions: [
        {
          name: "City Park",
          distance: "2 km",
          description: "A beautiful park perfect for morning walks and picnics.",
        },
        {
          name: "Art Museum",
          distance: "3 km",
          description: "Explore modern and classical art exhibits.",
        },
      ],
      faq: [
        {
          question: "Is breakfast included?",
          answer: "Yes, breakfast is included in the booking rate.",
        },
        {
          question: "Do you offer airport shuttle services?",
          answer: "Yes, we provide complimentary airport shuttle services.",
        },
      ],
    },
    // More rooms...
  ];

  const room = roomData.find((room) => room.id === parseInt(id));

  if (!room) {
    return <div>Room not found</div>;
  }

  const sliderSettings = {
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
    <div className="room-details bg-gray-50 font-sans">
      {/* Hero Section */}
      <div className="relative h-[500px] rounded-lg overflow-hidden">
        <img
          src={room.img}
          alt={room.name}
          className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-60"></div>
        <h1 className="absolute bottom-5 left-5 text-5xl text-white font-extrabold shadow-lg p-4 bg-black bg-opacity-50 rounded-lg">
          {room.name}
        </h1>
      </div>

      {/* Gallery */}
      <section className="mt-12 mx-auto max-w-5xl px-4 ">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 overflow-hidden">Gallery</h2>
        <Slider {...sliderSettings} className="overflow-hidden">
          {room.images.map((image, index) => (
            <div key={index} className="rounded-lg overflow-hidden">
              <img
                src={image}
                alt={`Room ${index + 1}`}
                className="w-full h-[400px] object-cover"
              />
            </div>
          ))}
        </Slider>
      </section>

      {/* Room Details */}
      <div className="bg-white mt-16 p-8 rounded-lg shadow-md  max-w-full">
        <div className="flex flex-wrap justify-between items-center">
          <p className="text-3xl font-semibold text-indigo-600 overflow-hidden">{room.rate}</p>
          <p className="text-lg text-gray-600">
            {room.adults} Adults | {room.children} Children | {room.area}
          </p>
        </div>
        <p className="mt-6 text-gray-700 text-lg">{room.description}</p>
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-gray-800">Features</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
            {room.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center bg-indigo-50 rounded-lg p-4 shadow-sm"
              >
                <span className="text-indigo-600 text-xl mr-3">&#x2713;</span>
                <p className="text-gray-700">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="bg-gray-100 mt-16 p-8 rounded-lg shadow-lg max-w-full">
        <h2 className="text-2xl font-bold text-gray-800">Guest Reviews</h2>
        <div className="mt-6 space-y-4">
          {room.reviews.map((review, index) => (
            <div
              key={index}
              className="p-4 rounded-lg bg-white shadow-sm border"
            >
              <p className="text-lg font-semibold text-gray-800">
                {review.name}
              </p>
              <p className="text-sm text-gray-500">{review.date}</p>
              <p className="mt-2 text-gray-700">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Nearby Attractions */}
      <div className="bg-white mt-16 p-8 rounded-lg shadow-lg  max-w-full">
        <h2 className="text-2xl font-bold text-gray-800">
          Nearby Attractions
        </h2>
        <div className="mt-6 space-y-4">
          {room.attractions.map((attraction, index) => (
            <div key={index} className="p-4 rounded-lg bg-gray-100">
              <h3 className="text-lg font-semibold text-gray-800">
                {attraction.name} - {attraction.distance}
              </h3>
              <p className="mt-1 text-gray-600">{attraction.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Policies Section */}
      <div className="bg-gray-50 mt-16 p-8 rounded-lg shadow-md  max-w-full">
        <h2 className="text-2xl font-bold text-gray-800">Policies</h2>
        <ul className="mt-6 list-disc list-inside text-gray-700">
          {room.policies.map((policy, index) => (
            <li key={index}>{policy}</li>
          ))}
        </ul>
      </div>

      {/* FAQs */}
      <div className="bg-white mt-16 p-8 rounded-lg shadow-md  max-w-full">
        <h2 className="text-2xl font-bold text-gray-800">FAQs</h2>
        <div className="mt-6 space-y-4">
          {room.faq.map((item, index) => (
            <div key={index}>
              <p className="font-semibold text-gray-800">
                Q: {item.question}
              </p>
              <p className="mt-2 text-gray-600">A: {item.answer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="flex justify-center mt-16 overflow-hidden">
        <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xl font-semibold py-4 px-12 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 ">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default RoomDetails;
