<template>
  <div id="app">
    <div class="wrapper">
      <app-sidebar/>
      <div class="main-panel">
        <app-navbar/>
        <div class="content">
          <router-view/>
        </div>
        <app-footer/>
      </div>
    </div>  
  </div>
</template>

<style>

</style>
<script>
import Sidebar from '@/components/Sidebar.vue'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
export default {
  components: {
    'app-sidebar': Sidebar,
    'app-navbar': Navbar,
    'app-footer': Footer
  }
}
</script>