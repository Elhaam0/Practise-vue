<template>
  <div>
    <h3>
      Add Album
    </h3>
    <div class="add">
      <form @submit="OnSubmit">
        <input type="text" v-model="title" placeholder="Add Album ..." />
        <input type="submit" value="Submit" />
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AddAlbum",
  data(){return {
      title:''
  }},
  methods:{
    ...mapActions(['addAlbum']),
    OnSubmit(e){
        e.preventDefault();
        this.addAlbum(this.title);
    }
  }
};
</script>

<style scoped>
form {
  display: flex;
}
input[type="text"] {
  flex: 10;
  padding: 10px;
  border: 1px solid #716b8a;
  outline: 0;
}

input[type="submit"] {
  flex: 2;
  background-color: #716b8a;
  color: #fff;
  border: 1px #716b8a solid;
  cursor: pointer;
}
</style>
