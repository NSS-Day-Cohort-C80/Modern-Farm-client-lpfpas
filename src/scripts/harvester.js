

export const harvestPlants = (plantsArray) => {
    const seedArray = []
        for (const plants of plantsArray) {
            if(plants.type === "Corn"){

                plants.output = plants.output/2
                    seedArray.push(plants)
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

