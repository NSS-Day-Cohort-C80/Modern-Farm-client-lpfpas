/*
1. Import function `createPlan` from module /plan.js

*/

import { createPlan } from "./plan.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createSoybean } from "./seeds/soybean.js"
import { createWheat } from "./seeds/wheat.js"
import { createPotato } from "./seeds/potato.js"
import { addPlant, usePlants } from "./field.js"
import { plantSeeds } from "./tractor.js"
import { harvestPlants } from "./harvester.js"
import { Catalog } from "./catalog.js"

console.log("Welcome to the main module")
const yearlyPlan = createPlan()

const wheat = createWheat();
addPlant(wheat);
addPlant(createSunflower())
addPlant(createSoybean())
addPlant(createPotato())
addPlant(createCorn())
addPlant(createAsparagus())
plantSeeds(yearlyPlan)
const plants = usePlants()
const harvest = harvestPlants(plants)
console.log(harvest)
const harvestCatalog = Catalog(harvest)
console.log(harvestCatalog)

const harvestedHTML = harvestCatalog

//document.querySelector("#harvestGrid")
const messagesElement = document.querySelector(".messages")

messagesElement.innerHTML = harvestedHTML 