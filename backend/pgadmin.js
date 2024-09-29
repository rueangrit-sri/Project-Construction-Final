const { Pool } = require('pg');

// ตั้งค่าการเชื่อมต่อกับ PostgreSQL
const pool = new Pool({
  user: 'admin01', // ชื่อผู้ใช้ PostgreSQL
  host: 'localhost',
  database: 'construction_db', // ชื่อฐานข้อมูลที่คุณสร้าง
  password: 'admin1234', // รหัสผ่านของ PostgreSQL
  port: 5432, // พอร์ตมาตรฐานของ PostgreSQL
});

module.exports = pool;
