<template>
  <div class="personal-info">
    <div v-if="user">
      <h3>{{ user.nomComplet }}</h3>
      <h3>{{ user.email }}</h3>
      <h3>{{ user.telephoneNumber }}</h3>
      <h3>{{ fullAdress }}</h3>
      <h3>{{ user.dateNaissance }}</h3>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from "@/store/User";
import BaseCard from "@/commun/BaseCard.vue";
import { useUser } from "@/composables/UseUser";
import { storeToRefs } from "pinia";
import { onMounted, computed } from "vue";

const { user } = storeToRefs(useUserStore());
const fullAdress = computed(() => {
  return `${user.value.adresse} ${user.value.codePostal} ${user.value.ville}, ${user.value.pays}`;
});
</script>
