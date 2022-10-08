<script setup>
import { storeToRefs } from "pinia";
import { useMapsStore } from "../stores/maps";

const store = useMapsStore();
const { floors, currentFloor } = storeToRefs(store);
</script>

<template>
    <div>
        <label>Floors</label>
        <select v-model="currentFloor">
            <option v-for="(floor, index) in floors" :key="index">
                {{ floor.name }}
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
