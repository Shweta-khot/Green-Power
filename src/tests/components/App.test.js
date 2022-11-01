/**
 * © 2022 Boston Consulting Group
 * Gamma D
 * Pardeep
 * Created: 2022-09-29
 */

// Add third-party dependencies.
import ReactDOM from 'react-dom';

// Add local dependencies.
import App from '../../components/App/index';

// Add test suite.
describe('<App /> suite', () => {
  test('Renders to DOM', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
});
