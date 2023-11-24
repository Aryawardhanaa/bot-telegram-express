import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
const datajawaban = {
    username: "admin",
    soal: [
        {
            kode_soal: "Tq**e",
            nama_soal: "Bagi bangsa Indonesia Pancasila secara singkat dari asal kata\n" +
                "diartikan sebagai...",
            jawaban1: "CrnOH5h|Lima dasar negara indonesia",
            jawaban2: "tolZMI*|Lima falsafah negara Indonesia",
            jawaban3: null,
            jawaban4: "r7cB076|Lima pandangan hidup negara Indonesia",
            jawaban5: "nS*Ni9F|Lima aturan negara Indonesia",
            kunci: null,
            penjelasan: null,
            kategori_soal: null,
            bobot: null
        },
        {
            kode_soal: "J9??0",
            nama_soal: "Pancasila sebagai sumber nilai maksudnya ialah........",
            jawaban1: "_vbKh!l|Kehidupan bangsa indonesia harus sesuai dengan kepribadiannya",
            jawaban2: null,
            jawaban3: null,
            jawaban4: null,
            jawaban5: "-52#(y+|Masyarakat indonesia yang maju adalah yang tinggi intelektualnya",
            kunci: null,
            penjelasan: null,
            kategori_soal: null,
            bobot: null
        },
        {
            kode_soal: "Tq**e",
            nama_soal: "Bagi bangsa Indonesia Pancasila secara singkat dari asal kata\n" +
                "diartikan sebagai...",
            jawaban1: "CrnOH5h|Lima dasar negara indonesia",
            jawaban2: null,
            jawaban3: "nS*Ni9F|Lima aturan negara Indonesia",
            jawaban4: null,
            jawaban5: null,
            kunci: null,
            penjelasan: null,
            kategori_soal: null,
            bobot: null
        },
        {
            kode_soal: "%OVTq",
            nama_soal: "Rumusan Pancasila sebagai dasar negara untuk pertama kali dicetuskan dalam sidang......",
            jawaban1: null,
            jawaban2: "4vsZ/7y|PETA",
            jawaban3: null,
            jawaban4: "U^2_h;J|BPUPKI",
            jawaban5: null,
            kunci: null,
            penjelasan: null,
            kategori_soal: null,
            bobot: null
        },
        {
            kode_soal: "J9??0",
            nama_soal: "Pancasila sebagai sumber nilai maksudnya ialah........",
            jawaban1: null,
            jawaban2: "-52#(y+|Masyarakat indonesia yang maju adalah yang tinggi intelektualnya",
            jawaban3: null,
            jawaban4: null,
            jawaban5: "_vbKh!l|Kehidupan bangsa indonesia harus sesuai dengan kepribadiannya",
            kunci: null,
            penjelasan: null,
            kategori_soal: null,
            bobot: null
        },
        {
            kode_soal: "l^3FW",
            nama_soal: "Pancasila merupakan way of life dalam kehidupan berbangsa, bernegara, dan bermasyarakat. Dalam hal\n" +
                "ini, Pancasila memiliki makna sebagai...",
            jawaban1: ")h+C;q/|Pedoman hidup",
            jawaban2: "VKVI&4A|Ciri ciri warga negara",
            jawaban3: null,
            jawaban4: "iA9vmkG|Kepribadian bangsa",
            jawaban5: "8kOyYOj|Kristalisasi nilai",
            kunci: null,
            penjelasan: null,
            kategori_soal: null,
            bobot: null
        },
        {
            kode_soal: "l^3FW",
            nama_soal: "Pancasila merupakan way of life dalam kehidupan berbangsa, bernegara, dan bermasyarakat. Dalam hal\n" +
                "ini, Pancasila memiliki makna sebagai...",
            jawaban1: "VKVI&4A|Ciri ciri warga negara",
            jawaban2: "8kOyYOj|Kristalisasi nilai",
            jawaban3: null,
            jawaban4: null,
            jawaban5: null,
            kunci: null,
            penjelasan: null,
            kategori_soal: null,
            bobot: null
        },
        {
            kode_soal: "Tq**e",
            nama_soal: "Bagi bangsa Indonesia Pancasila secara singkat dari asal kata\n" +
                "diartikan sebagai...",
            jawaban1: null,
            jawaban2: "CrnOH5h|Lima dasar negara indonesia",
            jawaban3: null,
            jawaban4: null,
            jawaban5: "nS*Ni9F|Lima aturan negara Indonesia",
            kunci: null,
            penjelasan: null,
            kategori_soal: null,
            bobot: null
        },
        {
            kode_soal: "%OVTq",
            nama_soal: "Rumusan Pancasila sebagai dasar negara untuk pertama kali dicetuskan dalam sidang......",
            jawaban1: null,
            jawaban2: null,
            jawaban3: "U^2_h;J|BPUPKI",
            jawaban4: null,
            jawaban5: "4vsZ/7y|PETA",
            kunci: null,
            penjelasan: null,
            kategori_soal: null,
            bobot: null
        },
        {
            kode_soal: "J9??0",
            nama_soal: "Pancasila sebagai sumber nilai maksudnya ialah........",
            jawaban1: "-52#(y+|Masyarakat indonesia yang maju adalah yang tinggi intelektualnya",
            jawaban2: "Om/ro)7|Kita selalu berupaya menunjukan bangsa dan negara",
            jawaban3: "jx*CW4v|Yang menjadi ukuran baik buruknya sikap, perbuatan, dan tingkah laku bangsa indonesia",
            jawaban4: null,
            jawaban5: "_vbKh!l|Kehidupan bangsa indonesia harus sesuai dengan kepribadiannya",
            kunci: null,
            penjelasan: null,
            kategori_soal: null,
            bobot: null
        },
        {
            kode_soal: "Tq**e",
            nama_soal: "Bagi bangsa Indonesia Pancasila secara singkat dari asal kata\n" +
                "diartikan sebagai...",
            jawaban1: null,
            jawaban2: "CrnOH5h|Lima dasar negara indonesia",
            jawaban3: "nS*Ni9F|Lima aturan negara Indonesia",
            jawaban4: null,
            jawaban5: null,
            kunci: null,
            penjelasan: null,
            kategori_soal: null,
            bobot: null
        },
        {
            kode_soal: "%OVTq",
            nama_soal: "Rumusan Pancasila sebagai dasar negara untuk pertama kali dicetuskan dalam sidang......",
            jawaban1: null,
            jawaban2: null,
            jawaban3: "4vsZ/7y|PETA",
            jawaban4: null,
            jawaban5: "U^2_h;J|BPUPKI",
            kunci: null,
            penjelasan: null,
            kategori_soal: null,
            bobot: null
        },
        {
            kode_soal: "%OVTq",
            nama_soal: "Rumusan Pancasila sebagai dasar negara untuk pertama kali dicetuskan dalam sidang......",
            jawaban1: "ytNsqrg|Himpunan kebaktian rakyat jawa",
            jawaban2: "N$j%*Hb|PPKI",
            jawaban3: null,
            jawaban4: "U^2_h;J|BPUPKI",
            jawaban5: "4vsZ/7y|PETA",
            kunci: null,
            penjelasan: null,
            kategori_soal: null,
            bobot: null
        },
        {
            kode_soal: "l^3FW",
            nama_soal: "Pancasila merupakan way of life dalam kehidupan berbangsa, bernegara, dan bermasyarakat. Dalam hal\n" +
                "ini, Pancasila memiliki makna sebagai...",
            jawaban1: null,
            jawaban2: "VKVI&4A|Ciri ciri warga negara",
            jawaban3: null,
            jawaban4: "8kOyYOj|Kristalisasi nilai",
            jawaban5: null,
            kunci: null,
            penjelasan: null,
            kategori_soal: null,
            bobot: null
        },
        {
            kode_soal: "l^3FW",
            nama_soal: "Pancasila merupakan way of life dalam kehidupan berbangsa, bernegara, dan bermasyarakat. Dalam hal\n" +
                "ini, Pancasila memiliki makna sebagai...",
            jawaban1: null,
            jawaban2: null,
            jawaban3: "VKVI&4A|Ciri ciri warga negara",
            jawaban4: "8kOyYOj|Kristalisasi nilai",
            jawaban5: null,
            kunci: null,
            penjelasan: null,
            kategori_soal: null,
            bobot: null
        },
        {
            kode_soal: "J9??0",
            nama_soal: "Pancasila sebagai sumber nilai maksudnya ialah........",
            jawaban1: "-52#(y+|Masyarakat indonesia yang maju adalah yang tinggi intelektualnya",
            jawaban2: "_vbKh!l|Kehidupan bangsa indonesia harus sesuai dengan kepribadiannya",
            jawaban3: null,
            jawaban4: null,
            jawaban5: null,
            kunci: null,
            penjelasan: null,
            kategori_soal: null,
            bobot: null
        }
    ],
    nilai: { nilai_twk: 0, nilai_tiu: 0, nilai_tkp: 0 },
    soaljwb: [
        { numb: 1, kodesoal: "Tq**e", jawaban: "nS*Ni9F" },
        { numb: 2, kodesoal: "J9??0", jawaban: "-52#(y+" },
        { numb: 4, kodesoal: "%OVTq", jawaban: "U^2_h;J" },
        { numb: 5, kodesoal: "J9??0", jawaban: "_vbKh!l" },
        { numb: 6, kodesoal: "l^3FW", jawaban: "VKVI&4A" },
        { numb: 9, kodesoal: "%OVTq", jawaban: "4vsZ/7y" },
        { numb: 10, kodesoal: "J9??0", jawaban: "jx*CW4v" },
        { numb: 14, kodesoal: "l^3FW", jawaban: "8kOyYOj" }
    ],
    total_nilai: 0,
    ujian_id: "f201cdce-b444-49fb-8bb9-fb4536f5927b"
}
const prisma = new PrismaClient();


