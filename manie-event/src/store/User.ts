import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { UserModel } from '../models/UserModel';

export const useUserStore = defineStore('user', () => {
  const user = ref<UserModel>()


  return { user }
});
