import terraIcon from '../assets/terra_golem_1772981341328.png';
import aquaIcon from '../assets/aqua_sylph_1772981359075.png';
import aeroIcon from '../assets/aero_sprite_1772981375362.png';
import ignisIcon from '../assets/ignis_ember_1772981404179.png';
import voidIcon from '../assets/void_weaver_1772981422356.png';
import luminousIcon from '../assets/luminous_seraph_1772981438857.png';
import strawberryMatchaIcon from '../assets/strawberry_matcha_1772981999638.png';
import bubbleTeaIcon from '../assets/bubble_tea_1772982017700.png';

// Singaporean Favorites
import tehTarikIcon from '../assets/teh_tarik.png';
import kopiOIcon from '../assets/kopi_o.png';
import maltDinoIcon from '../assets/malt_dinosaur.png';
import soyaBeanIcon from '../assets/soya_bean.png';

const baseCharacters = [
    { id: 'terra', image: terraIcon, name: 'Terra Golem', rarity: 'Common', color: '#c2b280' },
    { id: 'aqua', image: aquaIcon, name: 'Aqua Sylph', rarity: 'Common', color: '#8dd3c7' },
    { id: 'aero', image: aeroIcon, name: 'Aero Sprite', rarity: 'Rare', color: '#b3e2cd' },
    { id: 'ignis', image: ignisIcon, name: 'Phoenix of Variables', rarity: 'Rare', color: '#fdcdac' },
    { id: 'void', image: voidIcon, name: 'Void Weaver', rarity: 'Epic', color: '#decbe4' },
    { id: 'luminous', image: luminousIcon, name: 'Luminous Seraph', rarity: 'Epic', color: '#fff2ae' },
    { id: 'strawberry_matcha', image: strawberryMatchaIcon, name: 'Strawberry Matcha Fairy', rarity: 'Legendary', color: '#ffb6c1' },
    { id: 'bubble_tea', image: bubbleTeaIcon, name: 'Boba Sovereign', rarity: 'Legendary', color: '#d2b48c' },
    { id: 'teh_tarik', image: tehTarikIcon, name: 'Teh Tarik Puller', rarity: 'Rare', color: '#d2b48c' },
    { id: 'kopi_o', image: kopiOIcon, name: 'Kopi O Master', rarity: 'Common', color: '#4b3621' },
    { id: 'malt_dino', image: maltDinoIcon, name: 'Malt Dinosaur', rarity: 'Legendary', color: '#3d2b1f' },
    { id: 'soya_bean', image: soyaBeanIcon, name: 'Soya Bean Sprite', rarity: 'Common', color: '#f5f5dc' },
];

const generateStages = (icon, name) => [
    { levelThreshold: 1, image: icon, name: `${name} Wisp` },
    { levelThreshold: 5, image: icon, name: `${name} Sprite` },
    { levelThreshold: 10, image: icon, name: name }
];

const expandedCharacters = [];

// Distribution: 60 Common, 25 Rare, 12 Epic, 3 Legendary
const distribution = { Common: 60, Rare: 25, Epic: 12, Legendary: 3 };
const iconsByRarity = {
    Common: [terraIcon, aquaIcon, kopiOIcon, soyaBeanIcon],
    Rare: [aeroIcon, ignisIcon, tehTarikIcon],
    Epic: [voidIcon, luminousIcon],
    Legendary: [strawberryMatchaIcon, bubbleTeaIcon, maltDinoIcon]
};

// Add base characters first
baseCharacters.forEach(bc => {
    expandedCharacters.push({
        ...bc,
        stages: generateStages(bc.image, bc.name)
    });
    distribution[bc.rarity]--;
});

// Fill the rest to reach 100
const rarityLevels = ['Common', 'Rare', 'Epic', 'Legendary'];
rarityLevels.forEach(rarity => {
    const count = distribution[rarity];
    const icons = iconsByRarity[rarity];
    for (let i = 0; i < count; i++) {
        const icon = icons[i % icons.length];
        const id = `${rarity.toLowerCase()}_${i + 10}`;
        const name = `${rarity} Pet #${i + 1}`;
        expandedCharacters.push({
            id,
            image: icon,
            name,
            rarity,
            color: rarity === 'Common' ? '#c2b280' : rarity === 'Rare' ? '#b3e2cd' : rarity === 'Epic' ? '#decbe4' : '#fff2ae',
            stages: generateStages(icon, name)
        });
    }
});

export const gachaCharacters = expandedCharacters.slice(0, 100);

export const getCharacterStage = (character, currentLevel) => {
    if (!character || !character.stages) return character;
    const stages = [...character.stages].reverse();
    const currentStage = stages.find(s => currentLevel >= s.levelThreshold);
    return currentStage ? currentStage : character.stages[0];
};

export const getRandomCharacter = (score = 0) => {
    // Score-based luck bonus: up to +10 bonus for 100% score
    const luckBonus = (score / 100) * 10;
    const roll = Math.random() * 100 + luckBonus;

    try {
        if (roll > 97) { // Legendary (base 3%, can reach 13% with 100 score)
            const legendaries = gachaCharacters.filter(c => c.rarity === 'Legendary');
            if (legendaries.length > 0) return legendaries[Math.floor(Math.random() * legendaries.length)];
        } else if (roll > 85) { // Epic (base 12%, roll > 85 with bonus)
            const epics = gachaCharacters.filter(c => c.rarity === 'Epic');
            if (epics.length > 0) return epics[Math.floor(Math.random() * epics.length)];
        } else if (roll > 60) { // Rare (base 25%)
            const rares = gachaCharacters.filter(c => c.rarity === 'Rare');
            if (rares.length > 0) return rares[Math.floor(Math.random() * rares.length)];
        }

        const commons = gachaCharacters.filter(c => c.rarity === 'Common');
        if (commons.length > 0) return commons[Math.floor(Math.random() * commons.length)];

        return gachaCharacters[0];
    } catch (e) {
        console.error("Gacha roll failed:", e);
        return gachaCharacters[0];
    }
};

