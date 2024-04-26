const fs = require('fs');

class Journal {
  constructor() {
    this.count = 0;
    this.entries = {}
  }

  addEntry(text) {
    let c = ++this.count;
    let entry = `${c}: ${text}`;
    this.entries[c] = entry;
    return c;
  }

  removeEntry(index) {
    delete this.entries[index];
  }

  toString() {
    return Object.values(this.entries).join('\n');
  }
}

// separate classes by single responsibilities - this one deals with writing to files
class PersistanceManager {
  saveToFile(filename, journal) {
    fs.writeFileSync(filename, journal.toString())
  }
}

let i = new Journal();
i.addEntry('hello');
i.addEntry('goodbye');
console.log(i.toString());
let p = new PersistanceManager
let filename = 'new.txt'
p.saveToFile(filename, i)
