import shortId from 'shortid';

// console.log(shortId.generate());

export function short(userName) {
    const user = {
        id: shortId.generate(),
        userName,
    }


    console.log('newUser', user);
}