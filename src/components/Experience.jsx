const Experience = () => {
  return (
    <section id="experience" className="px-4 pt-8 py-12 lg:py-16 md:px-8 lg:px-20 xl:px-0 bg-white dark:bg-gray-900">
      <div className="w-full max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My professional journey and key achievements
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-3 sm:left-8 top-0 bottom-0 w-0.5 bg-primary-200 dark:bg-primary-800"></div>

            <div className="space-y-12">
              <div className="relative flex items-start">
                <div className="absolute left-2 sm:left-6 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-gray-900"></div>
                <div className="ml-8 sm:ml-20">
                  <div className="bg-gray-50 dark:bg-gray-800 p-2 sm:p-6 rounded-xl">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                          Fullstack Developer
                        </h3>
                        <p className="text-primary-600 dark:text-primary-400 font-medium">
                          OLE Nepal
                        </p>
                      </div>
                      <span className="bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 px-3 py-1 rounded-lg sm:rounded-full text-sm">
                        2023 - Present
                      </span>
                    </div>
                    <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                      <li>
                        • Lead fullstack development for multiple initiatives,
                        including EdTech platform and OCR applications
                      </li>
                      <li>
                        • Mentoring a team of developers, overseeing code
                        reviews
                      </li>
                      <li>
                        • Engaged in recruiting and onboarding junior and
                        mid-level  developers
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="relative flex items-start">
                <div className="absolute left-2 sm:left-6 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-gray-900"></div>
                <div className="ml-8 sm:ml-20">
                  <div className="bg-gray-50 dark:bg-gray-800 p-2 sm:p-6 rounded-xl">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                          Frontend Developer
                        </h3>
                        <p className="text-primary-600 dark:text-primary-400 font-medium">
                          Soek Tech Solutions
                        </p>
                      </div>
                      <span className="bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 px-3 py-1 rounded-lg sm:rounded-full text-sm">
                        2022 - 2023
                      </span>
                    </div>
                    <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                      <li>
                        • Developed web applications with React and Bootstrap
                      </li>
                      <li>
                        • Collaborated across teams to ensure consistency and
                        technical excellence
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="relative flex items-start">
                <div className="absolute left-2 sm:left-6 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-gray-900"></div>
                <div className="ml-8 sm:ml-20">
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                          Software Engineer Intern
                        </h3>
                        <p className="text-primary-600 dark:text-primary-400 font-medium">
                          Leapfrog Technology
                        </p>
                      </div>
                      <span className="bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 px-3 py-1 rounded-lg sm:rounded-full text-sm">
                        2022 May-July
                      </span>
                    </div>
                    <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                      <li>
                        • Built responsive landing pages from figma designs
                      </li>
                      <li>• Interactive Games with Vanilla JavaScript</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
