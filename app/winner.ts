function isUsed (value: string | null) {
    return value !== null
}

const topLeftCorner = 0
const topRowPivot = 1
const topRightCorner = 2
const leftRowPivot = 3
const centerPivot = 4
const rightRowPivot = 5
const bottomLeftCorner = 6
const bottomRowPivot = 7
const bottomRightCorner = 8

const cases = [
    // top edge
    { target: topRowPivot, testCases: [{ left: topLeftCorner, right: topRightCorner }] },
    // right edge
    { target: rightRowPivot, testCases: [{ left: topRightCorner, right: bottomRightCorner }] },
    // bottom edge
    { target: bottomRowPivot, testCases: [{ left: bottomLeftCorner, right: bottomRightCorner }] },
    // left edge
    { target: leftRowPivot, testCases: [{ left: topLeftCorner, right: bottomLeftCorner }] },
    // center
    {
        target: centerPivot,
        testCases: [
            { left: topLeftCorner, right: bottomRightCorner },
            { left: topRightCorner, right: bottomLeftCorner },
            { left: topRowPivot, right: bottomRowPivot },
            { left: leftRowPivot, right: rightRowPivot },
        ]
    }
]

function checkWinnerScores (scores: string[], target: string, testCases: any) {
    for (const testCase of testCases) {
        const left = scores[testCase.left]
        const right = scores[testCase.right]
        if(isUsed(left) && isUsed(right)) {
            if(left === target && target === right) return target
        }
    }
    return false
}

export default function checkWinner (scores: string[]) {
    for(const testCase of cases) {
        const { target, testCases } = testCase
        if(isUsed(scores[target])) {
            const result = checkWinnerScores(scores, scores[target], testCases)
            if(result !== false) return result
        }
    }
    return 'NONE'
}