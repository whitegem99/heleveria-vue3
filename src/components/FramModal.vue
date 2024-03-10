<script setup>
import Modal from "@/components/Modal.vue";
import Header from "@/components/Header.vue";
import ListComponent from "@/components/List.vue";
import { ref, defineEmits, defineProps, onMounted } from "vue";
const isOpenModalForm = ref(false)
const emit = defineEmits(["close-description-modal"]);
const handleModalForm = () => {
    isOpenModalForm.value = !isOpenModalForm.value
}
const closeModal = () => {
    isOpenModalForm.value = !isOpenModalForm.value
    emit("close-description-modal");
};

const props = defineProps({
    imgSource: String
});

const headerRef = ref(false);
const contentRef = ref(false);



onMounted(() => {
    contentRef.value.addEventListener("scroll", function () {
        let currentScrollTop = contentRef.value.scrollTop
        currentScrollTop > 50 ? headerRef.value = true : headerRef.value = false
    })

})

</script>

<template>
    <Header :class="headerRef ? 'b-primary' : '!bg-transparent'" />
    <div id="hero" class="h-screen pt-16 sm:pt-20 overflow-auto bg-primary pb-32 sm:pb-20 " ref="contentRef">
        <div
            class=" absolute left-0 top-0 bottom-0 right-0 w-full h-full before:content before:w-full before:h-full before:absolute before:bg-[#000000e9]">
            <img src="/framebg.png" alt="" class=" w-full h-full">
        </div>
        <div class="sm:max-w-7xl mx-auto sm:pt-10 text-center sm:text-left sm:flex items-center ps-0 sm:ps-7">
            <div class=" relative top-8 px-4 sm:px-0">
                <slot></slot>
                <!-- <ListComponent :data="data" /> -->
                <button @click="handleModalForm"
                    class="bg-[#E5C140] w-[165px] h-9  sm:w-[350px] sm:h-[56px] rounded-full text-[#2A2A2A] text-sm uppercase font-medium">придбати</button>
            </div>
            <div class="sm:min-w-[350px] max-w-[400px] sm:h-[400px] top-16 sm:top-0   rounded-full relative">
                <img :src="imgSource" alt="" class="max-w-[200px] sm:max-w-full mx-auto sm:mx-0">
            </div>
        </div>
    </div>
    <Modal @closeModal="closeModal" :isOpenModalForm="isOpenModalForm" />
</template>

<style lang="postcss" scoped></style>
