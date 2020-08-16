import React, { Component } from 'react';
import Logo from '../../assets/images/share-logo.png';
import Mail from '../../assets/images/message.svg';
import AppleIcon from '../../assets/images/company.svg';
import PlayStore from '../../assets/images/playstore.svg';
import { Link } from 'react-router-dom';
import './home.scss';

export class HomePage extends Component {
  render() {
    return (
      <div className="container-fluid home-view">
        <section className="header">
          <div className="row">
            <div className="col-6">
              <img src={Logo} alt="logo" className="logo-image" />
            </div>
            <div className="col-6 menu-links">
              <p>
                <Link to="/login">Login</Link> /{' '}
                <Link to="/signup">SignUp</Link>
              </p>
            </div>
          </div>
        </section>
        <section className="body">
          <div className="row">
            <div className="col-5 text-part">
              <h1>SHARE IT.</h1>
              <h5>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Consectetu,et feugiat nibh. Nec platea mauris cras neque integer
                nec ac aliquam qua venenatis in sit tempus. A ultrices vitae
                nunc nisl.
              </h5>
            </div>
            <div className="col-7">
              <img src={Mail} alt="mail-img" className="side-mail-img" />
            </div>
          </div>
        </section>
        <section className="download-buttons">
          <div className="row">
            <div className="col-9"></div>
            <div className="col-3">
              <button type="button" className="btn btn-secondary btn-apple">
                <img src={AppleIcon} className="apple-icon" alt="apple-icon" />
                <p>
                  <span className="sub-text">Download on the</span>
                  <span className="text">App Store</span>
                </p>
              </button>
              <button type="button" className="btn btn-secondary btn-android">
                <img src={PlayStore} className="apple-icon" alt="apple-icon" />
                <p>
                  <span className="sub-text">Get it on</span>
                  <span className="text">Google Play</span>
                </p>
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
