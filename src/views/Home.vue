<script setup>
import { ref } from "vue";
import "vue3-carousel/dist/carousel.css";
import FramModal from "@/components/FramModal.vue";
import ListItem from "@/components/ListItem.vue";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
``

const isOpenModal = ref(0)
const handleShowModalForm = (modalId) => {
  isOpenModal.value = modalId
}
const closeModal = () => {
  isOpenModal.value = 0
};
</script>

<template>
  <div class=" overflow-x-hidden">
    <div class="px-4 md:px-0 bg-primary pb-20">
      <!-- . -->
      <!-- Hero Section -->
      <!-- hero desktop -->
      <div id="hero" class="hidden md:block h-[760px] relative bg-primary mt-[100px]">
        <img class="z-[2] absolute mx-auto -top-6 right-0 left-3" src="/hero.png" alt="" />
        <img class="z-[1] absolute mx-auto top-[-60px] right-0 left-0" src="/hero_bg.png" alt="" />
        <div class="z-10 absolute mx-auto right-0 left-0 top-[650px] text-4xl flex justify-center gap-x-4 text-white">
          <button class="h-14 w-56 text-sm text-black font-medium rounded-full bg-[#E5C140]">
            ПОЧАТИ
          </button>
          <button class="h-14 w-56 text-sm font-medium rounded-full border">
            ДЕТАЛЬНIШЕ
          </button>
        </div>
      </div>
      <!-- hero mobile -->
      <div class="block md:hidden pt-16 sm:pt-[100px]">
        <div class="w-full h-[calc(100vh_/_1.9)]">
          <img class="mx-auto h-full" src="/mobile_hero.png" alt="" />
        </div>
        <div class="text-4xl flex flex-col items-center justify-center gap-4 text-white">
          <button class="h-14 w-56 text-sm text-black font-medium rounded-full bg-[#E5C140]">
            ПОЧАТИ
          </button>
          <button class="h-14 w-56 text-sm font-medium rounded-full border">
            ДЕТАЛЬНIШЕ
          </button>
        </div>
      </div>
      <div class="max-w-7xl mx-auto pt-10 flex flex-col justify-center bg-primary">
        <img class="mix-blend-screen" src="/hero_bottom.png" alt="" />
        <div class="pt-5 sm:pt-0">
          <ul class="text-[#E0E0E0] ps-7 sm:ps-16 sm:text-xl list-disc flex flex-col gap-y-6 text-xs">
            <li>СПОРТИВНИЙ БЛОГ В Tiktok ТА instagram</li>
            <li>БЛИЗЬКО 6 РОКIВ У СПОРТI</li>
            <li>КВАЛIФIКАЦIЯ ТРЕНЕРА ТА ДIЄТОЛОГА</li>
            <li>Десятки гарних вIдгукIв та результатів</li>
          </ul>
        </div>
      </div>

      <!-- benifits -->
      <div class="text-4xl bg-primary pt-16 sm:pt-28">
        <div class="mb-0 sm:mb-9 text-white font-medium text-center">
          ВПЛИВ
          <span class="text-[#E5C140]">ТРЕНУВАНЬ</span>
          <br />
          <span class=" text-xs sm:text-xl">ТА ЗДОРОВОГО ХАРЧУВАННЯ НА ЖИТТЯ ЛЮДИНИ</span>
        </div>
        <!-- mobile slider -->
        <div class="block pt-10 sm:pt-20 md:hidden">
          <Carousel :items-to-show="1" :wrapAround="true">
            <template #slides>
              <slide :key="1">
                <div class="benifit">
                  <div class="img_wrapper">
                    <img class="sm:absolute relative" src="/benifit_1.png" alt="" />
                  </div>
                  <div class="title">ГАРНА ФІЗИЧНА ФОРМА</div>
                  <div class="desc">
                    фізична активність і гарна форма сприяють кращому збереженню
                    енергії, покращенню когнітивних функцій і підвищенню
                    продуктивності у різних сферах життя.
                  </div>
                  <img class="mix-blend-difference" src="/logo.png" width="60" alt="" />
                </div>
              </slide>
              <Slide :key="2">
                <div class="benifit">
                  <div class="img_wrapper">
                    <img src="/benifit_2.png" alt="" />
                  </div>
                  <div class="title">РІВЕНЬ ЩАСТЯ</div>
                  <div class="desc">
                    Спорт підвищує рівень ендорфінів в організмі, що робить людину
                    щасливішою, підвищує якість запам'ятовування, дозволяє більш
                    структурно планувати та ефективно вирішувати проблеми.
                  </div>
                  <img class="mix-blend-difference" src="/logo.png" width="60" alt="" />
                </div>
              </Slide>
              <Slide :key="3">
                <div class="benifit">
                  <div class="img_wrapper">
                    <img src="/benifit_3.png" alt="" />
                  </div>
                  <div class="title">ЗДОРОВЕ ХАРЧУВАННЯ</div>
                  <div class="desc">
                    Їжа дає енергію та будівельні матеріали кожній клітині нашого
                    тіла. Якщо організм не отримує достатньої кількості корисних
                    поживних речовин, обмінні процеси порушуються і страждає наше
                    здоров'я.
                  </div>
                  <img class="mix-blend-difference" src="/logo.png" width="60" alt="" />
                </div>
              </Slide>
            </template>

            <template #addons>
              <pagination />
            </template>
          </Carousel>
        </div>
        <!-- desktop version -->
        <div class="hidden md:block pt-40 mx-auto max-w-7xl">
          <div id="benifits" class="flex justify-center gap-x-9">
            <div class="benifit">
              <div class="img_wrapper">
                <img src="/benifit_1.png" alt="" />
              </div>
              <div class="title">ГАРНА ФІЗИЧНА ФОРМА</div>
              <div class="desc">
                фізична активність і гарна форма сприяють кращому збереженню
                енергії, покращенню когнітивних функцій і підвищенню
                продуктивності у різних сферах життя.
              </div>
              <img class="mix-blend-difference" src="/logo.png" width="60" alt="" />
            </div>

            <div class="benifit">
              <div class="img_wrapper">
                <img src="/benifit_2.png" alt="" />
              </div>
              <div class="title">РІВЕНЬ ЩАСТЯ</div>
              <div class="desc">
                Спорт підвищує рівень ендорфінів в організмі, що робить людину
                щасливішою, підвищує якість запам'ятовування, дозволяє більш
                структурно планувати та ефективно вирішувати проблеми.
              </div>
              <img class="mix-blend-difference" src="/logo.png" width="60" alt="" />
            </div>
            <div class="benifit">
              <div class="img_wrapper">
                <img src="/benifit_3.png" alt="" />
              </div>
              <div class="title">ЗДОРОВЕ ХАРЧУВАННЯ</div>
              <div class="desc">
                Їжа дає енергію та будівельні матеріали кожній клітині нашого
                тіла. Якщо організм не отримує достатньої кількості корисних
                поживних речовин, обмінні процеси порушуються і страждає наше
                здоров'я.
              </div>
              <img class="mix-blend-difference" src="/logo.png" width="60" alt="" />
            </div>
          </div>
        </div>
      </div>

      <!-- pricing -->
      <div id="pricing" class=" mx-auto bg-primary pt-20 sm:pt-[100px]">
        <div class="mb-[70px] text-center text-white">
          <div class="font-medium text-[50px]">ТАРИФИ</div>
          <div class="font-medium text-[13px]">тривалість 1 місяць</div>
        </div>
        <div
          class="relative grid grid-flow-row  gap-y-16 before:content before:left-[-68%] sm:before:h-[80%] before:right-0 before:h-[87%] before:top-[100px] sm:before:top-[220px] before:rotate-[20deg] before:w-[250%] before:bg-white before:absolute ">
          <div class="flex flex-col md:flex-row md:justify-center items-center md:gap-x-11 gap-y-11">
            <div class="pricing_card top-0 relative sm:top-14">
              <div class="heading">ТРЕНУВАННЯ ВДОМА</div>
              <div class="wrapper">
                <div class="price">550 ₴</div>
                <button>детальніше</button>
                <button class="yellow" @click="() => handleShowModalForm(1)">придбати</button>
              </div>
            </div>
            <div class="pricing_card top-0 relative sm:top-14">
              <div class="heading">ТРЕНУВАННЯ В ЗАЛІ</div>
              <div class="wrapper">
                <div class="price">550 ₴</div>
                <button>детальніше</button>
                <button class="yellow" @click="() => handleShowModalForm(2)">придбати</button>
              </div>
            </div>
          </div>
          <div class="flex flex-col md:flex-row md:justify-center items-center md:gap-x-11 gap-y-11">
            <div class="pricing_card top-0 relative sm:top-14">
              <div class="heading">ПЛАН ХАРЧУВАННЯ</div>
              <div class="wrapper">
                <div class="price">450 ₴</div>
                <button>детальніше</button>
                <button class="yellow" @click="() => handleShowModalForm(3)">придбати</button>
              </div>
            </div>
            <div class="pricing_card top-0 relative sm:top-14">
              <div class="heading">ПЕРСОНАЛЬНЕ ВЕДЕННЯ</div>
              <div class="wrapper">
                <div class="price">1500 ₴</div>
                <button>детальніше</button>
                <button class="yellow" @click="() => handleShowModalForm(4)">придбати</button>
              </div>
            </div>
          </div>
          <div
            class="hidden mx-auto top-0 relative sm:top-14 w-[238px] h-[180px] md:w-[395px] md:h-[314px] text-center rounded-[44px] bg-[#E5C140] p-3 md:p-6">
            <div class="md:mb-0 text-[10px] md:text-xl tracking-tighter leading-[0px] font-medium">
              ПЕРШЕ ТРЕНУВАННЯ
            </div>
            <div class="md:mb-5 text-[25px] md:text-[40px] tracking-[-2px] leading-10 font-medium">
              БЕЗКОШТОВНЕ
            </div>
            <input
              class="mb-3 md:mb-3 placeholder:text-white text-[13px] tracking-[0.78px] font-medium text-center text-white w-full bg-[#24262A4D] rounded-full h-6 md:h-10 uppercase"
              placeholder="ІМ’я" type="text" />
            <input
              class="mb-4 md:mb-8 placeholder:text-white text-[13px] tracking-[0.78px] font-medium text-center text-white w-full bg-[#24262A4D] rounded-full h-6 md:h-10 uppercase"
              placeholder="TELEGRAM" type="text" />
            <button
              class="w-full text-[10px] md:text-[13px] tracking-[0.78px] font-medium h-[56px] md:h-14 text-white bg-[#24262A] rounded-full">
              СПРОБУВАТИ
            </button>
          </div>
        </div>
      </div>

      <!-- user stories -->
      <div id="stories" class="mb-12 pt-20 md:pt-60">
        <div class="mb-20 text-white font-medium text-center">
          <div class="text-[50px]">ВІДГУКИ</div>
          <div class="text-[13px]">ТА РЕЗУЛЬТАТИ КЛІЄНТІВ</div>
        </div>
        <div class="mx-auto max-w-7xl flex flex-col md:flex-row items-center md:justify-between gap-x-11 gap-y-20">
          <div class="story">
            <div class="img">
              <img src="/story_1.png" alt="" />
            </div>
            <div class="desc">
              Максим привіт) Хотіла написати відгук про тренування з тобою.
              Тренуємося ми вже 3,5 місяці, і я скажу що різниця з тим, як я
              тренувалася раніше з іншими тренерами колосальна. За перший місяць –
              3 кг 🔥 + форма дуже покращала! І нарешті я змогла відмовитися від
              СОЛОДКОГО! Короче все вогонь) Дякую!
            </div>
            <div class="username">Юлія</div>
          </div>
          <div class="story">
            <div class="img">
              <img src="/story_2.png" alt="" />
            </div>
            <div class="desc">
              Можу сказати, що точно форма змінилася на краще: скинув зайвий жир,
              промалював груди, руки, спину; виправив техніку на краще. Тренування
              були різноманітними. Ну і зв'язок з тобою 24/7, що також дуже
              допомагало і в моральному плані, і в плані виконання вправ
            </div>
            <div class="username">Данило</div>
          </div>
        </div>
      </div>
      <div class="hidden md:flex mb-28 justify-between items-center mx-auto max-w-7xl gap-11">
        <img class="w-[50%]" src="/story_1_1.png" alt="" />
        <img class="w-[50%]" src="/story_2_1.png" alt="" />
      </div>

      <Carousel class="mb-28 block md:hidden" :items-to-show="1" :wrapAround="true">
        <Slide key="1">
          <img src="/story_1_1.png" alt="" />
        </Slide>
        <Slide key="2">
          <img src="/story_2_1.png" alt="" />
        </Slide>
        <template #addons>
          <pagination />
        </template>
      </Carousel>
      <!-- <div class="text-[15px] font-medium text-center text-white">
      РЕЗУЛЬТАТИ КЛІЄНТІВ
    </div> -->
      <div class="mb-7 md:w-1/2 mx-auto text-xl text-white uppercase text-center">
        МИ ПРОДУМАЛИ все до дрібних ДЕТАЛЕЙ, щоб ваші ЗАЙНЯТТЯ приносили не тільки
        результат, але й задоволення
      </div>
      <button
        class="text-[13px] font-medium uppercase block w-full max-w-[340px] mx-auto h-[56px] bg-white text-black rounded-full">
        стати клієнтом</button>.
      <a target="_blank" href="#" class="w-[53] h-[53]  mx-auto flex justify-center items-center !rounded-full mt-4">
        <img src="/telegram.svg" alt="" />

      </a>
    </div>

    <!-- ######################################################################################################## -->

    <div class="fixed top-0 left-0 right-0 z-50" v-if="isOpenModal == 1">
      <FramModal @closeDescriptionModal="closeModal" imgSource="/frame1.png">
        <h1
          class=" text-2xl text-center leading-none sm:leading-normal sm:text-left sm:text-5xl text-white font-bold uppercase">
          ПРОГРАМА <br> ТРЕНУВАНЬ <span class="text-[#E5C140]">В ЗАЛІ</span>
        </h1>
        <ul class="mb-8 mt-8 w-auto lg:w-[700px]">
          <ListItem>
            Зручний формат проходження тренувань
          </ListItem>
          <ListItem>
            Пак з відеоматеріалами усіх вправ програми
          </ListItem>
          <ListItem class="max-w-[650px]">
            Програма по системі split, тривалістю 1 місяць
          </ListItem>
          <ListItem>
            Программа для набору м’язової маси
          </ListItem>
        </ul>

      </FramModal>
    </div>

    <div class="fixed top-0 left-0 right-0 z-50" v-if="isOpenModal == 2">
      <FramModal @closeDescriptionModal="closeModal" imgSource="/frame1.png">
        <h1
          class=" text-2xl text-center leading-none sm:leading-normal sm:text-left sm:text-5xl text-white font-bold uppercase">
          ПРОГРАМА <br> ТРЕНУВАНЬ <span class="text-[#E5C140]">ВДОМА</span>
        </h1>
        <ul class="mb-8 mt-8 w-auto lg:w-[700px]">
          <ListItem>
            Зручний формат проходження тренувань
          </ListItem>
          <ListItem>
            Пак з відеоматеріалами усіх вправ програми
          </ListItem>
          <ListItem class="max-w-[650px]">
            Програма по системі fullbody, тривалістю 1 місяць
          </ListItem>
          <ListItem>
            Програма для набору м’язової маси
          </ListItem>
        </ul>
      </FramModal>
    </div>

    <div class="fixed top-0 left-0 right-0 z-50" v-if="isOpenModal == 3">
      <FramModal @closeDescriptionModal="closeModal" imgSource="/frame3.png">
        <h1 class=" text-2xl text-center sm:text-left sm:text-5xl text-white font-bold uppercase">
          ІНДИВІДУАЛЬНИЙ <br /> ПЛАН <span class="text-[#E5C140]">ХАРЧУВАННЯ</span>
        </h1>
        <ul class="mb-8 mt-8">
          <ListItem>
            Індивідуальний план харчування виключно під вас, ваші цілі та вподобання
          </ListItem>
          <ListItem>
            Інструкція що до користування додатком для підрахунку калорій
          </ListItem>
          <ListItem class="">
            Прийом, та коректування вашого харчування через щоденні звіти
          </ListItem>
          <ListItem>
            Пак фундаментальної інформації по харчуванню, що допоможе
            вам краще розумітися у базових поняттях здорового харчування
          </ListItem>
        </ul>
      </FramModal>
    </div>

    <div class="fixed top-0 left-0 right-0 z-50" v-if="isOpenModal == 4">
      <FramModal @closeDescriptionModal="closeModal" imgSource="/frame4.png">
        <h1 class=" text-2xl text-center sm:text-left sm:text-5xl text-white font-bold uppercase">
          <span class="text-[#E5C140]">ПЕРСОНАЛЬНЕ </span><br class="sm:hidden block" />ВЕДЕННЯ
        </h1>
        <ul class="mb-8 mt-8">
          <ListItem class="max-w-[730px]">
            Повноцінне онлайн ведення у якому чітка і систематизована робота
            над вашою формою та станом здоров'я
          </ListItem>
          <ListItem>
            Розбір техніки виконання вправ
          </ListItem>
          <ListItem class="max-w-[650px]">
            Пак з фундаментальною інформацією про харчування
            та тренувальний процес
          </ListItem>
          <ListItem>
            Можливість проведення тренувань у форматі відеозв’язку
          </ListItem>
          <ListItem class="max-w-[750px]">
            Індивідуальний план харчування виключно під вас, ваші цілі,
            вподобання та фінансові можливості
          </ListItem>
          <ListItem>
            Консультації з різних питань спорту та здоров'я
          </ListItem>
          <ListItem>
            Підбір спортивних добавок, бадів та вітамінів
          </ListItem>
          <ListItem class="">
            Рекомендації щодо кращої працездатності, розвитку<br />
            функціональних навичок, покращення сну та мінімалізації стресових відчуттів.
          </ListItem>
        </ul>
      </FramModal>
    </div>

    <!-- ######################################################################################################## -->
  </div>
