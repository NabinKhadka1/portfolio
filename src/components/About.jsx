const About = () => {
  return (
    <section
      id="about"
      className="px-4 pt-8 py-12 lg:py-16 md:px-8 lg:px-20 xl:px-0 bg-white dark:bg-gray-900"
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Passionate about creating digital experiences that make a difference
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-balance">
              I am a Fullstack Developer with over 3.5 years of experience. My
              expertise spans across React, Nextjs, Node, Typescript, Redux,
              MongoDB. I drive performance improvements, accessibility audits,
              and developer productivity through clean abstractions and
              documented patterns.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-balance">
              I enjoy mentoring developers, running meaningful code reviews and
              creating a culture of high engineering standards. I’m motivated by
              complex UI problems, system design, and building products that
              make a measurable difference.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
              <i className="fa-brands fa-react text-4xl text-primary-600 dark:text-primary-400 mb-4"></i>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                React/Nextjs
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                UI Framework
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
              <i className="fa-brands fa-js-square text-4xl text-primary-600 dark:text-primary-400 mb-4"></i>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Node
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Runtime environment
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
              <i className="fa-brands fa-css3-alt text-4xl text-primary-600 dark:text-primary-400 mb-4"></i>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Typescript
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Type safety
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
              <i className="fa-brands fa-node-js text-4xl text-primary-600 dark:text-primary-400 mb-4"></i>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                MongoDb
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Database
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
