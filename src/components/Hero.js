import PropTypes from "prop-types";

const Hero = ({ title }) => {
  return (
    <section className="section-hero">
      <h2 className="section-hero_title">{title}</h2>
      <p className="section-hero_info">
        A social betting network where you can follow tipsters, share and copy{" "}
        <br />
        bets from our community & friends.
      </p>
    </section>
  );
};

Hero.defaultProps = {
  title: `We are Launching in`,
};

Hero.propTypes = {
  title: PropTypes.string,
};

export default Hero;
