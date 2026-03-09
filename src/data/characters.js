import terraIcon from '../assets/terra_golem_1772981341328.png';
import aquaIcon from '../assets/aqua_sylph_1772981359075.png';
import aeroIcon from '../assets/aero_sprite_1772981375362.png';
import ignisIcon from '../assets/ignis_ember_1772981404179.png';
import voidIcon from '../assets/void_weaver_1772981422356.png';
import luminousIcon from '../assets/luminous_seraph_1772981438857.png';
import strawberryMatchaIcon from '../assets/strawberry_matcha_1772981999638.png';
import bubbleTeaIcon from '../assets/bubble_tea_1772982017700.png';

export const gachaCharacters = [
    {
        id: 'terra', image: terraIcon, name: 'Terra Golem', rarity: 'Common', color: '#c2b280', // Soft earthy brown/gold
        stages: [
            { levelThreshold: 1, image: terraIcon, name: 'Terra Pebble' },
            { levelThreshold: 5, image: terraIcon, name: 'Terra Golem' },
            { levelThreshold: 10, image: terraIcon, name: 'Axiom Behemoth' }
        ]
    },
    {
        id: 'aqua', image: aquaIcon, name: 'Aqua Sylph', rarity: 'Rare', color: '#8dd3c7', // Soft minty aqua
        stages: [
            { levelThreshold: 1, image: aquaIcon, name: 'Aqua Droplet' },
            { levelThreshold: 5, image: aquaIcon, name: 'Aqua Sylph' },
            { levelThreshold: 10, image: aquaIcon, name: 'Tidal Sovereign' }
        ]
    },
    {
        id: 'aero', image: aeroIcon, name: 'Aero Sprite', rarity: 'Rare', color: '#b3e2cd', // Soft green tea
        stages: [
            { levelThreshold: 1, image: aeroIcon, name: 'Aero Wisp' },
            { levelThreshold: 5, image: aeroIcon, name: 'Aero Sprite' },
            { levelThreshold: 10, image: aeroIcon, name: 'Zephyr Lord' }
        ]
    },
    {
        id: 'ignis', image: ignisIcon, name: 'Phoenix of Variables', rarity: 'Epic', color: '#fdcdac', // Soft warm peach
        stages: [
            { levelThreshold: 1, image: ignisIcon, name: 'Ignis Ember' },
            { levelThreshold: 5, image: ignisIcon, name: 'Ignis Flare' },
            { levelThreshold: 10, image: ignisIcon, name: 'Phoenix of Variables' }
        ]
    },
    {
        id: 'void', image: voidIcon, name: 'Void Weaver', rarity: 'Legendary', color: '#decbe4', // Soft lavender
        stages: [
            { levelThreshold: 1, image: voidIcon, name: 'Void Ripple' },
            { levelThreshold: 5, image: voidIcon, name: 'Void Walker' },
            { levelThreshold: 10, image: voidIcon, name: 'Void Weaver' }
        ]
    },
    {
        id: 'luminous', image: luminousIcon, name: 'Luminous Seraph', rarity: 'Legendary', color: '#fff2ae', // Soft pale gold
        stages: [
            { levelThreshold: 1, image: luminousIcon, name: 'Luminous Spark' },
            { levelThreshold: 5, image: luminousIcon, name: 'Luminous Spirit' },
            { levelThreshold: 10, image: luminousIcon, name: 'Luminous Seraph' }
        ]
    },
    {
        id: 'strawberry_matcha', image: strawberryMatchaIcon, name: 'Strawberry Matcha Fairy', rarity: 'Legendary', color: '#ffb6c1', // Soft pink
        stages: [
            { levelThreshold: 1, image: strawberryMatchaIcon, name: 'Matcha Drop' },
            { levelThreshold: 5, image: strawberryMatchaIcon, name: 'Berry Swirl' },
            { levelThreshold: 10, image: strawberryMatchaIcon, name: 'Strawberry Matcha Fairy' }
        ]
    },
    {
        id: 'bubble_tea', image: bubbleTeaIcon, name: 'Boba Sovereign', rarity: 'Legendary', color: '#d2b48c', // Tan/Brown sugar
        stages: [
            { levelThreshold: 1, image: bubbleTeaIcon, name: 'Boba Pearl' },
            { levelThreshold: 5, image: bubbleTeaIcon, name: 'Milk Tea Sprite' },
            { levelThreshold: 10, image: bubbleTeaIcon, name: 'Boba Sovereign' }
        ]
    }
];

export const getCharacterStage = (character, currentLevel) => {
    // Reverse the stages to find the highest threshold that the currentLevel meets or exceeds
    if (!character || !character.stages) return character;
    const stages = [...character.stages].reverse();
    const currentStage = stages.find(s => currentLevel >= s.levelThreshold);
    return currentStage ? currentStage : character.stages[0]; // fallback to stage 1
};

export const getRandomCharacter = () => {
    // Simple weighted random: 50% Common, 30% Rare, 15% Epic, 5% Legendary
    const roll = Math.random() * 100;

    try {
        if (roll > 95) {
            const legendaries = gachaCharacters.filter(c => c.rarity === 'Legendary');
            if (legendaries.length > 0) return legendaries[Math.floor(Math.random() * legendaries.length)];
        }
        if (roll > 80) {
            const epics = gachaCharacters.filter(c => c.rarity === 'Epic');
            if (epics.length > 0) return epics[Math.floor(Math.random() * epics.length)];
        }
        if (roll > 50) {
            const rares = gachaCharacters.filter(c => c.rarity === 'Rare');
            if (rares.length > 0) return rares[Math.floor(Math.random() * rares.length)];
        }

        // Default to a Common character
        const commons = gachaCharacters.filter(c => c.rarity === 'Common');
        if (commons.length > 0) return commons[Math.floor(Math.random() * commons.length)];

        // Absolute fallback to first character
        return gachaCharacters[0];
    } catch (e) {
        console.error("Gacha roll failed:", e);
        return gachaCharacters[0];
    }
};
