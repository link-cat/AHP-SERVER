const {rowToColumn, moyenne} = require('../utils/Utils')

module.exports.normalize = (matrics) =>{
    let normalizeMatrics = [];
    let columns = rowToColumn(matrics)
    for (column of columns) {
        let sumColumn = 0;
        let normalizeColumn = [];
        for (elt of column) sumColumn += elt;
        for (elt of column) {
            normalizeColumn.push(elt / sumColumn)
        }
        normalizeMatrics.push(normalizeColumn)
    }
    normalizeMatrics = rowToColumn(normalizeMatrics)
    return normalizeMatrics;
}

module.exports.criteriaWeight = (matrics) =>{
    let criteriaWeight = []
    for (row of matrics) {
        criteriaWeight.push(moyenne(row))
    }

    return criteriaWeight
}

module.exports.criteriaWeightSum = (matrics, criteriaWeights) =>{
    let criteriaWeightSum = []
    for(row of matrics){
        sum = 0;
        i=0;
        for(elt of row){
            sum += elt*criteriaWeights[i]
            i++
        }
        criteriaWeightSum.push(sum)
    }
    return criteriaWeightSum
}

module.exports.lambda = (criteriaWeights, criteriaWeightSum) =>{
    let lambda = []
    i=0;
    for( elt of criteriaWeightSum){
        lambda.push(elt/criteriaWeights[i])
        i++;
    }
    return lambda
}

module.exports.RI = [0.00, 0.00, 0.58, 0.90, 1.12, 1.24, 1.32, 1.41, 1.45, 1.49 ]