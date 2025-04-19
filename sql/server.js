const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");

const app = express();
const db = new sqlite3.Database("./database.db");

app.use(cors());
app.use(express.json());

// 建立資料表
db.serialize(() => {
  db.run(
    `CREATE TABLE IF NOT EXISTS workExps (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      company TEXT UNIQUE,
      dration TEXT UNIQUE,
      position TEXT,
      focus TEXT,
      responsibilities TEXT,
      tag TEXT
    )
    `
  );
});

// 取得所有使用者
app.get("/workExps", (req, res) => {
  db.all("SELECT * FROM workExps", [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

// 新增使用者
app.post("/workExps", (req, res) => {
  db.run(
    "INSERT INTO workExps (company, duration, position, focus, reponsibilities, tag) VALUES (?)",
    ["1", "1", "1", "1", "1", "1"],
    function (err) {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ id: this.lastID, name });
    }
  );
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
