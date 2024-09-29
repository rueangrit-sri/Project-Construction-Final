// const { Pool } = require('pg');

// const pool = new Pool({
//   user: 'Admin',  // ชื่อผู้ใช้ของ PostgreSQL
//   host: 'localhost',  // ที่อยู่ของเซิร์ฟเวอร์ PostgreSQL
//   database: 'construction_db',  // ชื่อฐานข้อมูลที่สร้างใน pgAdmin
//   password: '1234',  // รหัสผ่านของผู้ใช้ PostgreSQL
//   port: 5432,  // พอร์ตที่ PostgreSQL ใช้ (ค่าเริ่มต้น 5432)
// });

// module.exports = pool;

const { Pool } = require('pg');

const pool = new Pool({
  user: 'Admin',
  host: 'localhost',
  database: 'construction_db',
  password: '1234',
  port: 5432,
});

module.exports = pool;
