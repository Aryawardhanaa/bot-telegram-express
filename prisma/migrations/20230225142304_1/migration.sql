-- CreateTable
CREATE TABLE "user" (
  "id" SERIAL PRIMARY KEY,
  "username" VARCHAR(50) NOT NULL,
  "password" VARCHAR(255) NOT NULL,
  "email" VARCHAR(100) NOT NULL,
  "foto_profil" VARCHAR(200),
  "nama" VARCHAR(100) NOT NULL,
  "alamat" TEXT,
  "pekerjaan" VARCHAR(100)
);
