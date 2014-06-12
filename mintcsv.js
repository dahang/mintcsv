//var mintcsv =function(number,name){

var number = process.argv[2];
var name = process.argv[3];

console.log(number, name);
var path = require('path');
var csv = require('csv');
var fs = require('fs');
var uuid = require('node-uuid');
var fs = require('fs');
var sprintf = require("sprintf-js").sprintf,
    vsprintf = require("sprintf-js").vsprintf;
//var Stream = require("stream");
//var wstream = fs.createWriteStream(path.join(__dirname, name));
//var stream = new Stream();
var stream = [];

var mdstoken = 'txtbAA4BkQ8A1hAAEEYJ804TGM9LuRpFxQ4/JpwCABAkePUAYDsWSaKPdelT3LNcEQADwNd0EgAEGyuQhRMAFAesx2vY9y6yanqXy/JtY6VZX6U9BAAJbXItYnJhbmNoFAAQBIm+T01KwEi3xjo4ClF0ahUAEDOD2TxF06VHiqFrezuD39IFABC1suXgCtrqSL2zwbHkRI3ZFgAQMDHGJCBXG0q1BWZUwvsS0AYAA1BDMBgAAmhrGQACBCcaABVQYWNpZmljIFN0YW5kYXJkIFRpbWUoAAKBLCAAAWQ+AAAcABBq0W31Icaqje/MJkiR5FuGHQAYHgACiN4LABC7biuvgER/AXHDSfhDaM0wIwAYHgACiN4kABBh2WIbrlnRsnXPzRnyDsodJgBZJwBDAwAEGysgEQgAOVNDSEVNRT1odHRwO0FQUElEPW1pY3Jvc29mdC5tZWRpYXJvb20uc3RvcmVmcm9udC8xLjMvbWFpbhwAEF+77XD6pv6ClgNMAIrl4B0zABDuvnHgVZcA59XyMGVml4Iv';
var account_guid = null;
var device_guid = null;

//stream.readable = true;
//stream.pipe(wstream,{end:false});

//decMDS();

//decMDSToken(encMDSToken(mdstoken,device_guid,account_guid));


var Mds = function MDSToken(account_id, device_id) {

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
    for (var j = 1; j <= random; j++) {

        var device_id = uuid();
//        var MdsToken = Mds(accound_id, device_id);
        var MdsToken = encMDSToken(mdstoken, accound_id, device_id);
        var displayName = i.toString() + '|' + j.toString();
        var oneLine = accound_id + "," + device_id + "," + displayName + "," + MdsToken + "\n";
        stream.push((oneLine));
    }
}

if (i >= number) {
    stream.join('\n');
    fs.writeFile(name, stream.join(''));
    console.log("done close");
}

function decMDS() {

    decMDSToken(mdstoken);
//    console.log("mdstoken lenth ", mdstoken.length);
//    var base64token = decode_base64(mdstoken);
//    console.log(base64token, base64token.length);
    return mdstoken;
}


