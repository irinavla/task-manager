import React from 'react';
import { Link } from 'react-router-dom';
import SignedinLinks from './SignedinLinks';
import SignedoutLinks from './SignedoutLinks';
import { connect } from 'react-redux';

const Navbar = (props) => {
  const { auth, profile } = props;
  const links = auth.uid ? <SignedinLinks profile={ profile } /> :<SignedoutLinks />;

  return (
    <nav className="nav-wrapper blue-grey">
      <div className="container">
        <Link to="/" className="brand-logo left">Task Manager</Link>
        { links }
      </div>
    </nav>
  )
}


const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Navbar);
