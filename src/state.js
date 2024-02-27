import { atom , selector} from "recoil";

// state 1 is count
export const recoilCount = atom({
    key: 'count',
    default: 0
})

//state 2 is modifier
export const modifier = atom({
    key: 'modifier',
    default: 0
})

// selctor will return the vlaue of count * modifier
export const recoilSelector = selector({
    key: 'count-modifier',
    get: ({get}) => {
        const count = get(recoilCount);
        const currentModifier = get(modifier);
        return count* currentModifier
    }
})