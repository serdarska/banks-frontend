<template>
 <div id="map">
     <div id="map-wrap">
       <client-only>
         <l-map :zoom=8 :center="[41.6086, 21.7453]">
           <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
           <l-marker v-for="bank in banks" :key="bank.id" :lat-lng="[bank.latitude, bank.longitude]"></l-marker>
         </l-map>
       </client-only>
     </div>
 </div>
</template>
<script>

export default {
  name: "MapComponent",
  props: ['banks'],

}
</script>

<style scoped>
#map-wrap{
  width:800px;
  height: 600px;
}
</style>
