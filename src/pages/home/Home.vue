<script setup>
import TopNavbar from '../../components/TopNavbar.vue';
import Footer from '../../components/Footer.vue';
import NewArrivals from '../../components/new-arrivals/NewArrivals.vue';
</script>

<!-- <template>
    <TopNavbar/>
    <NewArrivals/>
</template> -->

<template src="./home.html"></template>
<style scoped src="./home.css"></style>

<script>
export default{
    components: {
        TopNavbar,
        Footer
        /*NewArrivals*/
    },
    computed:{

    },
    mounted(){

    },
    data(){
        return {

        };
    },
};
</script>