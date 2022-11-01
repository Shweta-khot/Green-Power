/**
 * © 2022 Boston Consulting Group
 * Gamma D
 * Pardeep
 * Created: 2022-09-29
 */

// Add local dependencies.
import typography from './typography';

/**
 * Create Material-UI global theme.
 * @param {Object} - Theme options.
 * @returns {Object} Theme.
 */
const themeCodal = {
  palette: {
    mode: 'light',
    primary: {
      light: 'rgb(80, 70, 229)',
      main: '#003741',
    },
    secondary: {
      main: 'rgb(223, 231, 255)', // #dfe7ff
    },
    error: {
      main: 'rgb(240, 20, 47)', // #f0142f
    },
    success: {
      main: 'rgb(6, 165, 97)', // #06a561
    },
    warning: {
      main: 'rgb(249, 150, 0)', // #f99600
    },
    info: {
      main: '#005661',
    },
    background: {
      application: 'rgb(0, 55, 65)', // #003741
    },
    action: {
      default: 'rgb(0, 86, 97)', // #005661
      hover: '#337F9E',
      active: 'rgb(76, 64, 208)', // #4c40d0
      disabled: 'rgb(215, 219, 236)', // #d7dbec
    },
    text: {
      contrast: '#FFF',
      main: '#374151',
      secondary: '#738199',
    },
    grey: {
      main: '#E5E7EB',
      light: '#F5F6FA',
      lightWarm: '#FBFBFB',
      dark: '#4B5563',
    },
    blue: {
      light: '#E7EFFD',
      dark: '#196EEF',
    },
  },
  typography,
  boxShadow: {
    main: '0 1px 3px 0 rgba(16,24,40,0.1), 0 1px 2px 0 rgba(16,24,40,0.06)',
  },
};

// Export theme.
export default themeCodal;
