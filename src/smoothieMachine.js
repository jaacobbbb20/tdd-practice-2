export default function smoothieMachine(...initialIngredients) {
    // Store the initial ingredients inside of a closure
        let ingredients = [...initialIngredients];
    // Return a function that takes additional ingredients
        return function(...additionalIngredients) {
    // Combine the initial and additional ingredients
            ingredients = [...ingredients, ...additionalIngredients];
    // Create the output and return the result
            const result = `I'm having a smoothie with ${ingredients.join(' and ')}`;
          
            return result;
        };
    }