

export const harvestPlants = (plantsArray) => {
    const seedArray = []
        for (const plants of plantsArray) {
            if(plants.type === "corn"){
                let count = plants.output/2
                while (count > 0) {
                    seedArray.push(plants)
                    count--
                }
            }
            else
                {
                let count = plants.output
                while (count > 0) {
                    seedArray.push(plants)
                    count--
                }
            }
        }
    return seedArray
}