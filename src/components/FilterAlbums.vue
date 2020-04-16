<template>
  <div>
    Filter Albums:
    <select @change="filterAlbums($event)">
        <option value="200">200</option>
        <option value="100">100</option>
        <option value="50">50</option>
        <option value="20">20</option>
        <option value="10">10</option>
        <option value="5">5</option>

    </select>
  </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
  name: "FilterAlbums",
  methods:mapActions(["filterAlbums"])
  
};
</script>

<style>
select{
    margin-top:20px;
    padding:6px;
    border:rgb(26, 20, 46) 1px solid;
}
</style>
