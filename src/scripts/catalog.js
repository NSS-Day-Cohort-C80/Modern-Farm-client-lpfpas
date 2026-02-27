export const Catalog = (harvestFoodArray) => {
    
    let harvestHTML = "";

    for (const harvest of harvestFoodArray) {
        harvestHTML += `
            <section class="plant">${harvest.type}</section>
        `;
    }

    return harvestHTML
}

