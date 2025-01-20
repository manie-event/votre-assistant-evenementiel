<template>
  <div>
    <h1>Espace Personnel</h1>
    <PersonalInfo />
  </div>
</template>
<script setup lang="ts">
import PersonalInfo from "@/components/Dashboard/PersonalInfo.vue";
import { onMounted } from "vue";
import { useUser } from "@/composables/UseUser";

const { setUserInfo } = useUser();

onMounted(() => {
  setUserInfo();
});
</script>
