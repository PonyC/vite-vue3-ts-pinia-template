<script setup lang="ts">
import { Account } from '@/api/index';
import { onMounted } from 'vue';

onMounted(async () => {
  try {
    const data = await Account.getCurrent();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
});
</script>

<template>
  <RouterView />
</template>

<style></style>
