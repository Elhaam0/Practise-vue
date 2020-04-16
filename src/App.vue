<template>
  <div id="app">
    <div class="container">
      <FilterAlbums />
      <addAlbum />
      <AlbumList />
    </div>
  </div>
</template>

<script>
import AlbumList from "./components/AlbumList.vue";
import AddAlbum from "./components/AddAlbum.vue";
import FilterAlbums from "./components/FilterAlbums";

export default {
  name: "App",
  components: {
    AlbumList,
    AddAlbum,
    FilterAlbums,
  },
};
</script>

<style>
body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 1.6;
  background: #acb8a5f6;
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
