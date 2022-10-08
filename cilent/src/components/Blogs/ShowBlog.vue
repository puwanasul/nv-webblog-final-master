<template>
  <div>

   <b-container class="bv-example-row">
      <b-row class="text-left">
        <b-col></b-col>

        <b-col cols="10" class="bg1">

    <h1>ตรวจสอบการสั่งซื้อ {{ blog.id }} </h1><hr>

<div class="box1">
    <p>ลำดับ: {{ blog.id }}</p>
      <p>ชื่อ: {{ blog.firstname }}</p>
      <p>นามสกุล: {{ blog.lastname }}</p>
      <p>ชื่อหนังสือ Anime: {{ blog.nitem }}</p>
      <p>จำนวนที่ต้องการ: {{ blog.pnum }} เล่ม</p>
      <p>เบอร์โทรศัพท์: 0{{ blog.tel }}</p>
      <p>รายละเอียดที่อยู่ : {{ blog.other }}</p>
      <p>วันที่สั่งหนังสือ: {{ blog.dates }}</p>
      <p>เวลาที่สั่งหนังสือ: {{ blog.times }}</p>
      
<hr>
    <p>
      <b-button pill variant="warning" v-on:click="navigateTo('/blog/edit/' + blog.id)">
        แก้ไขการสั่งซื้อ
      </b-button>
      <b-button pill variant="secondary" v-on:click="navigateTo('/blogs')">ย้อนกลับ</b-button>
    </p>
</div>
    </b-col>
      <b-col> </b-col>
     </b-row>
</b-container>

  </div>
</template>

<script>
import BlogService from "@/services/BlogsService";
export default {
  data() {
    return {
      blog: null,
    };
  },
  async created() {
    try {
      let blogId = this.$route.params.blogId;
      this.blog = (await BlogService.show(blogId)).data;
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
  },
};
</script>
<style scoped>

</style>