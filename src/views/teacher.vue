<template>
  <div class="form-demo">
    <div class="flex justify-content-center align-items-center">
      <div class="card">
        <form class="p-fluid mx-auto p-6 border-round pt-5" id="form">
          <div class="field mt-6">
            <DataTable :value="state" responsiveLayout="scroll" dataKey="id">
              <Column field="teacherId" header="ID"></Column>
              <Column field="teacherName" header="教師名稱"></Column>
              <Column field="classRoomName" header="教師辦公室"></Column>
              <Column>
                <template #body="{ state }">
                  <span>{{ state }}</span>
                  <router-link to="/classRoom" style="text-decoration: none">
                    <Button
                      label="查看"
                      class="p-button-raised p-button-rounded"
                  /></router-link>
                </template>
              </Column>
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
  .get("http://10.20.1.97:8090/api/teacher/get")
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
