<template>
    <div v-if="isOpenModalForm && !toggleModalRef" class=" fixed h-full w-full left-0 right-0 bottom-0 flex justify-center
    before:content before:w-full before:h-full before:absolute before:bg-[#000000c8]
    ">
        <div
            class="px-5 h-max top-28 sm:top-32 sm:px-16 pt-10 sm:pt-16 rounded-3xl sm:rounded  pb-5 sm:pb-11 w-[90%] sm:max-w-[798px] bg-white relative">
            <h2 class=" text-sm sm:text-2xl font-normal text-[#24262A] text-center mb-8">
                АНКЕТА ДЛЯ ЗВОРОТНЬОГО ЗВ’ЯЗКУ
            </h2>
            <form>
                <div class="mb-3 sm:mb-6">
                    <input type="email" id="email" name="email" placeholder="ІМ’Я"
                        class=" text-xs font-medium px-4 w-full rounded-full h-10 sm:h-[50px] bg-[#E0E0E0]">
                </div>
                <div class="mb-3 sm:mb-6">
                    <input type="email" id="email" name="email" placeholder="TELEGRAM"
                        class="text-xs font-medium px-4 w-full rounded-full h-10 sm:h-[50px] bg-[#E0E0E0]">
                </div>
                <div class="mb-6 sm:mb-8">
                    <input type="email" id="email" name="email" placeholder="тривалість програми"
                        class="text-xs font-medium px-4 w-full rounded-full h-10 sm:h-[50px] bg-[#E0E0E0]">
                </div>
                <div class="text-center">
                    <button type="button"
                        class="text-white rounded-full uppercase bg-[#18191C] w-full max-w-[350px] h-11 sm:h-12"
                        @click="handleSubmit">
                        ВІДПРАВИТИ
                    </button>
                </div>
            </form>
        </div>
    </div>

    <div v-if="toggleModalRef && isOpenModalForm" class=" fixed h-full w-full left-0 right-0 bottom-0 flex justify-center
    before:content before:w-full before:h-full before:absolute before:bg-[#000000c8]
    ">
        <div
            class="px-5 top-28 sm:top-32  h-max sm:px-12 pt-[40px] sm:pt-16 pb-5 sm:pb-9 rounded-3xl sm:rounded w-[90%] sm:max-w-[797px] bg-white relative">
            <div
                class="mx-auto w-[90px] h-[90px] sm:w-[146px] sm:h-[146px] bg-primary rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="76" height="52" viewBox="0 0 76 52" fill="none"
                    class="w-[50px] sm:w[76px]">
                    <path d="M2.33301 23.7457L27.0246 48.3334L73.8886 1.66669" stroke="white" stroke-width="4" />
                </svg>
            </div>
            <p class=" text-xs sm:text-base uppercase text-center mt-10 mx-auto sm:mt-20 mb-8 mx-w-[500px]">
                Ваше звернення було успішно відправлене.
                МЕНЕДЖЕР зв’яжЕТЬСЯ з вами НАЙБЛИЖЧИМ ЧАСОМ.
            </p>
            <div class="text-center">
                <button type="button" @click="closeModal"
                    class="text-white rounded-full text-sm uppercase bg-[#18191C] w-full max-w-[350px] h-12">
                    НА ГОЛОВНУ
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>

import { ref, defineEmits, defineProps } from "vue";

const emit = defineEmits(["close-modal"]);
const toggleModalRef = ref(false)

const handleSubmit = () => {
    toggleModalRef.value = true
}
const closeModal = () => {
    toggleModalRef.value = false
    emit("close-modal");
};
const props = defineProps({
    isOpenModalForm: Boolean
});
</script>
