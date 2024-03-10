<template lang="">
       <ul class="mb-8 mt-8">
            <li  v-for="text in data" :key="text" class="mb-5 leading-normal text-[10px] text-left sm:text-lg font-normal tracking-[-1px] flex text-white">
                <span class="me-3 sm:me-7 pt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13"
                        fill="none">
                        <path d="M12 6.5L0.75 12.9952L0.750001 0.00480889L12 6.5Z" fill="#E5C140" />
                    </svg>
                </span>
               {{text}}
            </li>
       </ul>
</template>
<script setup>
const props = defineProps({
    data: Array
});
</script>
