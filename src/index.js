const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
    '*': ' ',
};



function decode(expr) {

    let arr = expr.split('')
    let n = 10
    let array = new Array(Math.ceil(arr.length / n)).fill().map(q => arr.splice(0, n))
    let transform = []
    array.map(w => {
        let acc = '';
        for (let i = 0; i < w.length; i += 2) {
            if (`${w[i]}${w[i + 1]}` === '00' || `${w[i]}${w[i + 1]}` === '01') {
                acc = ''
            } else if (`${w[i]}${w[i + 1]}` === '10') {
                acc = `${acc}${'.'}`
            } else if (`${w[i]}${w[i + 1]}` === '11') {
                acc = `${acc}${'-'}`
            } else if (`${w[i]}${w[i + 1]}${w[i + 2]}${w[i + 3]}${w[i + 4]}${w[i + 5]}${w[i + 6]}${w[i + 7]}${w[i + 8]}${w[i + 9]}` === '**********') {
                acc = `${'*'}`
                break
            }
        } transform.push(acc)
    })
    let result = [];
    transform.map(l => {
        if (MORSE_TABLE.hasOwnProperty(l)) {
            l = (MORSE_TABLE[l])
            result.push(l)
        }
    })
    return (result.join(''))
}


module.exports = {
    decode
}
