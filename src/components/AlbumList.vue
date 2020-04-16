<template>
  <div>
    <h3>
      AlbumList
    </h3>
    <div class="albumlist">
      <div v-for="album in allAlbumLists" :key="album.id" class="album">
        {{ album.title }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters , mapActions } from "vuex";

export default {
  name: "AlbumList",
  computed: mapGetters(["allAlbumLists"]),
  created(){
    this.fetchAlbumList();
  },
  methods:{
    ...mapActions(['fetchAlbumList']),
  }
};
</script>

<style scoped>
.albumlist {
  display: grid;
  grid-template-columns: repeat(3,1fr);
  grid-gap: 1rem;
}
.album{
  border:1px solid rgb(76, 83, 1);
  background: #2e9945;
  padding :1rem;
  border-radius:5px;
  text-align: center;
  position:relative;
  cursor: pointer;
}
</style>
