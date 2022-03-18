let converter = function(num){
    if(isNaN(num) || num < 0 || Number.isInteger(num)===false ){
        return (`invalid number! Perhaps you entered a negative value or  an alphabeth even a decimal number`)
    }
    else{
        if(num <= 999){
            return `${num} followed you`
        }
        else if( num <= 999999 && num % 1000 ===0){
            result = num/1000
            return (`${result}K followed you`)
        }
        else if( num <= 999999 && num % 1000 !==0){
            result = num/1000
            return (`${result.toFixed(1)}K followed you`)
        }
        else if( num <= 999999999 && num % 1000 ===0){
            result = num/1000000
            return (`${result}M followed you`)
        }

        else if( num <= 999999999 && num % 1000 !==0){
            result = num/1000000
            return (`${result.toFixed(1)}M followed you`)
        }
        else if( num <= 999999999999 && num % 1000 ===0){
            result = num/1000000000
            return (`${result}B followed you`)
        }

        else if( num <= 999999999999 && num % 1000 !==0){
            result = num/1000000000
            return (`${result.toFixed(1)}B followed you`)
        }
        else{
            return 'Ooops!!! You can only have Maximum of Billion followers '
        }
    }
}
let a = converter(5334782989)
console.log(a)