export const getScore = (offset: number): { home: number, away: number } => {
    const searchOffset = (arr: { offset: number, score: { home: number, away: number } }[]) : { home: number, away: number } => {
        const arrLength = arr.length;
        const middleIndex = Math.floor(arrLength / 2);
        if (arrLength === 1)
            return arr[0].score;
        if (arr[middleIndex]['offset'] <= offset) {
            return searchOffset(arr.slice(middleIndex));
        }
        
        return searchOffset(arr.slice(0, middleIndex));
    }
    return searchOffset(scoreStamps);
};