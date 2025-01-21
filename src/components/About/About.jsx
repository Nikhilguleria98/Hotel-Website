import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 mt-10 ">
      {/* Title Section */}
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-[6vh] md:text-[5vh] font-extrabold text-gray-900 overflow-hidden">About Us</h2>
        <p className="mt-4 text-[3vh] md:text-[3vh] text-gray-500">
          Welcome to our luxurious hotel! We're committed to providing the best stay experience with top-notch amenities, great customer service, and a comfortable atmosphere. Discover why we are your perfect choice for business or leisure.
        </p>
      </div>

      {/* Vision, Mission, and Why Choose Us */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="flex flex-col items-center text-center bg-white p-8 shadow-lg rounded-lg">
          <h3 className="text-xl font-semibold text-gray-800">Our Vision</h3>
          <p className="mt-4 text-gray-600">
            Our vision is to offer a haven of comfort, relaxation, and style, where every guest feels valued and pampered.
          </p>
        </div>
        <div className="flex flex-col items-center text-center bg-white p-8 shadow-lg rounded-lg">
          <h3 className="text-xl font-semibold text-gray-800">Our Mission</h3>
          <p className="mt-4 text-gray-600">
            Our mission is to provide impeccable service and unforgettable experiences, whether you're here for business or pleasure.
          </p>
        </div>
        <div className="flex flex-col items-center text-center bg-white p-8 shadow-lg rounded-lg">
          <h3 className="text-xl font-semibold text-gray-800">Why Choose Us</h3>
          <p className="mt-4 text-gray-600">
            We offer luxury, comfort, and a personalized experience that meets all your needs. From exquisite rooms to exceptional dining, we ensure that every detail is perfect.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-semibold text-gray-800">Our Story</h3>
        <p className="mt-4 text-lg text-gray-500">
          Established in 2010, our hotel has been providing world-class services and creating lasting memories for travelers from around the world. We pride ourselves on our commitment to excellence and our dedication to creating the best possible experience for our guests.
        </p>
      </div>

      {/* Hotel Services */}
      <div className="mt-16 text-center bg-white p-8 shadow-lg rounded-lg">
        <h3 className="text-2xl font-semibold text-gray-800">Our Services</h3>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="mb-4">
              <svg className="h-12 w-12 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 4H4v16h16V4zM4 4h16M4 20h16" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-gray-800">24/7 Room Service</h4>
            <p className="mt-4 text-gray-600">
              Enjoy the comfort of your room with our round-the-clock room service, offering a wide range of dining options.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-4">
              <svg className="h-12 w-12 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 12l2 2 4-4m0 0l-4-4-2 2m4 4H5v-2h11v2z" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-gray-800">Spa & Wellness</h4>
            <p className="mt-4 text-gray-600">
              Rejuvenate your mind and body at our luxury spa with massage therapies, wellness treatments, and saunas.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-4">
              <svg className="h-12 w-12 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 11h14M5 6h14M5 16h14" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-gray-800">Restaurant & Bar</h4>
            <p className="mt-4 text-gray-600">
              Savor exquisite dining with our fine restaurant and bar, offering a diverse menu and signature cocktails.
            </p>
          </div>
        </div>
      </div>

      {/* Guest Testimonials */}
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-semibold text-gray-800">What Our Guests Say</h3>
        <div className="mt-8 space-y-8">
          <div className="bg-white p-8 shadow-lg rounded-lg">
            <p className="text-lg text-gray-600">
              "An amazing experience! The staff were incredibly helpful, and the room was clean and spacious. Highly recommend staying here!"
            </p>
            <p className="mt-4 text-gray-800 font-semibold">- John Doe</p>
          </div>
          <div className="bg-white p-8 shadow-lg rounded-lg">
            <p className="text-lg text-gray-600">
              "The spa services were exceptional! I felt so relaxed after a full day of pampering. Definitely coming back again!"
            </p>
            <p className="mt-4 text-gray-800 font-semibold">- Jane Smith</p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="mt-16 text-center bg-indigo-600 text-white p-16">
        <h3 className="text-2xl font-semibold">Get In Touch</h3>
        <p className="mt-4 text-lg">Have any questions or need more information? Contact us today!</p>
        <a
          href="mailto:contact@hotel.com"
          className="mt-8 inline-block bg-white text-indigo-600 font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-200"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default AboutUs;
