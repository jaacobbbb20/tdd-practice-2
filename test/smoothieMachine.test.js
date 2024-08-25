import { expect } from 'chai';
import smoothieMachine from '../src/smoothieMachine.js';
describe('smoothieMachine', function() {
    it('Can start with no ingredients, then add one', function() {
        let smoothie = smoothieMachine();
        expect(smoothie("milk")).to.equal("I'm having a smoothie with milk");
    });

    it('Can start with no ingredients, then add multiple', function() {
        let smoothie = smoothieMachine();
        expect(smoothie("milk", "kale", "spinach")).to.equal("I'm having a smoothie with milk and kale and spinach");
    });

    it('Can accumulate ingredients correctly', function() {
        let smoothie = smoothieMachine("milk");
        expect(smoothie("kale")).to.equal("I'm having a smoothie with milk and kale");
        expect(smoothie("spinach", "honey")).to.equal("I'm having a smoothie with milk and kale and spinach and honey");
    });

    it('Can handle smoothie starting with some ingredients', function() {
        let smoothie = smoothieMachine("apples", "bananas", "berries");
        expect(smoothie("pineapple")).to.equal("I'm having a smoothie with apples and bananas and berries and pineapple");
    });

    it('Can handle smoothie with no ingredients', function() {
        let smoothie = smoothieMachine();
        expect(smoothie()).to.equal("I'm having a smoothie with ");
    });

    it('Can handle smoothie with one ingredient', function() {
        let smoothie = smoothieMachine();
        expect(smoothie("water")).to.equal("I'm having a smoothie with water");
    });

    it('Can handle smoothie with a single initial ingredient, then more added', function() {
        let smoothie = smoothieMachine("water");
        expect(smoothie("lemon", "mint")).to.equal("I'm having a smoothie with water and lemon and mint");
    });

    it('Can handle smoothie with multiple initial ingredients, then more added', function() {
        let smoothie = smoothieMachine("water", "lemon");
        expect(smoothie("mint", "honey")).to.equal("I'm having a smoothie with water and lemon and mint and honey");
    });
});