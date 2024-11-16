import { DC } from "./constants";
import { Pelle } from "./globals";
import { Laitela } from "./globals";
import { Teresa } from "./globals";
import { Ra } from "./globals";
import { TeresaUnlocks } from "./globals";
import { Enslaved } from "./globals";
import { Currency } from "./globals";
import { isRealityAvailable } from "./globals";

class AdBonusState {
    constructor(canBoost, getBoost, bonusString) {
        this.canBoost = canBoost;
        this.getBoost = getBoost;
        this.bonusString = bonusString;
    }

    get boost() {
        return this.getBoost();
    }

    get boostDisplay() {
        return formatX(this.boost, 2);
    }

    get bonusDisplay() {
        return this.bonusString(this.boostDisplay);
    }

    doesBoost() {
        return AdBonus.isActive && this === AdBonus.activeBoost;
    }

    effectiveBoost(defaultValue = DC.D1) {
        return this.doesBoost() ? this.boost : defaultValue;
    }
}

class BoostToRarity extends AdBonusState {
    get boostDisplay() {
        return formatRarity(this.boost.toNumber());
    }
}

export const AdBonus = {
    get isActive() {
        return !Pelle.isDoomed;
    },

    boostToADs: new AdBonusState(
        () => true,
        () => DC.D2,
        adBonus => `Antimatter Dimensions are multiplied by ${adBonus}`
    ),

    boostToIP: new AdBonusState(
        () => player.infinities.toNumber() >= 10,
        () => Currency.infinityPoints.value.pow(0.01).clampMin(DC.D2),
        adBonus => `IP gain is multiplied by ${adBonus}`
    ),

    boostToEP: new AdBonusState(
        () => player.eternities.toNumber() >= 10,
        () => Currency.eternityPoints.value.pow(0.01).clamp(DC.D1_5, DC.E10),
        adBonus => `EP gained on Eternity is multiplied by ${adBonus}`
    ),

    boostToDT: new AdBonusState(
        () => PlayerProgress.dilationUnlocked(),
        () => DC.D2,
        adBonus => `Dilated Time gain is multiplied by ${adBonus}`
    ),

    boostToGamespeed: new AdBonusState(
        () => PlayerProgress.realityUnlocked() && isRealityAvailable(),
        () => DC.D2,
        adBonus => `Game speed is multiplied by ${adBonus}`
    ),

    boostToRM: new AdBonusState(
        () => Teresa.isUnlocked,
        () => DC.D2,
        adBonus => `RM gain is multiplied by ${adBonus}`
    ),

    boostToRelicShards: new AdBonusState(
        () => TeresaUnlocks.effarig.isUnlocked,
        () => DC.D2,
        adBonus => `Relic Shard gain is multiplied by ${adBonus}`
    ),

    boostToRarity: new BoostToRarity(
        () => Enslaved.isUnlocked,
        () => DC.D5,
        adBonus => `Glyph rarity is increased by ${adBonus}`
    ),

    boostToMemories: new AdBonusState(
        () => Ra.isUnlocked,
        () => DC.D1_5,
        adBonus => `Memory gain is multiplied by ${adBonus}`
    ),

    boostToDE: new AdBonusState(
        () => Laitela.isUnlocked,
        () => DC.D2,
        adBonus => `Dark Energy gain is multiplied by ${adBonus}`
    ),

    get boosts() {
        return [
            this.boostToDE,
            this.boostToMemories,
            this.boostToRarity,
            this.boostToRelicShards,
            this.boostToRM,
            this.boostToGamespeed,
            this.boostToDT,
            this.boostToEP,
            this.boostToIP,
            this.boostToADs
        ];
    },

    get activeBoost() {
        return this.boosts.find(boost => boost.canBoost());
    },

    getDisplay() {
        if (Pelle.isDoomed) {
            return `Ad bonus has been ${wordShift.wordCycle(["Destroyed", "Annihilated", "Nullified"])} by Pelle`;
        } else {
            return this.activeBoost.bonusDisplay;
        }
    }
};