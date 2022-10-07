<script setup>
import { useMapsStore } from "../stores/maps";
import { storeToRefs } from "pinia";

const store = useMapsStore();
const { maps, currentMap, floors, currentFloor, callouts } = storeToRefs(store);
</script>

<template>
    <div>
        <label>Floors</label>
        <select v-model="currentFloor">
            <option v-for="floor in floors">{{ floor.name }}</option>
        </select>
    </div>
</template>

<style scoped>
label {
    font-size: 1.5rem;
}
select {
    width: 100%;
    font-size: 2rem;
}
</style>
