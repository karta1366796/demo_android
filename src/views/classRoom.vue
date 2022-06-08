<template>
  <div class="form-demo">
    <div class="flex justify-content-center align-items-center">
      <div class="card">
        <form class="p-fluid mx-auto p-6 border-round pt-5" id="form">
          <div class="field mt-6">
            <DataTable :value="state" responsiveLayout="scroll" dataKey="id">
              <Column field="classId" header="ID"></Column>
              <Column field="className" header="課程名稱"></Column>
            </DataTable>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";

const state = ref("");
axios
  .get("http://10.20.1.97:8090/api/classRoom/get")
  .then(function (response) {
    console.log(response.data);
    state.value = response.data;
  })
  .catch((response) => {
    console.log(response);
  });
</script>
<style lang="scss" scoped>
</style>
