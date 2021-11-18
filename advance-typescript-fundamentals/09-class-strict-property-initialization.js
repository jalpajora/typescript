"use strict";
var _a;
{
    class User {
        constructor(username) {
            // initializing directly
            this.username = username;
        }
        setUsername(username) {
            this.username = username;
        }
    }
    const user = new User('malfor');
    user.setUsername('draco');
    const username = (_a = user.username) === null || _a === void 0 ? void 0 : _a.toLowerCase();
    console.log(username);
}
