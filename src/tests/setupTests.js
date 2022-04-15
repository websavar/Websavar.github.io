/**
 * @file Tests setup.
 */
import 'core-js/stable';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import 'regenerator-runtime/runtime'

global.window.env = {
  REACT_APP_BASE_URL: '/',
  mocks: true,
  mockDelay: 2000
};

const nodeCrypto = require('crypto');
global.crypto = nodeCrypto;

jest.setTimeout(30000);