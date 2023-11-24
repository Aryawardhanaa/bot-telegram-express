import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();



// seed 1 user 
const load1User = async (name) => {
    const salt = await bcrypt.genSalt();
    try {
        // await prisma.user.create({
        //     data: {
        //         email: "admin@admin.com",
        //         username: "admin",
        //         password: await bcrypt.hash("admin1223", salt),
        //         nama: "admin"
        //     }
        // })
        // await prisma.user.create({
        //     data: {
        //         email: "arya@arya.com",
        //         username: "arya",
        //         password: await bcrypt.hash("arya@arya.com", salt),
        //         nama: "arya"
        //     }
        // })
        await prisma.user.create({
            data: {
                email: `${name}@${name}.com`,
                username: `${name}`,
                password: await bcrypt.hash(`${name}1223`, salt),
                nama: `${name}`
            }
        })
        console.log("1 user created");
    } catch (err) {
        console.error(err)
        process.exit(1)
    } finally {
        await prisma.$disconnect()
    }
}

// seed users
const loadUjian = async (max) => {
    try {
        for (let i = 1; i < max; i++) {
            const nama = `TRY OUT SKD ${i}`
            const durasi = `60`
            const jumlah_soal = `150`
            const slug = nama.toLowerCase().replace(/\s/g, "-");

            const user = await prisma.ujian.create({
                data: {
                    nama, durasi, jumlah_soal, slug
                },

            })
            console.log(user);
        };
        console.log(`${max} user created`);

    } catch (err) {
        console.error(err)
        process.exit(1)
    } finally {
        await prisma.$disconnect()
    }
}
const createSoal = async () => {

    const body = [
        {

            kode_soal: 'J9??0',
            nama_soal: 'Pancasila sebagai sumber nilai maksudnya ialah........',
            jawaban1:
                '_vbKh!l|Kehidupan bangsa indonesia harus sesuai dengan kepribadiannya',
            jawaban2:
                '-52#(y+|Masyarakat indonesia yang maju adalah yang tinggi intelektualnya',
            jawaban3: 'Om/ro)7|Kita selalu berupaya menunjukan bangsa dan negara',
            jawaban4:
                'jx*CW4v|Yang menjadi ukuran baik buruknya sikap, perbuatan, dan tingkah laku bangsa indonesia',
            kunci:
                'jx*CW4v|Yang menjadi ukuran baik buruknya sikap, perbuatan, dan tingkah laku bangsa indonesia',
            penjelasan:
                'Pancasila sebagai sumber nilai mengandung arti pancasila merupakan acuan utama baik pembentukan\n' +
                'hukum nasional, kegiatan penyelenggaraan partisipasi warga negara dan pergaulan antar warga negara\n' +
                'dalam kehidupan berbangsa dan bernegara. Sehingga pancasila sebagai sumber nilai menjadi ukuran\n' +
                'baik buruknya sikap, perbuatan, dan tingkah laku bangsa indonesia',
            kategori_soal: 'TWK'

        },

        {

            kode_soal: '%OVTq',

            nama_soal:

                'Rumusan Pancasila sebagai dasar negara untuk pertama kali dicetuskan dalam sidang......',

            jawaban1: '4vsZ/7y|PETA',

            jawaban2: 'U^2_h;J|BPUPKI',

            jawaban3: 'N$j%*Hb|PPKI',

            jawaban4: 'ytNsqrg|Himpunan kebaktian rakyat jawa',

            kunci: 'U^2_h;J|BPUPKI',

            penjelasan:

                'Rumusan pancasila sebagai dasar negara pertama kali dicetuskan oleh badan penyelidik usaha usaha\n' +

                'persiapan kemerdekaan indonesia(BPUPKI) pada sidang pertama pada tanggal 29 mei-1 juni 1945',

            kategori_soal: 'TWK'

        },

        {

            kode_soal: 'l^3FW',

            nama_soal:

                'Pancasila merupakan way of life dalam kehidupan berbangsa, bernegara, dan bermasyarakat. Dalam hal\n' +

                'ini, Pancasila memiliki makna sebagai...',

            jawaban1: '8kOyYOj|Kristalisasi nilai',

            jawaban2: 'VKVI&4A|Ciri ciri warga negara',

            jawaban3: 'iA9vmkG|Kepribadian bangsa',

            jawaban4: ')h+C;q/|Pedoman hidup',

            kunci: ')h+C;q/|Pedoman hidup',

            penjelasan:

                'Pancasila sebagai way of life dalam kehidupan berbangsa, bernegara, dan bermasyarakat.\n' +

                'Dalam hal ini, Pancasila memiliki makna sebagai Pedoman Hidup',

            kategori_soal: 'TWK'

        },

        {

            kode_soal: 'Tq**e',

            nama_soal: 'Bagi bangsa Indonesia Pancasila secara singkat dari asal kata\n' +

                'diartikan sebagai...',

            jawaban1: 'CrnOH5h|Lima dasar negara indonesia',

            jawaban2: 'nS*Ni9F|Lima aturan negara Indonesia',

            jawaban3: 'r7cB076|Lima pandangan hidup negara Indonesia',

            jawaban4: 'tolZMI*|Lima falsafah negara Indonesia',

            kunci: 'CrnOH5h|Lima dasar negara indonesia',

            penjelasan: 'Pancasila memiliki 5 poin sebagai dasar negara Indonesia',

            kategori_soal: 'TWK'

        },
    ]
    try {
        // await prisma.$executeRaw`CALL my_stored_procedure(${param1}, ${param2})`;
        // await prisma.$executeRaw`CREATE OR REPLACE PROCEDURE my_stored_procedure(param1 INT, param2 TEXT)
        // AS $$
        // BEGIN
        //     INSERT INTO soal (field1, field2) VALUES (param1, param2);
        // END;
        // $$
        //  LANGUAGE plpgsql;`;

        await prisma.$executeRaw`CALL my_stored_procedure_1(7, ${'%OVTq'}, ${'Rumusan Pancasila sebagai dasar negara untuk pertama kali dicetuskan dalam sidang......'})`;


        // await prisma.$transaction(
        //     body.map((item) => prisma.soal.create({ data: item }))
        // );
        console.log(`user created`);

        // res.status(201).json({ msg: " Berhasil ditambahkan" });

    } catch (err) {
        console.error(err)
        process.exit(1)
    } finally {
        await prisma.$disconnect()
    }
}
// load all seed functions you need here
function main() {
    // load1User('odyrachmadi');
    // load1User('admin');
    // load1User('arya');
    // load1User('ihzan');
    // loadUjian(15);
    // createSoal()
}

main()