import {
  test
} from '../api';
import request from '../app.service';

export function list(params) {
  return request.get(test.list, {
    params
  });
}

export function info(id) {
  return request.get(`${test.info}/${id}`);
}

export function update(data) {
  return request.post(test.update, {
    ...data
  });
}

export function del(id) {
  return request.post(`${test.info}/${id}`);
}


export const vip = {
  list(params) {
    return request.get(test.list, {
      params
    });
  }
};
