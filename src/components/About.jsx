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
            Fullstack Engineer with a deep specialization in frontend systems
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            {/* Stat strip */}
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-50 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-800 text-primary-700 dark:text-primary-400 text-sm font-semibold">
                <span className="text-base">4+</span> Years Experience
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-50 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-800 text-primary-700 dark:text-primary-400 text-sm font-semibold">
                Frontend Lead
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-50 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-800 text-primary-700 dark:text-primary-400 text-sm font-semibold">
                Fullstack
              </span>
            </div>

            {/* Bio */}
            <div className="space-y-5">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Over 4 years, I have owned features end-to-end across complex
                production systems — from designing frontend architectures and
                reusable component libraries to building REST APIs with Django
                and Express, designing schemas, and tuning performance with
                PostgreSQL.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I have led frontend efforts, mentored developers, and raised
                engineering standards through structured code reviews and
                documented patterns. Beyond code, I care about the full
                picture — system design, performance, scalability, and the
                developer experience of teams I work with.
              </p>
            </div>

            {/* Focus areas */}
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                Key Focus Areas
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  "Frontend Architecture",
                  "State Management",
                  "REST API Design",
                  "Performance & Scalability",
                  "Schema Design",
                  "CI/CD & Code Quality",
                ].map((area) => (
                  <div
                    key={area}
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-300 text-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500 dark:bg-primary-400 shrink-0"></span>
                    {area}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skill cards */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
              <i className="fa-brands fa-react text-4xl text-primary-600 dark:text-primary-400 mb-4"></i>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                React / Next.js
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                UI framework
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
              <i className="fa-brands fa-python text-4xl text-primary-600 dark:text-primary-400 mb-4"></i>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Django / Express
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Backend framework
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
              <i className="fa-brands fa-css3-alt text-4xl text-primary-600 dark:text-primary-400 mb-4"></i>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                TypeScript
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Type safety
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
              <i className="fa-solid fa-database text-4xl text-primary-600 dark:text-primary-400 mb-4"></i>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                PostgreSQL / MongoDB
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
