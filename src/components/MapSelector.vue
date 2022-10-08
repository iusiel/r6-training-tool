<script setup>
import { storeToRefs } from "pinia";
import { useMapsStore } from "../stores/maps";

const store = useMapsStore();
const { maps, currentMap } = storeToRefs(store);
const { resetFloorValue } = store;
</script>
<template>
    <div>
        <label for="mapSelect">Map</label>
        <select v-model="currentMap" @change="resetFloorValue" id="mapSelect">
            <option v-for="(map, index) in maps" :key="index">
                {{ map.mapName }}
            </option>
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
