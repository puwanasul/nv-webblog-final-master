<template>
  <div>
    <div class="sidebar">
      <div class="img">
        <p><img src="../assets/logo-page.png"></p>
      </div>
      <a>
        <router-link :to="{name: 'items'}"><i class='fas fa-clipboard'></i> รายละเอียดหนังสือ Anime</router-link>
      </a>
      <a>
        <router-link :to="{name: 'blogs'}"><i class='fas fa-file-invoice-dollar'></i> สั่งซื้อหนังสือ Anime
        </router-link>
      </a>
      <a>
        <router-link :to="{name: 'comments'}"><i class='fas fa-comments'></i> Comment หนังสือ</router-link>
      </a>
      <a>
        <router-link :to="{name: 'users'}"><i class='fas fa-address-book'></i> ผู้ใช้งาน</router-link>
      </a>
      <a>
        <router-link :to="{name: 'login'}"><i class='fas fa-sign-in-alt'></i> Login</router-link>
      </a>
      <a><button v-on:click="logout" href="users"><i class='fas fa-sign-out-alt'></i>Logout</button></a> 
    </div>
  </div>

</template>

<script>




export default {
  data() {
    return {
      
    }
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route)

    },
    async refreshData() {
      this.users = (await UsersService.index()).data
    },
    logout() {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'users'
      })
    }
  }
};
</script>

<style scoped>
/* The side navigation menu */
.sidebar {
  margin: 0;
  padding: 0;
  width: 255px;
  background-color: #41aa61;
  position: fixed;
  height: 100%;
  overflow: auto;
  font-size: 17px;
  border-radius: 0px 30px 30px 0px;

}

/* Sidebar links */
.sidebar a {
  display: block;
  color: white;
  padding: 9px;
  /* ห่างจากตัวออกไป */
  text-decoration: none;
}

/* Active/current link */
.sidebar a.active {
  background-color: #04AA6D;
  color: white;
}

/* Links on mouse-over */
.sidebar a:hover:not(.active) {
  background-color: #5bd397;
  border-radius: 50px 50px 50px 50px;
  color: white;
}

/* Page content. The value of the margin-left property should match the value of the sidebar's width property */
div.content {
  margin-left: 200px;
  padding: 1px 16px;
  height: 1000px;
}

/* On screens that are less than 700px wide, make the sidebar into a topbar */
@media screen and (max-width: 700px) {
  .sidebar {
    width: 100%;
    height: auto;
    position: relative;
  }

  .sidebar a {
    float: left;
  }

  div.content {
    margin-left: 0;
  }
}

/* On screens that are less than 400px, display the bar vertically, instead of horizontally */
@media screen and (max-width: 400px) {
  .sidebar a {
    text-align: center;
    float: none;
  }
}

.sidebar a.router-link-active {
  color: white;
  background-color: #014913;
  border-radius: 50px 50px 50px 50px;

}

div.img img {
  width: 250px;
  height: 200px;

}
</style>