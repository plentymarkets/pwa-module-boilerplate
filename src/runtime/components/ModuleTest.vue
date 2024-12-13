<template>
  <div class="my-5">
    <UiButton @click="addCounter()">{{ $t('moduleBoilerplate.button') }}</UiButton>
    <div>Composable useCart().data.sessionId: {{ cart.sessionId }}</div>
    <div>Counter: {{ counter }}</div>
  </div>
</template>

<script setup lang="ts">
import { usePwaBoilerplateCounter } from '../composables/usePwaBoilerplateCounter';
// import { ApiError } from '@plentymarkets/shop-api';
// import { useCar } from
// import {useCookie} from 'nuxt/app';

const { data: cart } = useCart();
const { counter, addCounter } = usePwaBoilerplateCounter();

console.log('cristi', cart.value.sessionId);
</script>
