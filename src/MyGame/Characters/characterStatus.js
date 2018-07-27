class characterStatus {
    constructor(statusType) {
        this.type = statusType;
    }

    /**
     * 计算结果
     * @param character {Character}
     */
    computeStatus(character) {

    }
}

/**
 * buff或者debuff
 */
class BuffStatus extends characterStatus {
    /**
     *
     * @param attributeName {string}
     * @param turn {number}
     * @param value {number}
     * @param [effectType = _C.percent] {number} : 是按照百分比计算还是按照数值计算
     */
    constructor(attributeName, turn, value, effectType = _C.percent) {
        super(_C.BuffStatus);
        this.attributeName = attributeName;
        this.turn = turn;
        this.value = value;
        this.effectType = effectType;
    }

    computeStatus(character) {
        if (this.effectType === _C.percent) {
            character["mCurrent" + this.attributeName] = character["m" + this.attributeName] * (1.0 + this.value);
        } else if (this.effectType === _C.numeric) {
            character["mCurrent" + this.attributeName] = character["m" + this.attributeName] * (1.0 + this.value);
        }
    }
}


