/*
 * React.js Starter Kit
 * Copyright (c) 2014 Konstantin Tarkus (@koistya), KriaSoft LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

'use strict';

import React from 'react';

var Navbar = React.createClass({

  componentDidMount() {
   (function($){
    $(function(){
      $('.button-collapse').sideNav();
    }); 
  })(jQuery);
  },

  render() {
    return (
        
      /* jshint ignore:start */
  <div className="navbar">
      <div className="top-nav--home">
          
      <ul id="nav-mobile" className="fixed side-nav">
        <li className="logo">
          <a id="logo-container" href="http://www.bits-pilani.ac.in" className="brand-logo">
            <img src="images/logo-small.png" width="125" height="125" alt="BITS Pilani Logo" />
          </a>
        </li>
        <li className="bold active"><a href="/" className="waves-effect waves-orange"><i className="small mdi-action-home"></i> Home</a></li>
        <li className="bold"><a href="/swd-services" className="waves-effect waves-orange"><i className="small mdi-action-stars"></i> SWD Services</a></li>
        <li className="bold"><a href="/csa" className="waves-effect waves-orange"><i className="small mdi-social-people"></i> CSA</a></li>
        <li className="bold"><a href="/activity-center" className="waves-effect waves-orange"><i className="small mdi-maps-local-attraction"></i> Activity Center</a></li>
        <li className="bold"><a href="/anti-ragging" className="waves-effect waves-orange"><i className="small mdi-action-assignment"></i> Anti Ragging</a></li>
        <li className="bold"><a href="/migration-form" className="waves-effect waves-orange"><i className="small mdi-action-receipt"></i> Migration Form</a></li>
        <li className="bold"><a href="/contact" className="waves-effect waves-orange"><i className="small mdi-action-perm-contact-cal"></i> Contact Us</a></li>    
      </ul>
    </div>

    <header>
      <nav className="top-nav--home">
        <div className="container">
          <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="mdi-navigation-menu"></i></a>
        </div>    
      </nav>
      <ul id="nav-mobile" className="fixed side-nav">
        <li className="logo">
          <a id="logo-container" href="http://www.bits-pilani.ac.in" className="brand-logo">
            <img src="images/logo-small.png" width="125" height="125" alt="BITS Pilani Logo" />
          </a>
        </li>
        <li className="bold active"><a href="/" className="waves-effect waves-orange"><i className="small mdi-action-home"></i> Home</a></li>
        <li className="bold"><a href="/swd-services" className="waves-effect waves-orange"><i className="small mdi-action-stars"></i> SWD Services</a></li>
        <li className="bold"><a href="/csa" className="waves-effect waves-orange"><i className="small mdi-social-people"></i> CSA</a></li>
        <li className="bold"><a href="/activity-center" className="waves-effect waves-orange"><i className="small mdi-maps-local-attraction"></i> Activity Center</a></li>
        <li className="bold"><a href="/anti-ragging" className="waves-effect waves-orange"><i className="small mdi-action-assignment"></i> Anti Ragging</a></li>
        <li className="bold"><a href="/migration-form" className="waves-effect waves-orange"><i className="small mdi-action-receipt"></i> Migration Form</a></li>
        <li className="bold"><a href="/contact" className="waves-effect waves-orange"><i className="small mdi-action-perm-contact-cal"></i> Contact Us</a></li>
      </ul>
    </header>
  </div>
      /* jshint ignore:end */
    );
  }

});

module.exports = Navbar;
