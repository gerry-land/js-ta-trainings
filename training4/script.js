var num10 = 1234;
function toHex(num10) {
    let num16 = '';
    for (let i = num10; i > 0; ) {
        switch (i % 16) {
            case 10:
                {
                    num16 += 'a';
                }
                break;
            case 11:
                {
                    num16 += 'b';
                }
                break;
            case 12:
                {
                    num16 += 'c';
                }
                break;
            case 13:
                {
                    num16 += 'd';
                }
                break;
            case 14:
                {
                    num16 += 'e';
                }
                break;
            case 15: {
                num16 += 'f';
            }
            default: {
                num16 += i % 16;
            }
        }
        i = i / 16;
        i = Math.trunc(i);
    }
    var revurse = '';
    if (num16 === '') return '';  
    else { 
        for (let j = num16.length; j >= 0; j--) {
            revurse += num16.charAt(j);
        }
        return revurse;
    }
}

var z = toHex(num10);
console.log(z);