function decMDSToken(mdstoken) {

    var base64token = new Buffer(mdstoken, 'base64').toString('binary');
    var pos = 4;
    var tag = null;
    var length = 0;
    var value = null;
    var device_id = null;
    var account_id = null;

    while (pos < base64token.length) {
        tag = base64token.charCodeAt(pos);
        length = base64token.charCodeAt(pos + 2);
        if ((tag != 0x0E) && (tag != 0x0F)) {

            value = base64token.substring(pos + 3, pos + 3 + length);

            console.log('        MDS Token Element.tag: ', tag);
            console.log('        MDS Token Element.length: ', length);

            if (tag == 0x05) {
                device_id = sprintf('%02x%02x%02x%02x-%02x%02x-%02x%02x-%02x%02x-%02x%02x%02x%02x%02x%02x',
                    value.charCodeAt(3), value.charCodeAt(2), value.charCodeAt(1), value.charCodeAt(0),
                    value.charCodeAt(5), value.charCodeAt(4),
                    value.charCodeAt(7), value.charCodeAt(6),
                    value.charCodeAt(8), value.charCodeAt(9),
                    value.charCodeAt(10), value.charCodeAt(11), value.charCodeAt(12), value.charCodeAt(13), value.charCodeAt(14), value.charCodeAt(15));

            } else if (tag == 0x16) {

                account_id = sprintf('%02x%02x%02x%02x-%02x%02x-%02x%02x-%02x%02x-%02x%02x%02x%02x%02x%02x',
                    value.charCodeAt(3), value.charCodeAt(2), value.charCodeAt(1), value.charCodeAt(0),
                    value.charCodeAt(5), value.charCodeAt(4),
                    value.charCodeAt(7), value.charCodeAt(6),
                    value.charCodeAt(8), value.charCodeAt(9),
                    value.charCodeAt(10), value.charCodeAt(11), value.charCodeAt(12), value.charCodeAt(13), value.charCodeAt(14), value.charCodeAt(15));
            }
            pos = pos + 3 + length;

        } else {
            pos = pos + 3;
        }
    }
    console.log("device_guid :" + device_id);
    console.log("account_guid : " + account_id);
    device_guid = device_id;
    account_guid = account_id;

}


function encMDSToken(mdstoken, accound_guid, device_guid) {
    var base64token = new Buffer(mdstoken, 'base64').toString('binary');

    var pos = 4;
    var tag = null;
    var length = 0;
    var device_id = new Buffer(transformGuid(device_guid));
    var account_id = new Buffer(transformGuid(accound_guid));

    while (pos < base64token.length) {
        tag = base64token.charCodeAt(pos);
        length = base64token.charCodeAt(pos + 2);
        if ((tag != 0x0E) && (tag != 0x0F)) {
//            console.log('        MDS Token Element.tag: ', tag);
//            console.log('        MDS Token Element.length: ', length);
            if (tag == 0x05) {
                var temp = new Buffer(base64token, 'binary');
                device_id.copy(temp, pos + 3, 0, length);
                base64token = temp.toString('binary');

            } else if (tag == 0x16) {

//                account_id = sprintf('%02x%02x%02x%02x-%02x%02x-%02x%02x-%02x%02x-%02x%02x%02x%02x%02x%02x',
//                    value.charCodeAt(3)0, value.charCodeAt(2)1, value.charCodeAt(1)2, value.charCodeAt(0)3,
//                    value.charCodeAt(5)4, value.charCodeAt(4)5,
//                    value.charCodeAt(7)6, value.charCodeAt(6)7,
//                    value.charCodeAt(8)8, value.charCodeAt(9)9,
//                    value.charCodeAt(10), value.charCodeAt(11), value.charCodeAt(12), value.charCodeAt(13), value.charCodeAt(14), value.charCodeAt(15));
                var temp = new Buffer(base64token, 'binary');
                account_id.copy(temp, pos + 3, 0, length);
                base64token = temp.toString('binary');
            }
            pos = pos + 3 + length;

        } else {
            pos = pos + 3;
        }
    }

    var token = new Buffer(base64token, 'binary').toString('base64');
    console.log("encod token :", token);
    return token;

}


function transformGuid(guid) {
    var bytes = uuid.parse(guid);
    var mdsguid = [];
    mdsguid.push(bytes[3]);
    mdsguid.push(bytes[2]);
    mdsguid.push(bytes[1]);
    mdsguid.push(bytes[0]);
    mdsguid.push(bytes[5]);
    mdsguid.push(bytes[4]);
    mdsguid.push(bytes[7]);
    mdsguid.push(bytes[6]);
    mdsguid.push(bytes[8]);
    mdsguid.push(bytes[9]);
    mdsguid.push(bytes[10]);
    mdsguid.push(bytes[11]);
    mdsguid.push(bytes[12]);
    mdsguid.push(bytes[13]);
    mdsguid.push(bytes[14]);
    mdsguid.push(bytes[15]);
    return mdsguid;
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