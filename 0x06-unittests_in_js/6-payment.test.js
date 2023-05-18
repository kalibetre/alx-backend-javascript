const assert = require('assert');
const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('promise resolves with success and value', (done) => {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        assert.deepStrictEqual(response, {
          data: 'Successful response from the API',
        });
        done();
      })
      .catch((error) => {
        done(error);
      });
  });
});
