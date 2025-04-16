import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <Header />
      <main className="bg-gray-50">
        {/* Hero Section */}
        <section className="bg-blue-100 py-16 text-center">
          <h1 className="text-4xl font-bold text-blue-600">
            Welcome to Our Website
          </h1>
          <p className="mt-4 text-gray-700">
            Empowering innovation and education for a better future.
          </p>
        </section>

        {/* Services Section */}
        <section className="py-16">
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Our Services
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            <div className="bg-white shadow-md p-6 rounded-lg text-center">
              <div className="text-blue-600 text-4xl mb-4">⚙️</div>
              <h3 className="text-xl font-bold">Service 1</h3>
              <p className="mt-2 text-gray-600">
                Description of the first service.
              </p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-lg text-center">
              <div className="text-blue-600 text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold">Service 2</h3>
              <p className="mt-2 text-gray-600">
                Description of the second service.
              </p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-lg text-center">
              <div className="text-blue-600 text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-bold">Service 3</h3>
              <p className="mt-2 text-gray-600">
                Description of the third service.
              </p>
            </div>
          </div>
        </section>

        {/* News Section */}
        <section className="bg-gray-100 py-16">
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Latest News
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src="https://via.placeholder.com/300"
                alt="News 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold">News Title 1</h3>
                <p className="mt-2 text-gray-600">
                  Brief description of the news article.
                </p>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src="https://via.placeholder.com/300"
                alt="News 2"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold">News Title 2</h3>
                <p className="mt-2 text-gray-600">
                  Brief description of the news article.
                </p>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src="https://via.placeholder.com/300"
                alt="News 3"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold">News Title 3</h3>
                <p className="mt-2 text-gray-600">
                  Brief description of the news article.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16">
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Contact Us
          </h2>
          <div className="mt-8 max-w-2xl mx-auto bg-white shadow-md p-6 rounded-lg">
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Message
                </label>
                <textarea
                  className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  rows="4"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
