<template>
  <div class="index">
    首页部分
    <input type="file" @change="fileUpload">
    <swiper class="swiper" :options="swiperOption">
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
      </swiper>
  </div>
</template>

<script>
  import { index } from '@/utils/api/index'
  import axios from 'axios'
  import uploadImage from '@/utils/uploadFile.js';
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'
  export default{
    data(){
      return{
        swiperOption: {
          slidesPerView: 2,
          spaceBetween: 10,
          freeMode: true
        }
      }
    },
    components: {
          Swiper,
          SwiperSlide
        },
    mounted() {
      // index().then(res => {
      //   console.log(res);
      // }).catch(msg => {
      //   console.log(msg)
      // })
    },
    methods:{
      fileUpload:function(res){
        console.log(res.target.files);
      }
    }
  }
</script>

<style scoped>
  .swiper{height:7.5rem;}
</style>
