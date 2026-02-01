Full-Stack Hotel Booking 
แอปพลิเคชันจองโรงแรมแบบครบวงจร (Full-Stack) พร้อมระบบชำระเงินออนไลน์และการแจ้งเตือนผ่านอีเมล.

คุณสมบัติของโปรเจกต์ (Features)
ระบบสมาชิก: ลงทะเบียนและเข้าสู่ระบบด้วย Clerk (รองรับ Google Login) 

ระบบค้นหา: ค้นหาโรงแรมตามเมือง วันที่เข้าพัก และจำนวนผู้เข้าพัก 

รายละเอียดโรงแรม: แสดงข้อมูลห้องพัก สิ่งอำนวยความสะดวก และตรวจสอบสถานะว่าง 

ระบบชำระเงิน: จองห้องพักและชำระเงินออนไลน์ผ่าน Stripe Payment Gateway 

การแจ้งเตือน: ส่งอีเมลยืนยันการจองโดยอัตโนมัติด้วย Node Mailer 

แดชบอร์ดเจ้าของโรงแรม: จัดการห้องพัก เพิ่มรูปภาพ (ผ่าน Cloudinary) และดูยอดการจอง 

Responsive Design: หน้าเว็บรองรับการทำงานทั้งบน Desktop และ Mobile 

เทคโนโลยีที่ใช้ (Tech Stack)
Frontend:
React (Vite) - สำหรับโครงสร้างหน้าเว็บ 

Tailwind CSS - สำหรับการตกแต่ง UI 

Clerk - ระบบ Authentication 

Axios - สำหรับเชื่อมต่อ API 

Backend:
Node.js & Express - ระบบ Server 

MongoDB & Mongoose - ฐานข้อมูล 

Cloudinary - เก็บรูปภาพโรงแรมบน Cloud 

Stripe - ระบบชำระเงิน 

Node Mailer (Brevo) - ระบบส่งอีเมล 

 วิธีการติดตั้ง (Installation)
Clone โปรเจกต์:

Bash
git clone https://github.com/NXMMINTT/Full-Stack-Hotel-Booking.git
cd Full-Stack-Hotel-Booking
ติดตั้ง Frontend:

Bash
cd client
npm install
ติดตั้ง Backend:

Bash
cd ../server
npm install