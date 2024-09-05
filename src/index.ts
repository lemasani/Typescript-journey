

// Generic Classes

class KeyValuePair <K, V>{
    constructor(public key: K, public value: V){}
}

const pair = new KeyValuePair<number, string>(2, 'am')
pair