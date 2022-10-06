import { ref, computed } from "vue";
import { defineStore } from "pinia";
import bank from "../maps/bank";
import clubhouse from "../maps/clubhouse";
import oregon from "../maps/oregon";
import themePark from "../maps/theme-park";
export const useMapsStore = defineStore("maps", () => {
    const maps = ref([]);
    const currentMap = ref("");
    const currentFloor = ref("");

    const doubleCount = computed(() => count.value * 2);

    const floors = computed(() => {
        const filteredMap = maps.value.filter(
            (map) => map.mapName === currentMap.value
        );

        if (filteredMap.length === 0) return [];

        return filteredMap.pop().floors;
    });

    const callouts = computed(() => {
        const filteredFloor = floors.value.filter(
            (floor) => floor.name === currentFloor.value
        );

        if (filteredFloor.length === 0) return [];

        return filteredFloor.pop().callouts;
    });

    function addMap(map) {
        maps.value.push(map);
    }

    function resetFloorValue() {
        currentFloor.value = "";
    }

    addMap(bank);
    addMap(clubhouse);
    addMap(oregon);
    addMap(themePark);

    return {
        maps,
        currentMap,
        floors,
        currentFloor,
        callouts,
        resetFloorValue,
    };
});
