/**
 * 默认gupack test 会采用 Mocha 进行用例测试
 * 也可以使用 jest 进行测试
 */

'use strict';

const axios = require('axios');
const expect = require('expect');

describe('#Login test', function() {
  it('login test...', async () => {
    expect.assertions(1);
    const result = await fetchTest();
    expect(result).not.toBe('Error');
  });
});

describe('#String test', function() {
  it('test ... ', () => {
    expect('a').toBe('A'.toLowerCase());
  });
});

function fetchTest() {
  // has http require
  return new Promise(
    resolve => {
      setTimeout(() => {
        resolve('Sueccess');
      }, 3);
    },
    reject => {
      reject('Error');
    }
  );
}
