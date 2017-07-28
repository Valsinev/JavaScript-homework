function hexToDec(hex) {
    var num = 0;
    for(var i=0;i<hex.length;i++) {
        var hexdigit = parseInt(hex[i],16);
        num = (num << 4) | hexdigit;
    }
    return num;
}
var n = '4E';
console.log(hexToDec(n));
