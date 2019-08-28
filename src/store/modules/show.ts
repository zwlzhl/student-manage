import { getShow } from "../../service/index";
const state = {
  lists: []
};
const mutations = {
  showRess(state, payload) {
  state.lists=payload
}
};
const actions = {
  async getShow({ commit }, payload) {
      let data = await getShow(payload);
      console.log(data)
      commit("showRess", data);
  }
};

export default {
  namespaced:"show",
  state,
  actions,
  mutations
};