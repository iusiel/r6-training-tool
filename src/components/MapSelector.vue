<script setup>
import { useMapsStore } from "../stores/maps";
import { storeToRefs } from "pinia";

const store = useMapsStore();
const { maps, currentMap } = storeToRefs(store);
const { resetFloorValue } = store;
</script>
<template>
    <div>
        <label for="mapSelect">Map</label>
        <select v-model="currentMap" @change="resetFloorValue" id="mapSelect">
            <option v-for="map in maps">{{ map.mapName }}</option>
        </select>
    </div>
</template>

<style scoped>
label {
    font-size: 1rem;
}
select {
    width: 100%;
    font-size: 1.5rem;
}
</style>
