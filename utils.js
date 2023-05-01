const isNullOrUndefined = (val) => val === undefined || val === null

/**
 * 
 * @param {any} data 
 * @returns {boolean}
 */
function validateTableTypeData(data) {
    if (typeof data !== 'object') {
        return false
    }

    const values = Object.values(data)
    for (let i = 0; i < values.length; i++) {
        const val = values[i]
        if (isNullOrUndefined(val.type) || isNullOrUndefined(val.value)) {
            return false
        }
    }

    return true
}

function validateRowUpdateTypeData(data) {
    try{
        if(typeof data === 'object' && Array.isArray(data)){
            const _data = data[0]
            const _identifier = _data._identifier
            if (isNullOrUndefined(_identifier) || isNullOrUndefined(_identifier.value)) {
                return false
            }
        
            const fields = _data.fields
            const fieldsAreValid = validateTableTypeData(fields)
        
            if (!fieldsAreValid) {
                return false
            }
        
            return true
        } else if (typeof data === 'object' && !Array.isArray(data)){
            const _data = data
            const _identifier = _data._identifier
            if (isNullOrUndefined(_identifier) || isNullOrUndefined(_identifier.value)) {
                return false
            }
        
            const fields = _data.fields
            const fieldsAreValid = validateTableTypeData(fields)
        
            if (!fieldsAreValid) {
                return false
            }
        
            return true
        }
    } catch(err){
        throw err
    }
}

module.exports = {
    validateRowUpdateTypeData
}