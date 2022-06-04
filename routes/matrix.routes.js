const express = require('express')
const { normalize, criteriaWeight, criteriaWeightSum, lambda, RI } = require('../utils/checkConsistency')
const router = express.Router()
const {rowToColumn, moyenne} = require('../utils/Utils')


router.post('/', (req, res) => {
    const matrics = req.body.matrics
    const N = matrics[0].length
    const normalizeMatrics = normalize(matrics);
    const criteriaWeights = criteriaWeight(normalizeMatrics);
    const criteriaSum = criteriaWeightSum(matrics, criteriaWeights)
    const lambd = lambda(criteriaWeights, criteriaSum);
    const lambdMax = moyenne(lambd);
    const CI = (lambdMax-N)/(N - 1)
    const CR = CI/ RI[N]
    const decision = (CR<0.1)
    return res.json({
        "mormalizeMatrics": normalizeMatrics,
        "N": N,
        "criteriaWeights": criteriaWeights,
        "criteriaWeightSum": criteriaSum,
        "lambdaI": lambd,
        "lambdaMax": lambdMax,
        "CI":CI,
        "CR":CR,
        "decision": decision
    })
})

module.exports = router