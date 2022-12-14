import { ref, computed } from "vue";
import { defineStore } from "pinia";
import bank from "../maps/bank";
import clubhouse from "../maps/clubhouse";
import oregon from "../maps/oregon";
import themePark from "../maps/theme-park";
import skyscraper from "../maps/skyscraper";
import coastline from "../maps/coastline";
import kafe from "../maps/kafe";
import chalet from "../maps/chalet";
import border from "../maps/border";
import emeraldPlains from "../maps/emerald-plains";
import outback from "../maps/outback";
import consulate from "../maps/consulate";
import villa from "../maps/villa";
import favela from "../maps/favela";
import kanal from "../maps/kanal";
import stadium from "../maps/stadium";
// eslint-disable-next-line import/prefer-default-export
export const useMapsStore = defineStore("maps", () => {
    const maps = ref([]);
    const currentMap = ref("");
    const currentFloor = ref("");

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
    addMap(border);
    addMap(chalet);
    addMap(clubhouse);
    addMap(coastline);
    addMap(consulate);
    addMap(emeraldPlains);
    addMap(favela);
    addMap(kafe);
    addMap(kanal);
    addMap(oregon);
    addMap(outback);
    addMap(skyscraper);
    addMap(stadium);
    addMap(themePark);
    addMap(villa);

    return {
        maps,
        currentMap,
        floors,
        currentFloor,
        callouts,
        resetFloorValue,
    };
});
