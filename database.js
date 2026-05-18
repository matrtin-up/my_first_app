const  sqlite3 =require('sqlite3');

// Create or open a database file named 'users.db'
const db =new sqlite3.Database('./users.db');

// Create the users table if it doesn't exist
db.serialize(() => {
db.run(`CREATE TABLE IF NOT EXISTS users (
id INTEGER PRIMARY KEY AUTOINCREMENT,
username TEXT UNIQUE,
password TEXT )`);
});


// Export for reuse
module.exports= db;
