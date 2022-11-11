<template>
  <div class="navbar container">
    <router-link to="/" class="logo">
      <img src="../assets/images/logo.png" alt="" />
    </router-link>
    <div class="nav-links">
      <router-link v-for="(link, index) in links" :to="link.path" :key="index"
        :class="{ active: link.path === $route.path }">
        {{ link.name }}
      </router-link>
      <AddBoardBtn />
    </div>
  </div>
</template>

<script>
import AddBoardBtn from "@/components/AddBoardBtn.vue"

export default {
  components: {
    AddBoardBtn
  },
  data: () => ({
    links: [
      {
        name: 'home',
        path: '/'
      },
      {
        name: 'facts',
        path: '/facts/20'
      },
      {
        name: 'about',
        path: '/about'
      }
    ]
  })
}
</script>

<style>
.navbar {
  height: 55px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar a {
  color: #37577b;
  text-decoration: none;
}

.logo img {
  height: 80px;
  font-weight: bold;
}

.nav-links a {
  opacity: .9;
  font-size: .9em;
  margin-left: .75em;
  padding-bottom: 5px;
  text-transform: uppercase;
}

.nav-links a:hover,
.nav-links a.active {
  opacity: 1;
}

.nav-links a.active {
  border-bottom: 3px solid;
}

.nav-links .btn {
  margin-left: .75em;
}

.btn i {
  margin-right: .5em;
}

.btn {
  border: none;
  outline: none;
  padding: .5em .7em;
  border-radius: 3px;
  background-color: var(--primary-clr);
  text-transform: uppercase;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
}
</style>