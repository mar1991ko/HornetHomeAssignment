export const inventoryElements = {
    addToCart: (itemName) => `[data-test="add-to-cart-${transform(itemName)}"]`,
    removeButton: '[data-test="remove-"]',
    onesieImage: '[src="/assets/red-onesie-1200x1500-BrSuq0ic.jpg"]',
}

function transform(text) {
    return text.replaceAll(' ', '-').toLowerCase();
}