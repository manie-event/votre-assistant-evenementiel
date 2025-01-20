<template>
  <div class="personal-info">
    <base-card>
      <div v-for="user in UserInfo" :key="user.id"></div>
    </base-card>
  </div>
</template>

<script setup lang="ts">
import baseCard from "@/commun/BaseCard.vue";

onMounted(())
</script>
