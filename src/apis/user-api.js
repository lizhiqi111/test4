import { API_ROOT } from '@/config';
import { get, post, patch } from '@/libs/http';

export default {
  // 登录
  async login(data) {
    const res = await post(
      `${API_ROOT}/api/v2/user_server/auth/login`,
      data
    ).catch((e) => throw e);
    return res;
  },
  // 获取用户登录菜单
  async getUserMenu() {
    const res = await get(`${API_ROOT}/api/v2/user_server/me/menus`).catch(
      (e) => throw e
    );
    return res;
  },
  // 获取用户信息
  async getUserInfo() {
    const res = await get(`${API_ROOT}/api/v2/user_server/me`).catch(
      (e) => throw e
    );
    return res;
  },
  // 更新用户信息
  async updateUserInfo(data) {
    const res = await patch(`${API_ROOT}/api/v2/user_server/me`, data).catch(
      (e) => throw e
    );
    return res;
  },
  // 更改用户密码
  async updateUserPassword(data) {
    const res = await post(
      `${API_ROOT}/api/v2/user_server/me/password`,
      data
    ).catch((e) => throw e);
    return res;
  },
  async getUserRights(params) {
    const res = await post(
      `${API_ROOT}/api/v2/user_server/auth/encrypt/sys/login`,
      params
    ).catch((e) => throw e);
    return res;
  },
  // 获取系统安全码
  // clientSessionId	xxxxx	string	当前请求SESSION 唯一性值
  // t	123456789	int	请求当前时间戳。与服务器时间超出3分钟，算非法请求！
  // client	xxxxx	string	请求客户端来源：front、manage、pc、android、pad、ios、ipad
  // encrypt	xxxxx	string	请求安全校验签名
  async getSafeCode(params) {
    const res = await get(`/api/v2/system_server/sys/safe/code`, params).catch(
      (e) => {
        throw e;
      }
    );
    return res;
  },
  async logout() {
    const res = await get('/api/v2/system_server/logout').catch((e) => {
      throw e;
    });
    return res;
  },
};
