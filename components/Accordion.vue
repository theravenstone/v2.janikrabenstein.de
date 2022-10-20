<template>
    <div class="bg-gray-100 dark:bg-gray-800">
      <button @click="toggleAccordion()" class="flex justify-between space-x-3 w-full p-3 rounded-lg" :aria-expanded="isOpen"
        :aria-controls="`collapse${_uid}`">
        <slot name="title" />
        <div class="transition-all duration-200 transform self-center" :class="{ 'rotate-180': isOpen, 'rotate-0': !isOpen, }">
          <i class="fa-solid fa-chevron-down"></i>
        </div>
      </button>
  
      <div v-show="isOpen" :id="`collapse${_uid}`" class="p-3">
        <slot name="content" />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isOpen: false,
      };
    },
  
    methods: {
      toggleAccordion() {
        this.isOpen = !this.isOpen;
      },
    },
  };
  </script>