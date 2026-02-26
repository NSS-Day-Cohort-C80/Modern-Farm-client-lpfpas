import { addPlant } from "./field.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createSoybean } from "./seeds/soybean.js"
import { createWheat } from "./seeds/wheat.js"
import { createPotato } from "./seeds/potato.js"

/*  
Tractor is planting seeds
Planting seeds takes a plan [Array] for the field
- Each plan contains 3 plans [Arrays] - one for each row in the field
- For each row in the field, 
	if the food is {seed}, then get {seed} seed
Add the {seed} seed to the plan
*/

// export const plantSeeds = (plantingPlan) => {
//     const seedArray = []
//     plantingPlan.forEach(row => {
//         row.forEach(plant =>
//         {
//             if (plant === "asparagus") 
//                 {
//                 seedArray.push(createAsparagus(plant)) // Planting the (asparagus) seed
//                 }
//             if (plant === "corn")
//                 {
//                 seedArray.push(createCorn(plant))
//                 }
//             if (plant === "potato")
//                 {
//                 seedArray.push(createPotato(plant))
//                 }
//             if (plant === "soybean")
//                 {
//                 seedArray.push(createSoybean(plant))
//                 }
//             if (plant === "sunflower")
//                 {
//                 seedArray.push(createSunflower(plant))
//                 }
//             if (plant === "wheat")
//                 {
//                 seedArray.push(createWheat(plant))
//                 }
//         })
//     })
//     addPlant(seedArray)
// }


export const plantSeeds = (plantingPlan) => 
{
    const seedArray = []
    for (const planting of plantingPlan)
    {
        for (const plant of planting)
        {
            if (plant === "asparagus") 
                {
                seedArray.push(createAsparagus(plant))
                }
            if (plant === "corn")
                {
                seedArray.push(createCorn(plant))
                }
            if (plant === "potato")
                {
                seedArray.push(createPotato(plant))
                }
            if (plant === "soybean")
                {
                seedArray.push(createSoybean(plant))
                }
            if (plant === "sunflower")
                {
                seedArray.push(createSunflower(plant))
                }
            if (plant === "wheat")
                {
                seedArray.push(createWheat(plant))
                }
        }
    }
    addPlant(seedArray)
}