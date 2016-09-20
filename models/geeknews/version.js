var fs = require('fs');

function Version(code, des) {
    this.code = code;
    this.des = des;
}

var version = new Version('1.0.0','version');

fs.readFile('models/geeknews/version.txt', 'utf-8', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        version.code = data.substr(1,5);
        version.des = data;
    }
});

module.exports = {
    getVersionCode: () => {
        return version.code;
    },
    
    getVersionDes: () => {
        return version.des;
    }
};