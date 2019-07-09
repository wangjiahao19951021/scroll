var objs = {
    1: {
        name: '朱昆鹏'
    },
    2: {
        name: '林雨桐'
    }
};
Object.keys(objs).forEach(function (key) {
    console.log(key, objs[key]);
});
// 1 {name: "朱昆鹏"}
// 2 {name: "林雨桐"}
