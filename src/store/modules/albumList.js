import axios from "axios";

const state = {
  albumList: [],
};
const getters = {
  allAlbumLists: (state) => state.albumList,
};
const actions = {
  async fetchAlbumList({ commit }) {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/albums"
    );

    //console.log(response.data);
    commit("setAlbumList", response.data);
  },
  async addAlbum({ commit }, title) {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/albums",
      { title, computed: false }
    );
    commit("newAlbum", response.data);
  },
};
const mutations = {
  setAlbumList: (state, albums) => (state.albumList = albums),
  newAlbum: (state, album) => state.albumList.unshift(album),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
