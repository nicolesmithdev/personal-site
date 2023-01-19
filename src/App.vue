<template>
  <div class="site-container">
    <SiteHeader />
    <div class="content">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </transition>
      </router-view>
    </div>
    <SiteFooter />
  </div>
</template>

<script>
import SiteHeader from './components/layout/TheHeader.vue';
import SiteFooter from './components/layout/TheFooter.vue';

export default {
  components: {
    SiteHeader,
    SiteFooter
  },
  beforeCreate() {
    document.body.classList.add(this.$route.name);
  }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

body, html {
  margin: 0;
  padding: 0;
}

body {
  color: #333;
}

.container {
  margin-left: auto;
  margin-right: auto;
  max-width: 90%;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  width: 1280px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>