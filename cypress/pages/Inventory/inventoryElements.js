export const inventoryElements = {
    addToCart: (itemName) => `[data-test="add-to-cart-${transform(itemName)}"]`,
    removeButton: '[data-test="remove-"]',
}

function transform(text) {
    return text.replaceAll(' ', '-').toLowerCase();
}