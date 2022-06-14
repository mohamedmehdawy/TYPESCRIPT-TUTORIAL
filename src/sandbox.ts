type StringOrNum = string | number;

type ObjWithName = { name: string; uid: StringOrNum };

const userDetail = (item: string, uid: StringOrNum) => {
    console.log(`${item} connect with uid => ${uid}`);
};

const myFun = (user: ObjWithName) => {
    console.log(`${user} say hello`);
};

const anotherOne = (user: ObjWithName) => {
    console.log(`${user} say hello`);
};
