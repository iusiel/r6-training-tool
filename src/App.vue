<script setup>
import { storeToRefs } from "pinia";
import { ref } from "vue";
import MapSelector from "./components/MapSelector.vue";
import FloorSelector from "./components/FloorSelector.vue";
import { useMapsStore } from "./stores/maps";
import Swal from "sweetalert2";

const store = useMapsStore();
const { callouts } = storeToRefs(store);

const actions = ["Go to room", "Fire in room"];
const currentAction = ref("");
const currentRoom = ref("");

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

        // swap elements array[i] and array[j]
        // we use "destructuring assignment" syntax to achieve that
        // you'll find more details about that syntax in later chapters
        // same can be written as:
        // let t = array[i]; array[i] = array[j]; array[j] = t
        // eslint-disable-next-line no-param-reassign
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function generate() {
    if (callouts.value.length === 0) {
        Swal.fire(
            "",
            "No more callouts available. You can choose another map or floor or refresh the app.",
            "error"
        );

        return;
    }

    shuffle(callouts.value);

    currentAction.value = actions[getRandomInt(2)];
    currentRoom.value = callouts.value.pop();
}
</script>

<template>
    <main>
        <h1>R6 Training Tool</h1>
        <section class="selector__grid">
            <MapSelector />
            <FloorSelector />
        </section>

        <button @click="generate" class="get-room">Generate</button>

        <section>
            <p class="action-text">{{ currentAction }}</p>
            <p class="room-name">{{ currentRoom }}</p>
        </section>
    </main>
</template>

<style scoped>
h1 {
    font-size: 2rem;
    text-align: center;
}
.selector__grid {
    display: grid;
    gap: 20px;
}

.get-room {
    font-size: 1.5rem;
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
    display: block;
    padding: 15px 30px;
}
.action-text {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 10px;
}

.room-name {
    font-size: 2rem;
    text-align: center;
    margin-top: 0px;
}

@media screen and (min-width: 768px) {
    .selector__grid {
        grid-template-columns: 1fr 1fr;
    }
}
</style>
