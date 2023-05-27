const getFiltredKeys = <T extends object>(char: T, requiredKeys: string[]) => {
    const filtredKeys = [];

    for (let key in char) {
      if (requiredKeys.includes(key)) {
        filtredKeys.push({
          key: key,
          value: char[key]
        });
      }
    }
    return filtredKeys;
  };

  export default getFiltredKeys;