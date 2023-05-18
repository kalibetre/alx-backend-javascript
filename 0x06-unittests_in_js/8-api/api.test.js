const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./api');

chai.use(chaiHttp);

describe('App', () => {
  describe('GET /', () => {
    it('should return a welcome message', (done) => {
      chai
        .request(app)
        .get('/')
        .end((err, res) => {
          chai.expect(res).to.have.status(200);
          chai.expect(res.text).to.equal('Welcome to the payment system');
          done();
        });
    });
  });
});
