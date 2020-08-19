
export function textChangeHandler(event, fieldName) {
    let {value} = event.target;
    this.setState({
        [fieldName]: value
    });
};

export function contains(arr, keys, values) {
    for (var i = 0; i < arr.length; i++) {
        var isMatch = true
        for (var j = 0; j < keys.length; j++) {
            var key = keys[j]
            var val = values[j]
            if(arr[i][key] !== val){
                isMatch = false;
            }
        }
        if (isMatch === true) {
            return arr[i];
        }
    }
    return false;
}