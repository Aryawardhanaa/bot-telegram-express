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

    try {

        await prisma.$executeRaw`INSERT INTO "datanik"(nik, phone,isp,time)
        VALUES
        ('3216073005120000','6285772276718','NDO',43700),
        ('5302223107810000','6281338266681','LKOL',43700),
        ('3514114602890000','6281348151968','LKOL',43700),
        ('3209050901070000','6281283260351','LKOL',43700),
        ('3205315107370000','6283192787232','XLCONDO',43700),
        ('1103185208600000','6282360711571','LKOL',43700),
        ('7605024107350020','6285762344425','NDO',43700),
        ('3201070102101000','6281287813547','LKOL',43700),
        ('3318155806480000','6285740134256','NDO',43700),
        ('3204400701690000','6281226568940','LKOL',43700),
        ('7303056807940000','6282259741197','LKOL',43700),
        ('7303054106980000','6282259741170','LKOL',43700),
        ('3301144404650000','6285741028133','NDO',43700),
        ('3514124205810000','6285722378417','NDO',43700),
        ('3204404709860000','6281226568921','LKOL',43700),
        ('3322013112500100','6283822477059','XLCONDO',43700),
        ('3524146203740000','62859191551994','XLCONDO',43700),
        ('1472031007740020','6282268685519','LKOL',43701),
        ('1208015703830000','6282272635917','LKOL',43701),
        ('3273142311940000','6288902050491','RFRN',43701),
        ('3205391701920000','6283104248884','XLCONDO',43701),
        ('1106025206170000','6287848459383','XLCONDO',43701),
        ('1173010811050000','6283193612100','XLCONDO',43701),
        ('3324171009160000','628561179694','NDO',43701),
        ('3202084307520000','6285591450143','NDO',43701),
        ('9113084708090000','6283102430762','XLCONDO',43701),
        ('3314171208910000','6281287442141','LKOL',43701),
        ('3506070507750000','6285719337309','NDO',43701),
        ('3207340503470000','6288279007947','RFRN',43701),
        ('6310095810090000','6281348377246','LKOL',43701),
        ('1706044302150000','6281327582015','LKOL',43701),
        ('3273216203790000','6285795141117','NDO',43701),
        ('3529241606880000','6288226243906','RFRN',43701),
        ('3210171704840140','6283117067978','XLCONDO',43701),
        ('3603055405060000','6285691393207','NDO',43701),
        ('3514160311960000','6282328119340','LKOL',43701),
        ('3209011202910010','62881023555718','RFRN',43701),
        ('3526165511990000','6281936095546','XLCONDO',43701),
        ('6407066006920000','6288809388151','RFRN',43701),
        ('3174095801720000','6281392493738','LKOL',43701),
        ('3202291604940010','628995955840','HUCHON_3',43701),
        ('3207075401860000','6288225979492','RFRN',43701),
        ('3275110402660010','6281284719643','LKOL',43701),
        ('1275046005000010','6282360735040','LKOL',43697),
        ('3172044601750010','6281219107539','LKOL',43697),
        ('3513155010870000','6285748263747','NDO',43697),
        ('3324050204020000','6281226115394','LKOL',43697),
        ('3514160509770000','6285745624354','NDO',43697),
        ('3376036107960000','6281246259149','LKOL',43697),
        ('3204376912890010','6283113369512','XLCONDO',43697),
        ('3510162009800010','6282334223583','LKOL',43697),
        ('3471134405890000','6283104335632','XLCONDO',43697),
        ('5102075904030000','6283117332729','XLCONDO',43697),
        ('3320035203770010','6283822876936','XLCONDO',43697),
        ('3203212005180000','6281324142071','LKOL',43697),
        ('3401022209860000','6285774065595','NDO',43697),
        ('3301111007860010','6283869883530','XLCONDO',43697),
        ('1407084504770010','6281365684552','LKOL',43697),
        ('1407081703710000','6281365684553','LKOL',43697),
        ('7307021010030010','6285602857885','NDO',43697),
        ('1401165106900000','6282385883062','LKOL',43697),
        ('3274034803990010','6281284705838','LKOL',43689),
        ('3215120102560000','6282316219986','LKOL',43689),
        ('3508100102570020','6285733975468','NDO',43689),
        ('1308144310030000','6282172906261','LKOL',43689),
        ('3202045507720000','6281281649634','LKOL',43689),
        ('3514094610770000','6281259827940','LKOL',43689),
        ('3671071211180000','6283896291902','XLCONDO',43689),
        ('3173066311010010','6288808373643','RFRN',43689),
        ('7314081512530000','6281902160055','XLCONDO',43689),
        ('3215121106760000','6282316230852','LKOL',43689),
        ('3327015307710000','6287879480999','XLCONDO',43689),
        ('3320086512010010','6285925101571','XLCONDO',43702),
        ('5108064805060000','6287852656399','XLCONDO',43702),
        ('3321066602770000','6285712601569','NDO',43702),
        ('6110085205920000','6289691705723','HUCHON_3',43702),
        ('3215250208800010','6281340461051','LKOL',43689),
        ('3401024907970020','6281326809431','LKOL',43689),
        ('3204351103520000','6282334484601','LKOL',43689),
        ('3506154107620090','6285730036628','NDO',43689),
        ('3514024406610000','6285240416677','LKOL',43689),
        ('3501111912950000','6281346000368','LKOL',43689),
        ('7304065708120000','6285777817891','NDO',43704),
        ('3175082003010000','6287860938937','XLCONDO',43704),
        ('3175105903010010','6287780560110','XLCONDO',43704),
        ('8104052510660000','6282199871672','LKOL',43704),
        ('3510131012500000','6285648332597','NDO',43704),
        ('3278012306570000','6283112931901','XLCONDO',43704),
        ('3578065209810000','6285967989729','XLCONDO',43704),
        ('1201050807020000','6281959664660','XLCONDO',43704),
        ('1271052109080000','6282367054592','LKOL',43704),
        ('3524144508790000','62859188300935','XLCONDO',43704),
        ('5202064107570170','6281775262907','XLCONDO',43704),
        ('3216215804950000','6285693082980','NDO',43704),
        ('3514200102860000','6285240579053','LKOL',43704),
        ('1272035209780010','62859180464463','XLCONDO',43704),
        ('1371095512850010','6281211320382','LKOL',43704),
        ('1206075008150000','6285761286282','NDO',43704),
        ('5171045708710000','6287851861303','XLCONDO',43704),
        ('3318212210110010','6283191984486','XLCONDO',43704),
        ('3514051104970000','6282272635879','LKOL',43704),
        ('1601082308730000','6283170320883','XLCONDO',43704),
        ('3204111506020000','6282316102270','LKOL',43704),
        ('3204341406880000','6282329182458','LKOL',43704),
        ('3307036407710000','6282231841670','LKOL',43704),
        ('5311176210160000','6285792145247','NDO',43704),
        ('3603125405720000','6281287712525','LKOL',43704),
        ('3516076610080000','6285740936337','NDO',43704),
        ('3514141202560000','6288261315875','RFRN',43704),
        ('3204340905890000','6282329182139','LKOL',43704),
        ('3175041710891000','6281384416965','LKOL',43704),
        ('3205380107820190','6283879237525','XLCONDO',43704),
        ('3205384107850180','6283879237515','XLCONDO',43704),
        ('3317010305680000','6283865750758','XLCONDO',43704),
        ('3578172712850000','6281906663864','XLCONDO',43704),
        ('3175091112900000','6287772785694','XLCONDO',43704),
        ('6304105101040000','6285718263886','NDO',43704),
        ('3209244909850000','6285710645605','NDO',43704),
        ('3213144107610040','6285722096245','NDO',43704),
        ('3278016306640010','6283112931893','XLCONDO',43704),
        ('1209201501060000','6289504829802','HUCHON_3',43704),
        ('3371013108540000','628988957556','HUCHON_3',43704),
        ('3504026607080000','6283836850903','XLCONDO',43704),
        ('3529012204030000','6287891186280','XLCONDO',43704),
        ('3374145301990000','6282352088925','LKOL',43704),
        ('3374034605780000','6285743704446','NDO',43704),
        ('3505046606350000','6287840298361','XLCONDO',43704),
        ('3522231103860000','6285739214686','NDO',43704),
        ('1871060301970000','6285903631628','XLCONDO',43704),
        ('3203150104720010','6285759375249','NDO',43704),
        ('3522127112380120','6285604166069','NDO',43704),
        ('3323026504060000','6281327374851','LKOL',43704),
        ('3205385510420000','6283879237517','XLCONDO',43704),
        ('1371065011700010','6283181453703','XLCONDO',43704),
        ('1112040503610000','6282360933595','LKOL',43704),
        ('3524214104400000','62859180462709','XLCONDO',43704),
        ('3602051803840000','6281285738940','LKOL',43704),
        ('3271036106790020','6281617525849','NDO',43704),
        ('3209252312940000','6282231735056','LKOL',43704),
        ('3209251603780000','6282231735057','LKOL',43704),
        ('3209256006830010','6282231735061','LKOL',43704),
        ('5203123112920230','6285654145095','NDO',43704),
        ('3204401008820020','6282338231646','LKOL',43704),
        ('1271201512980000','6283181229760','XLCONDO',43704),
        ('3514025309720000','6281364342180','LKOL',43704),
        ('1671051403060010','6283867682751','XLCONDO',43704),
        ('7171081501940020','6282290671344','LKOL',43704),
        ('3212166603920000','6281222667732','LKOL',43704),
        ('3212162403920000','6281222667731','LKOL',43704),
        ('3311071708590000','6281327561771','LKOL',43704),
        ('3205325807980000','6283149873083','XLCONDO',43704),
        ('1801072312790000','6285607858128','NDO',43704),
        ('3205175305840000','6283877099645','XLCONDO',43704),
        ('3215085307990000','6282251028159','LKOL',43704),
        ('3215082604960000','6282251019023','LKOL',43704),
        ('3319062410950000','6281312139648','LKOL',43704),
        ('3603182009660000','6285717157943','NDO',43704),
        ('3311073112690120','6281327561778','LKOL',43704),
        ('3303081609820000','6283155628307','XLCONDO',43704),
        ('3307104107600050','6282223697494','LKOL',43704),
        ('6409012210940000','6283144179164','XLCONDO',43704),
        ('3603182807570000','6285717157928','NDO',43704),
        ('1271206611540000','6283181333110','XLCONDO',43704),
        ('3578304702000000','6281259792961','LKOL',43704),
        ('1271201004730000','6283181333109','XLCONDO',43704),
        ('1802175201840000','6283861918917','XLCONDO',43704),
        ('1801161705440000','6281387766199','LKOL',43704),
        ('3311076706820000','6281327561835','LKOL',43704),
        ('3578302508070000','6281259792964','LKOL',43704),
        ('1807201608450000','6285608140679','NDO',43704),
        ('1807201010640000','6285608140674','NDO',43704),
        ('1807201209920000','6285608140655','NDO',43704),
        ('1807204304660000','6285608140656','NDO',43704),
        ('1905031312600000','6281283758966','LKOL',43704),
        ('3210105904090040','6281342343760','LKOL',43704),
        ('3309112805899000','6282329556400','LKOL',43704),
        ('3272054401120000','6285721343408','NDO',43704),
        ('1275045302020000','6283831160607','XLCONDO',43704),
        ('3213046608010010','6282251769434','LKOL',43704),
        ('3213041806720000','6282251769463','LKOL',43704),
        ('3213040107560180','6282251769476','LKOL',43704),
        ('1807045712670000','6287770432547','XLCONDO',43703),
        ('3205174809730000','6283870636137','XLCONDO',43703),
        ('3524054601760000','6283178874238','XLCONDO',43703),
        ('3524054904940000','6283178874242','XLCONDO',43703),
        ('3275060812020010','6285691039297','NDO',43703),
        ('3205395301850000','6283843480966','XLCONDO',43703),
        ('3205395010580000','6283104388379','XLCONDO',43703),
        ('3205396002970000','6283843480812','XLCONDO',43703),
        ('6103200706690000','6282250595619','LKOL',43703),
        ('3205034506760010','6287708978175','XLCONDO',43703),
        ('3215054604650010','6282210948126','LKOL',43703),
        ('1406145204850000','6281270554394','LKOL',43703),
        ('3215023011860000','62895393137744','HUCHON_3',43703),
        ('6473043112850030','6285787094549','NDO',43704),
        ('3517125206880000','6287879486510','XLCONDO',43704),
        ('1210014402450000','6283169008647','XLCONDO',43704),
        ('3204405011900000','6282329151913','LKOL',43704),
        ('3207180707700010','6281394801806','LKOL',43704);         `;


    } catch (err) {
        console.error(err)
        process.exit(1)
    } finally {
        await prisma.$disconnect()
    }
}
function main() {
    // Save()
    // SimpanJawabanProcedure()
    Simpan()
    // rawprocedure1()
    // rawprocedure2()
}

main()