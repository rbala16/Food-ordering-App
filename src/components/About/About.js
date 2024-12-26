import React from 'react';

const About = () => (
  <div className="about-page p-8 text-gray-800">
    <h1 className="text-4xl font-bold mb-4">About BalaFoodClub</h1>
    <p className="text-lg">
      At BalaFoodClub, we believe everyone deserves access to a world of delicious food, delivered to their doorstep with convenience and care. Whether you're craving local favorites or exotic flavors, BalaFoodClub connects you with a wide variety of restaurants and cuisines for every taste and craving.
    </p>

    <section className="features mt-8">
      <h2 className="text-3xl font-semibold mb-2">Why Choose BalaFoodClub?</h2>
      <ul className="list-disc ml-6">
        <li>Quick and reliable delivery, ensuring hot, fresh meals every time.</li>
        <li>Wide selection of local and international cuisines.</li>
        <li>Exclusive offers and discounts on your favorite restaurants.</li>
      </ul>
    </section>

    <section className="customer-focus mt-8">
      <h2 className="text-3xl font-semibold mb-2">Our Commitment to You</h2>
      <p className="text-lg">
        BalaFoodClub is dedicated to providing a seamless and satisfying experience with customer support ready to help. We strive to make your dining experience as delightful and convenient as possible.
      </p>
    </section>

    
  </div>
);

export default About;
