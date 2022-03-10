import React from 'react';
import AuthenticationButton from '../Auth0/Auth0InOutButton/Auth0InOut';
import NavBar from '../NavBar/NavBar';
import H1 from '../Global/H1/H1';
import { Link } from 'react-router-dom';
import Logo from '../Global/Logo/Logo';
import css from './sustainability.module.css';
import { useAuth0 } from '@auth0/auth0-react';
import SignupButton from '../Auth0/Auth0SignUpButton/Auth0SignUp';

function Sustainability() {
  const { isAuthenticated } = useAuth0();
  if (isAuthenticated) {
    return (
      <div className={css.displayContainer} data-testid="list-item">
        <div className={css.box}>
          <div className={css.logoItem}>
            <div className={css.logo}>
              <Link to="/">
                <Logo />
              </Link>
            </div>
          </div>
          <div className={css.pinkButtons}>
            <div className={css.logInButton}>
              <AuthenticationButton />
            </div>
            {/* <div className={css.signUpButton}>
              <SignupButton />
            </div> */}
            <div className={css.navBar}>
              <NavBar />
            </div>
          </div>
        </div>
        <div className={css.browse}>
          <H1 text="Sustainability" />
        </div>
        <div className={css.background}>
          <div className={css.headingContainer}>
            <div className={css.heading}>
              <p>Product Information</p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className={css.displayContainer} data-testid="list-item">
        <div className={css.box}>
          <div className={css.logoItem}>
            <div className={css.logo}>
              <Link to="/">
                <Logo />
              </Link>
            </div>
          </div>
          <div className={css.pinkButtons}>
            <div className={css.logInButton}>
              <AuthenticationButton />
            </div>
            <div className={css.signUpButton}>
              <SignupButton />
            </div>
            <div className={css.navBar}>
              <NavBar />
            </div>
          </div>
        </div>
        <div className={css.browse}>
          <H1 text="Sustainablity" />
        </div>
        <div className={css.background}>
          <div className={css.headingContainer}>
            <div className={css.heading}>
              <p>Product Information</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Sustainability;
