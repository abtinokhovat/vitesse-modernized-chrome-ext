<template>
  <main class="flex justify-center items-center px-4 py-5 text-center text-gray-700 dark:text-gray-200">
    <div>
      <img src="/assets/icon.svg" class="icon-btn mx-2 text-2xl" />
      <div>Override</div>
      <p class="mt-2 opacity-50">
        {{ $t('override.desc') }}
      </p>
      <button class="btn mt-2" @click="openOptionsPage">
        {{ $t('override.open_options') }}
      </button>

      <Footer />

      <div class="mt-2">
        <span class="opacity-50">{{ $t('override.storage') }}:</span> {{ storageDemo }}
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { storageDemo } from '~/logic/storage'

function openOptionsPage() {
  chrome.runtime.openOptionsPage()
}
</script>
