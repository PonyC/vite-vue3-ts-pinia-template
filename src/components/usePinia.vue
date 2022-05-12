<template>
  <div>
    <div>{{ userStore.name }}</div>
    <input v-model="userName" />
    <button @click="updateName">Pinia更新用户名</button>
  </div>
</template>

 
<script lang="ts" setup>
import { useUserStore } from '@/store/user';
import { ref } from 'vue';

const userStore = useUserStore();
let userName = ref('');

const updateName = () => {
  userStore.updateName(userName.value);
};
</script>
