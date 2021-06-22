<template>
  <div class="site-container">
    <SiteHeader />
    <div class="content">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
    <SiteFooter />
  </div>
</template>

<script>
import SiteHeader from './components/layout/TheHeader.vue';
import SiteFooter from './components/layout/TheFooter.vue';

export default {
  metaInfo: {
    title: 'Nicole Smith, WordPress Web Developer',
    titleTemplate: '%s | Nicole Smith'
  },
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
  // transition: all 0.2s linear;
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