</template>

<style lang="postcss" scoped>
.carousel__slide {
  padding-top: 120px;
}

#benifits {}

.benifit {
  @apply h-[380px] md:w-[336px] px-6 relative rounded-[44px] bg-white flex flex-col items-center;

  >.img_wrapper {
    @apply relative h-[50%] w-full mb-4;

    >img {
      @apply absolute bottom-0 left-0 right-0 mx-auto;
    }
  }

  .title {
    @apply text-[#18191C] mb-2 text-xl font-bold;
  }

  .desc {
    @apply lowercase text-[#18191C] text-[13px] leading-4 tracking-wider;
  }
}

.pricing_card {
  @apply w-[237px] h-[218px] md:w-[395px] md:h-[363px] rounded-[44px] bg-[#24262A] p-6;
  @apply flex flex-col justify-between items-center;

  >.heading {
    @apply text-white text-xs md:text-xl md:mt-4 font-medium;
  }

  .wrapper {
    @apply w-full;

    .price {
      @apply text-[40px] md:text-[50px] font-semibold text-white text-center mb-4;
    }

    >button {
      @apply w-full h-8 md:h-12 text-white border rounded-full border-[#E5C140];
      @apply uppercase flex justify-center items-center;
    }

    >.yellow {
      @apply mt-3 text-black bg-[#E5C140];
    }
  }
}

.stripe-1 {
  background: linear-gradient(20deg,
      #18191c 35%,
      #ffffff 35%,
      #ffffff 65%,
      #18191c 50%);
}

#stories {
  .story {
    @apply w-full md:w-1/2 px-9 rounded-[40px];
    @apply text-white bg-[#24262A];

    >.img {
      @apply mb-20 relative;

      >img {
        @apply absolute -bottom-[50px] left-0 right-0 mx-auto rounded-full;
      }
    }

    >.desc {
      @apply mb-11 text-[13px] font-light leading-4 tracking-wider normal-case;
    }

    >.username {
      @apply text-center mb-3 text-[13px] font-light normal-case;
    }
  }
}
</style>
