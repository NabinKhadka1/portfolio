import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaLocationArrow,
  FaPhone,
} from "react-icons/fa";
const Contact = () => {
  return (
    <section id="contact" className="px-4 pt-8 py-12 lg:py-16 md:px-8 lg:px-20 xl:px-0 bg-primary-50 dark:bg-gray-800">
      <div className="w-full max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Let's build something together
          </p>
        </div>
        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                  <FaEnvelope className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Email
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    nabinkhadka330@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                  <FaPhone className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Phone
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    +977 9861547326
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                  <FaLocationArrow className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Location
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Basundhara, Kathmandu
                  </p>
                </div>
              </div>
            </div>
            <div className="flex space-x-4">
              <a
                arget="_blank"
                rel="noopener noreferrer"
                href="https://github.com/NabinKhadka1"
                className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors"
              >
                <FaGithub />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/nabinkhadka1"
                className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
          <form className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg space-y-6">
            <div>
              <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-primary-500 dark:bg-gray-800 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-primary-500 dark:bg-gray-800 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                Message
              </label>
              <textarea
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-primary-500 dark:bg-gray-800 dark:text-white"
              ></textarea>
            </div>
            <button
              type="submit"
              aria-disabled="true"
              disabled
              className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 rounded-lg font-semibold transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
