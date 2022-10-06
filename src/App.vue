<script setup>
import MapSelector from "./components/MapSelector.vue";
import FloorSelector from "./components/FloorSelector.vue";
</script>

<template>
    <main>
        <section class="selector__grid">
            <MapSelector />
            <FloorSelector />
        </section>

        <button>Get room</button>

        <section>
            <p>Action</p>
            <p>Room name</p>
        </section>
    </main>
</template>

<style scoped>
.selector__grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}
</style>
