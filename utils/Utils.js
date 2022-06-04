module.exports.rowToColumn = (matrics) => {
        let columns = []
        for (row of matrics) columns.push([])
        for (row of matrics) {
            let i = 0;
            for (elt of row) {
                columns[i].push(elt)
                i++
            }
        }
        return columns
    }

    module.exports.moyenne = (tab)=>{
        sum=0;
        for(elt of tab) sum += elt

        return sum/tab.length
    }