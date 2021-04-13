import wepy from '@wepy/core'
import {login, logout, refresh, register} from '@/api/auth'
import * as auth from '@/utils/auth'
import isEmpty from 'lodash/isEmpty'

const getDefaultState = () => {
  return {
    user: auth.getUser(),
    accessToken: auth.getToken(),
    accessTokenExpiredAt: auth.getTokenExpiredAt()
  }
}

const state = getDefaultState();

// 定义getters
var getters = {
  isLoggedIn: state => !isEmpty(state.accessToken),
  user: state => state.user,
  accessToken: state => state.accessToken,
  accessTokenExpiredAt: state => state.accessTokenExpiredAt
}

// 定义 actions
const actions = {
  async login ({ dispatch, commit }, params = {}) {
    const loginData = await wepy.wx.login()
    params.code = loginData.code

    const authResponse = await login(params)

    commit('setToken', authResponse.data)
    auth.setToken(authResponse.data)
  },
  async register ({dispatch}, params = {}) {
    const loginData = await wepy.wx.login()
    params.code = loginData.code
    await register(params)
    await dispatch('login')
  }
}

// 定义mutations
const mutations = {
  setUser(state, user) {
    state.user= user
  },
  setToken(state, tokenPayLoad) {
    state.accessToken = tokenPayLoad.access_token
    state.accessTokenExpiredAt = new Date().getTime() + tokenPayLoad.expires_in * 1000
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}