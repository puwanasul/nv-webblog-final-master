<template>
  <div>
    <b-container class="bv-example-row">
    <b-row class="text-left">
         <b-col></b-col>

         <b-col cols="10" class="bg2">
    <h1>รายการชื่อหนังสือ Anime</h1>
  <!--   <p><button v-on:click="logout">Logout</button></p> -->
    <h5>จำนวนชื่อหนังสือ Anime 5 </h5> <hr>

    <div class="box2" >
      <p>หนังสือหมายเลขที่: 1</p>
      <p>ชื่อหน้งสือ: Classroom Of The Elite</p>
      <p>ราคาหนังสือการ์ตูน: 99 บาท</p>
   <div class="img2">
                <p><img src="@/assets/1.jpg"></p>
            </div>
      <hr>

<p>หนังสือหมายเลขที่: 2</p>
      <p>ชื่อหน้งสือ: Sword-Art-Online</p>
      <p>ราคาหนังสือการ์ตูน: 88 บาท</p>
   <div class="img2">
                <p><img src="@/assets/2.jpg"></p>
            </div>
       <hr>

       <p>หนังสือหมายเลขที่: 3</p>
      <p>ชื่อหน้งสือ: Attack on Titan</p>
      <p>ราคาหนังสือการ์ตูน: 100 บาท</p>
   <div class="img2">
                <p><img src="@/assets/3.jpg"></p>
            </div>
       <hr>

<p>หนังสือหมายเลขที่: 4</p>
      <p>ชื่อหน้งสือ: Boruto</p>
      <p>ราคาหนังสือการ์ตูน: 90 บาท</p>
   <div class="img2">
                <p><img src="@/assets/4.jpg"></p>
            </div>
       <hr>

<p>หนังสือหมายเลขที่: 5</p>
      <p>ชื่อหน้งสือ: One Piece</p>
      <p>ราคาหนังสือการ์ตูน: 100 บาท</p>
   <div class="img2">
                <p><img src="@/assets/5.jpg"></p>
            </div>
       <hr>

    </div>

    

    </b-col>
      <b-col> </b-col>
     </b-row>
</b-container>
  </div>
</template>
<script>

import ItemService from "@/services/ItemsService";
export default {
  data() {
    return {
      items: [],
    };
  },
  async created() {
    this.items = (await ItemService.index()).data;
  }
};
</script>
<style scoped>
div.img2 img {
  width: 150px;
  height: 150px;
}
</style>