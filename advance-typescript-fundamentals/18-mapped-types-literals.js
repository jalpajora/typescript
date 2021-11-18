"use strict";
{
    function createGetterObject(obj) {
        const newObj = {};
        for (const key of Object.keys(obj)) {
            const capitalizedKey = key[0].toUpperCase() + key.substr(1);
            const getterKey = `get${capitalizedKey}`;
            newObj[getterKey] = () => obj[key];
        }
        return newObj;
    }
    const user = createGetterObject({
        id: 12345,
        name: 'Marius Schulz',
        twitter: 'mariusschulz',
    });
    console.log(user);
    console.log(user.getId());
    console.log(user.getName());
    console.log(user.getTwitter());
}
