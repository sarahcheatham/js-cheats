import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import HomeCard from '../HomeCard/HomeCard';
import { Row, Col } from 'reactstrap';

const Home = (props) => {
  const loggedOutContent = <p><Link to="/register">Register</Link> or <Link to="/login">Log in</Link> to see the Posts!</p>;
  const loggedInContent = <p>Have any questions? Check out our <Link to="/posts">Blog!</Link></p>;

  return (
    <div className="container">
      <h1>Javascript Bible</h1>
      <ul> And on the 7th day he said let there be cheats - Genesis 1:27 </ul>

      <hr/>
      {props.auth.isAuthenticated ? loggedInContent : loggedOutContent}
      <Row>
        <Col>
          <Link to="/strings"><HomeCard title={'strings'} description={'Become boss at javascript strings'} /></Link>
        </Col>
        <Col>
          <Link to="/arrays"><HomeCard title={'arrays'} description={'Become boss at javascript arrays'} /></Link>
        </Col>
        <Col>
          <Link to="/numbers"><HomeCard title={'numbers'} description={'Become boss at javascript numbers'} /></Link>
        </Col>
      </Row>
    </div>
  );
};

Home.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps
)(Home);