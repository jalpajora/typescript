{
  class User {
    // ! - definite assignment assertion, exclamation mark after property name
    // problem: if we dont actually assign the property, TS will not able to determine that you did not initialize the property
    // recommended to initialize the property via constructer or assign value to the property directly instead of this approach

    // username!: string;

    // constructor(username: string) {
    //   this.setUsername(username);
    // }

    username: string;

    constructor(username: string) {
      // initializing directly
      this.username = username;
    }

    setUsername(username: string) {
      this.username = username;
    }
  }

  const user = new User('malfor');
  user.setUsername('draco');

  const username = user.username?.toLowerCase();
  console.log(username);
}
