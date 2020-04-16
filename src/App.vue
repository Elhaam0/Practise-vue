<template>
  <div id="app">
    <div class="container">
      <addAlbum/>
      <AlbumList />
    </div>
  </div>
</template>

<script>
import AlbumList from "./components/AlbumList.vue";
import AddAlbum from "./components/AddAlbum.vue";

export default {
  name: "App",
  components: {
    AlbumList ,
    AddAlbum,
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
