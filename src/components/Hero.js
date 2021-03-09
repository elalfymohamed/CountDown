import PropTypes from "prop-types";
import Time from "./Time";

const Hero = ({ title }) => {
  return (
    <section className="section-hero">
      <h2 className="section-hero_title">{title}</h2>
      <p className="section-hero_info">
        A social betting network where you can follow tipsters, share and copy{" "}
        <br />
        bets from our community & friends.
      </p>
      <Time />
      <div className="section-hero_form">
        <form>
          <input
            type="email"
            placeholder="Your email..."
            className="section-hero_form_email"
          />
        </form>
        <div className="page-header_info">
          <a href="/" className="page-header_signup">
            Sign up
          </a>
        </div>
      </div>
    </section>
  );
};

Hero.defaultProps = {
  title: `We are launching in`,
};

Hero.propTypes = {
  title: PropTypes.string,
};

export default Hero;
