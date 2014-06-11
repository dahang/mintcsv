var number = process.argv[2];
var name = process.argv[3];

console.log(number, name);
var path = require('path');
var csv = require('csv');
var fs = require('fs');
var uuid = require('node-uuid');
var fs = require('fs');
//var Stream = require("stream");
//var wstream = fs.createWriteStream(path.join(__dirname, name));
//var stream = new Stream();
var stream = [];

//stream.readable = true;
//stream.pipe(wstream,{end:false});

//decMDS();

var Mds = function MDSToken(account_id, device_id) {
//    return account_id + device_id;
    var mdstoken = 'txtbAA4BkQ8A1hAAEEYJ804TGM9LuRpFxQ4/JpwCABAkePUAYDsWSaKPdelT3LNcEQADwNd0EgAEGyuQhRMAFAesx2vY9y6yanqXy/JtY6VZX6U9BAAJbXItYnJhbmNoFAAQBIm+T01KwEi3xjo4ClF0ahUAEDOD2TxF06VHiqFrezuD39IFABC1suXgCtrqSL2zwbHkRI3ZFgAQMDHGJCBXG0q1BWZUwvsS0AYAA1BDMBgAAmhrGQACBCcaABVQYWNpZmljIFN0YW5kYXJkIFRpbWUoAAKBLCAAAWQ+AAAcABBq0W31Icaqje/MJkiR5FuGHQAYHgACiN4LABC7biuvgER/AXHDSfhDaM0wIwAYHgACiN4kABBh2WIbrlnRsnXPzRnyDsodJgBZJwBDAwAEGysgEQgAOVNDSEVNRT1odHRwO0FQUElEPW1pY3Jvc29mdC5tZWRpYXJvb20uc3RvcmVmcm9udC8xLjMvbWFpbhwAEF+77XD6pv6ClgNMAIrl4B0zABDuvnHgVZcA59XyMGVml4Iv';
    return mdstoken;
};
//

function showDrain() {
    console.log("write drain !!!");
}

var i = 0;
for (i = 1; i <= number; ++i) {
    var accound_id = uuid();
    var random = Math.floor((Math.random() * 6) + 1);
    for(var j=1; j<=random;j++) {

        var device_id = uuid();
        var MdsToken = Mds(accound_id, device_id);
        var displayName = i.toString()+'|'+ j.toString();
        var oneLine = accound_id + "," + device_id + "," + displayName + "," + MdsToken + "\n";
        stream.push((oneLine));
    }
}

if (i >= number) {
    stream.join('\n');
    fs.writeFile(name,stream.join(''));
    console.log("done close");
}


//writeOneMillionTimes(wstream,decMDS(),encoding,callback);


function decMDS() {

    var mdstoken = 'txtbAA4BkQ8A1hAAEEYJ804TGM9LuRpFxQ4/JpwCABAkePUAYDsWSaKPdelT3LNcEQADwNd0EgAEGyuQhRMAFAesx2vY9y6yanqXy/JtY6VZX6U9BAAJbXItYnJhbmNoFAAQBIm+T01KwEi3xjo4ClF0ahUAEDOD2TxF06VHiqFrezuD39IFABC1suXgCtrqSL2zwbHkRI3ZFgAQMDHGJCBXG0q1BWZUwvsS0AYAA1BDMBgAAmhrGQACBCcaABVQYWNpZmljIFN0YW5kYXJkIFRpbWUoAAKBLCAAAWQ+AAAcABBq0W31Icaqje/MJkiR5FuGHQAYHgACiN4LABC7biuvgER/AXHDSfhDaM0wIwAYHgACiN4kABBh2WIbrlnRsnXPzRnyDsodJgBZJwBDAwAEGysgEQgAOVNDSEVNRT1odHRwO0FQUElEPW1pY3Jvc29mdC5tZWRpYXJvb20uc3RvcmVmcm9udC8xLjMvbWFpbhwAEF+77XD6pv6ClgNMAIrl4B0zABDuvnHgVZcA59XyMGVml4Iv';
//    console.log("mdstoken lenth ", mdstoken.length);
//    var base64token = decode_base64(mdstoken);
//    console.log(base64token, base64token.length);
    return mdstoken;

}

function decode_base64(s) {
    var e = {}, i, k, v = [], r = '', w = String.fromCharCode;
    var n = [
        [65, 91],
        [97, 123],
        [48, 58],
        [43, 44],
        [47, 48]
    ];

    for (z in n) {
        for (i = n[z][0]; i < n[z][1]; i++) {
            v.push(w(i));
        }
    }
    for (i = 0; i < 64; i++) {
        e[v[i]] = i;
    }

    for (i = 0; i < s.length; i += 72) {
        var b = 0, c, x, l = 0, o = s.substring(i, i + 72);
        for (x = 0; x < o.length; x++) {
            c = e[o.charAt(x)];
            b = (b << 6) + c;
            l += 6;
            while (l >= 8) {
                r += w((b >>> (l -= 8)) % 256);
            }
        }
    }
    return r;
}

function writeOneMillionTimes(writer, data, encoding, callback) {
    var loops = number;
    writecsv();
    function writecsv() {
        var ok = true;
        do {
            loops -= 1;
            if (loops === 0) {
                // last time!
                writer.write(data, encoding, callback);
            } else {
                // see if we should continue, or wait
                // don't pass the callback, because we're not done yet.
                ok = writer.write(data, encoding);
            }
        } while (i > 0 && ok);
        if (i > 0) {
            // write some more once it drains
            writer.once('drain', writecsv);
        }
    }
}

//}

//module.exports = mintcsv;