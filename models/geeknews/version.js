function Version(code, des) {
    this.code = code;
    this.des = des;
}

var version = new Version('1.0.1','Test des\nTest des');

module.exports = {
    getVersion: () => {
        return version;
    }
};