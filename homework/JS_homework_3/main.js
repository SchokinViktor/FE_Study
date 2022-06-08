let main = {
    userName: 'stefan',
    password: '123qwerty',
    email: '',
};


console.log('Мейн:', main);

let doClone = (main) => {
    let newObj = {};
    for (const key in main) {
      newObj[key] = main[key];
    }
    return newObj;
};

let adminUser = doClone(main);

adminUser.age = '32';
console.log('Клон:', adminUser);