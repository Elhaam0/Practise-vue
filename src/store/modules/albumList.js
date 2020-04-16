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
  async deleteAlbum({ commit }, id) {
    
    await axios.delete(`https://jsonplaceholder.typicode.com/albums/${id}`)
    .then(() =>console.log("delete album " + {id}))
    .catch((e)=>console.log(e))

    commit("removeAlbum", id);
  },
  async filterAlbums({commit},e){
    const limit = parseInt(e.target.options[e.target.options.selectedIndex].innerText);
    const response = await axios.get(`https://jsonplaceholder.typicode.com/albums?_limit=${limit}`);
    commit("setAlbumList", response.data);
  }
};

const mutations = {
  setAlbumList: (state, albums) => (state.albumList = albums),
  newAlbum: (state, album) => state.albumList.unshift(album),
  removeAlbum: (state, id) =>
    (state.albumList = state.albumList.filter((album) => album.id !== id)),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
