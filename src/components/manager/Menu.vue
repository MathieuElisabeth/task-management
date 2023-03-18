<template>
  <div class="navbar-menu relative z-50" :class="{ hidden: !managerStore.burgerMenu }">
		<div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
		<nav class="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white dark:bg-dark-grey border-r overflow-y-auto">
			<div class="flex items-center mb-8">
				<a class="mr-auto flex text-3xl font-bold leading-none dark:text-white text-dark-grey" href="#">
          <img class="mx-2" src="@/assets/icons/logo-mobile.svg" alt="logo">
          Taskphase
				</a>
				<button class="navbar-close" @click="closeMenu">
					<svg class="h-6 w-6 dark:text-white text-dark-grey cursor-pointer hover:text-gray-500 hover:dark:text-light-grey" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
					</svg>
				</button>
			</div>
			<div>
				<ul>
					<li class="mb-1" v-for="(link, index) in links" :key="index">
						<router-link :to="link.path" class="block p-4 dark:text-white text-dark-grey text-sm font-semibold hover:bg-main-purple-light hover:text-main-purple hover:dark:text-main-purple cursor-pointer rounded">
                {{ link.name }}
            </router-link>
					</li>
				</ul>
			</div>
		</nav>
	</div>
</template>

<script setup>
import { useManagerStore } from '@/stores/manager';

const managerStore = useManagerStore()

const links = [
  {
    name: 'Board',
    path: '/'
  },
  {
    name: 'Facts',
    path: '/facts/20'
  },
  {
    name: 'About',
    path: '/about'
  }
]

const closeMenu = () => {
  managerStore.burgerMenu = false;
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