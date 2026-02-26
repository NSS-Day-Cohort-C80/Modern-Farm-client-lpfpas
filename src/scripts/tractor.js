/*  
Tractor is planting seeds
Planting seeds takes a plan [Array] for the field
- Each plan contains 3 plans [Arrays] - one for each row in the field
- For each row in the field, 
	if the food is {seed}, then get {seed} seed
Add the {seed} seed to the plan
*/

export const plantSeeds = (plantingPlan) => 
{
    const seedArray = []
    for (const planting of plantingPlan)
    {
        for (const plant of planting)
        {
            if (plant.type === "asparagus") 
                {
                seedArray.push(createAsparagus(plant))
                }
            if (plant.type === "corn")
                {
                seedArray.push(createCorn(plant))
                }
            if (plant.type === "potato")
                {
                seedArray.push(createPotato(plant))
                }
            if (plant.type === "soybean")
                {
                seedArray.push(createSoybean(plant))
                }
            if (plant.type === "sunflower")
                {
                seedArray.push(createSunflower(plant))
                }
            if (plant.type === "wheat")
                {
                seedArray.push(createWheat(plant))
                }
        }
    }
    addPlant(seedArray)
}