const rawview = async () => {
    try {

        await prisma.$executeRaw`DROP VIEW random_soal_view; `;
        // await prisma.$executeRaw`CREATE VIEW random_soal_view AS
        // SELECT
        //   soal.kode_soal,
        //   soal.nama_soal,
        //   soal.jawaban1,
        //   soal.jawaban2,
        //   soal.jawaban3,
        //   soal.jawaban4,
        //   soal.jawaban5,
        //   soal.kunci,
        //   soal.penjelasan,
        //   soal.kategori_soal,
        //   soal.bobot
        // FROM
        //   soal
        // ORDER BY
        //   random()
        // LIMIT
        //   30;
        // `;
        console.log("view created");
    } catch (err) {
        console.error(err)
        process.exit(1)
    } finally {
        await prisma.$disconnect()
    }
}
const rawprocedure1 = async () => {
    try {

        // await prisma.$executeRaw`CREATE OR REPLACE PROCEDURE my_stored_procedure(param1 INT, param2 TEXT)
        // AS $$
        // BEGIN
        //     INSERT INTO soal (field1, field2) VALUES (param1, param2);
        // END;
        // $$
        // LANGUAGE plpgsql;`;

        await prisma.$executeRaw`CREATE OR REPLACE FUNCTION simpan_jawaban2(
            soaljwb_param JSON,
            soal_param JSON,
            nilai_param jsonb,
            total_nilai_param INT,
            ujian_id_param TEXT
        )
        RETURNS VOID AS $$
        BEGIN
            INSERT INTO user_ujian (soaljwb, soal, nilai)
            VALUES (soaljwb_param, soal_param, nilai_param);
        END;
        $$ LANGUAGE plpgsql; `;
        console.log("procedure created");
    } catch (err) {
        console.error(err)
        process.exit(1)
    } finally {
        await prisma.$disconnect()
    }
}

