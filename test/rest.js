import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/app';

chai.use(chaiHttp);

const defaultOptions = {
  headers: {},
  params: {}
};

export default function(name, method, url, options = defaultOptions) {
  return it(name, () => {
    chai
      .request(app)
      [method](url)
      .set(options.headers || {})
      .send(options.params || {})
      .end((err, res) => {
        if (err) throw err;

        const { status } = res;
        const success = status >= 200 && status < 300;

        chai.assert.isOk(success, status);
      });
  });
}
