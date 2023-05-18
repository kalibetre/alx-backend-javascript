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

  it('does not resolve with failure and value', (done) => {
    assert.equal(getPaymentTokenFromAPI(false), undefined);
    done();
  });

  it('promise resolves with success and value - with chai', () => {
    getPaymentTokenFromAPI(true).then((response) => {
      expect(response).to.deep.equal({
        data: 'Successful response from the API',
      });
    });
  });
});
