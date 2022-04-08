/**
 * @file Tests setup.
 */
import 'core-js/stable';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import 'regenerator-runtime/runtime'
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

global.window.env = {
  REACT_APP_BASE_URL: '/',
  mocks: true,
  mockDelay: 2000
};

global.navigator = {
  userAgentData: 'node'
}

const nodeCrypto = require('crypto');
global.crypto = nodeCrypto;

jest.setTimeout(30000);