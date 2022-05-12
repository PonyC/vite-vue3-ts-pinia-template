import request from '../instance';

// 获取当前员工详情
const getCurrent = (params?: any) => {
  return request({
    method: 'get',
    url: '',
    params,
  });
};

export default {
  getCurrent,
};
