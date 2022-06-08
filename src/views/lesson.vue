<template>
  <div class="form-demo">
    <div class="flex justify-content-center align-items-center">
      <div class="card">
        <form class="p-fluid mx-auto p-6 border-round pt-5" id="form">
          <div class="field mt-6">
            <DataTable :value="state" responsiveLayout="scroll" dataKey="id">
              <Column field="teachNmae" header="教師名稱"></Column>
              <Column field="lesson_index" header="ID"></Column>
              <Column field="lesson_credit" header="課程學分"></Column>
              <Column>
                <template #body="{ state }">
                  <span>{{ state }}</span>
                  <router-link to="/teacher" style="text-decoration: none">
                  <Button
                    label="查看"
                    class="p-button-raised p-button-rounded"
                  /></router-link>
                </template>
              </Column>
            </DataTable>
          </div>
        </form>
        {{state}}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";

const state = ref("");
axios
  .get("http://10.20.1.97:8090/api/lesson/list")
  .then(function (response) {
    console.log(response.data.lessonResponseList);
    state.value = response.data.lessonResponseList;
  })
  .catch((response) => {
    console.log(response);
  });
</script>
<style lang="scss" scoped>
</style>
