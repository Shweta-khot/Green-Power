/**
 * © 2022 Boston Consulting Group
 * Gamma D
 * Pardeep
 * Created: 2022-10-12
 */

const NavPrimaryOptions = [
  {"name": "Home", "path": "/"},
  {"name": "History", "path": "/history"},
  {"name":"Forecast", "path": "/forecast"},
];

const NavChildOptions = [
  [],
  [],
  [],
];

/**
 * Nav constants
 */
class NavConstants {
  static instance;
  navPrimaryOptions =  NavPrimaryOptions
  navChildOptions =  NavChildOptions
  

  static getInstance() {
    if (!NavConstants.instance) {
      NavConstants.instance = new NavConstants();
    }

    return NavConstants.instance;
  }
}

export default NavConstants.getInstance();
