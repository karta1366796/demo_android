<template>
  <div class="about">
    <h1>This is an about page</h1>
    {{ state }}
  </div>
</template>

<script setup>
import { ref } from "vue";

import axios from "axios";

const state = ref("");

axios
  .get("http://10.20.1.97:8090/api/course/getByUser/")
  .then(function (response) {
    console.log(response.data);
    state.value = response.data;
  })
  .catch((response) => {
    console.log(response);
  });
</script>
