const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  console.log("ran");
  console.log(rows);
  return rows;
}

async function insertMessage(text, username) {
  await pool.query(
    `
INSERT INTO messages (text, username)
VALUES ($1, $2)
`,
    [text, username],
  );
}

async function getMessage(id) {
  return (await pool.query("SELECT * FROM messages WHERE id = $1", [id]))
    .rows[0];
}

module.exports = { getAllMessages, insertMessage, getMessage };