const SimpanJawabanProcedure = async () => {
    try {

        await prisma.$executeRaw`
        -- DROP FUNCTION IF EXISTS simpan_soal(JSON);
        -- CREATE OR REPLACE FUNCTION simpan_soal(datasoal JSON)
        CREATE OR REPLACE FUNCTION simpan_soal(datasoal jsonb[])
        RETURNS VOID AS $$
        DECLARE
          item jsonb;
        BEGIN
          FOREACH item IN ARRAY datasoal
          LOOP
            INSERT INTO soal (id, nama_soal, kode_soal, jawaban1, jawaban2, jawaban3, jawaban4, jawaban5, kunci, penjelasan, kategori_soal,sub_kategori_soal, bobot)
            VALUES (DEFAULT, item->>'nama_soal', item->>'kode_soal', item->>'jawaban1', item->>'jawaban2', item->>'jawaban3', item->>'jawaban4', item->>'jawaban5', item->>'kunci', item->>'penjelasan', item->>'kategori_soal', item->>'sub_kategori_soal', item->>'bobot' );
          END LOOP;
        END;
        $$ LANGUAGE plpgsql;
        `;

        // await prisma.$executeRaw`CREATE OR REPLACE FUNCTION simpan_jawaban(
        //     username_param TEXT,
        //     soaljwb_param JSON,
        //     soal_param JSON,
        //     nilai_param jsonb,
        //     total_nilai_param BIGINT,
        //     ujian_id_param TEXT
        // )
        // RETURNS VOID AS $$
        // BEGIN
        //     INSERT INTO user_ujian (username, soaljwb, soal, nilai, total_nilai, ujian_id)
        //     VALUES (username_param, soaljwb_param, soal_param, nilai_param, total_nilai_param, ujian_id_param);
        // END;
        // $$ LANGUAGE plpgsql;`;
        console.log("procedure created");
    } catch (err) {
        console.error(err)
        process.exit(1)
    } finally {
        await prisma.$disconnect()
    }
}
const rawprocedure2 = async () => {
    try {
        // await prisma.$executeRaw`CALL simpan_soal(${JSON.stringify(req.body)})`;

        const bodydata = [
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
        // console.log(datas);
        await prisma.$executeRaw`SELECT simpan_soal6(${bodydata})`;

        console.log("procedure created");
    } catch (err) {
        console.error(err)
        process.exit(1)
    } finally {
        await prisma.$disconnect()
    }
}
const Save = async () => {
    try {
        const hasil = await prisma.$executeRaw`CREATE OR REPLACE FUNCTION simpan_jawaban2(
            username_param VARCHAR,
            soaljwb_param JSON,
            soal_param JSON,
            nilai_param JSON,
            total_nilai_param BIGINT,
            ujian_id_param VARCHAR
        )
        RETURNS VOID AS $$
        BEGIN
            INSERT INTO user_ujian (username, soaljwb, soal, nilai, total_nilai, ujian_id)
            VALUES (username_param, soaljwb_param, soal_param, nilai_param, total_nilai_param, ujian_id_param);
        END;
        $$ LANGUAGE plpgsql`;
        console.log(hasil);
    } catch (err) {
        console.error(err)
        process.exit(1)
    } finally {
        await prisma.$disconnect()
    }
}

const Simpan = async () => {

    let { username, soaljwb, soal, nilai, total_nilai, ujian_id } = datajawaban;
    soaljwb = JSON.stringify(soaljwb)
    soal = JSON.stringify(soal)
    nilai = JSON.stringify(nilai)
    try {

        await prisma.$executeRaw`SELECT simpan_jawaban(${username}, 
        ${soaljwb}::json, ${soal}::json, ${nilai}::jsonb, ${total_nilai}, 
        ${ujian_id})`;


        // await prisma.$executeRaw`CALL simpan_jawaban(${username}, ${soaljwb}::json, ${soal}::json, ${nilai}::json[], ${total_nilai}, ${ujian_id})`;
        // await prisma.$queryRaw`CALL simpan_jawaban(${username}, ${soaljwb}, ${soal}, ${nilai}, ${total_nilai}, ${ujian_id})`;

        // console.log("procedure created");
    } catch (err) {
        console.error(err)
        process.exit(1)
    } finally {
        await prisma.$disconnect()
    }
}
function main() {
    // Save()
    SimpanJawabanProcedure()
    // Simpan()
    // rawprocedure1()
    // rawprocedure2()
}

main()