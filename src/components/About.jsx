const About = () => {
  return (
    <section className="about" id="about">
      <div className="container about__wrapper">
        <h2 className="about__title text-center">About Me </h2>
        <div className="about__info">
          <div className="hero-right" aria-hidden>
            <div className="card profile-card">
              <div className="avatar">NK</div>
              <div className="meta">
                <div className="name">Nabin Khadka</div>
                <div className="role">Senior Frontend Engineer</div>
              </div>

              <div className="tech-pill-grid">
                <span
                  className="pill"
                  style={{ borderColor: "var(--clr-react)" }}
                >
                  React
                </span>
                <span
                  className="pill"
                  style={{ borderColor: "var(--clr-react)" }}
                >
                  Nextjs
                </span>
                <span className="pill" style={{ borderColor: "var(--clr-js)" }}>
                  TypeScript
                </span>
                <span className="pill" style={{ borderColor: "var(--clr-js)" }}>
                  Redux
                </span>
                <span className="pill" style={{ borderColor: "var(--clr-js)" }}>
                  Tailwindcss
                </span>
                <span
                  className="pill"
                  style={{ borderColor: "var(--clr-node)" }}
                >
                  Node
                </span>
                <span
                  className="pill"
                  style={{ borderColor: "var(--clr-mongo)" }}
                >
                  Mongo
                </span>
              </div>

              <div className="mini-stats">
                <div>
                  <div className="num">3.5+</div>
                  <div className="lbl">Years</div>
                </div>
                <div>
                  <div className="num">Platform Impacted</div>
                  <div className="lbl">EdTech, OCR, Ecommerce</div>
                </div>
              </div>
            </div>
          </div>
          <div className="about__info--details ">
            <p>
              I am a Frontend Developer with over 3.5 years of experience
              building fast, accessible, and maintainable web applications. I
              specialize in the React and Next.js ecosystem and focus on
              crafting component-driven architectures that scale across teams
              and products. I drive performance improvements, accessibility
              audits, and developer productivity through clean abstractions and
              documented patterns. I enjoy mentoring developers, running
              meaningful code reviews, and creating a culture of high
              engineering standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
