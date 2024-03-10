<script setup>
import Modal from "@/components/Modal.vue";
import ListComponent from "@/components/List.vue";
import { ref } from "vue";
const modalFormRef = ref(false)

const modalForm = () => {
    modalFormRef.value = !modalFormRef.value
}
const closeModal = () => {
    modalFormRef.value = !modalFormRef.value
};
</script>

<template>
    <div id="hero" class=" h-screen relative pt-[100px]">
        <div
            class=" absolute left-0 top-0 bottom-0 right-0 w-full h-full before:content before:w-full before:h-full before:absolute before:bg-[#000000e6]">
            <img src="/framebg.png" alt="" class=" w-full h-full">
        </div>
        <div class="max-w-7xl mx-auto pt-10">
            <div class="flex">
                <div class=" w-3/5 relative top-8">
                    <h1 class="text-5xl text-white font-bold">
                        ПРОГРАМА <br> ТРЕНУВАНЬ <span class="text-[#E5C140]">ВДОМА</span>
                    </h1>
                    <ListComponent />
                    <button @click="modalForm"
                        class="bg-[#E5C140] w-[350px] h-[56px] rounded-full text-[#2A2A2A] text-sm uppercase font-medium"
                        data-v-0524d034="">придбати</button>
                </div>
                <div class="w-[400px] h-[400px] rounded-full relative -top-3">
                    <img src="/frame1.png" alt="">
                </div>
            </div>
        </div>
    </div>
    <Modal :modalFormRef="modalFormRef" @closeModal="closeModal" />
</template>

<style lang="postcss" scoped></style>
