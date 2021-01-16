
export const requiredField = (value) => {
    if(!value) return 'Field is required, please fill it';
    return undefined
}

export const maxLengthCreator = (maxLength) => (value) => {
    if(value.length > maxLength) return `Max length is ${maxLength} symbols`;
    return undefined
}