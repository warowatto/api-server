import rest from './rest';

describe('REST TEST', () => {
  before(() => {
    console.log('테스트 시작');
  });

  rest('루트', 'get', '/');
  rest('v1', 'get', '/v1/user');

  after(() => {
    console.log('테스트 종료');
  });
});
