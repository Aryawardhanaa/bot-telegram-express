import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// export const getNik = async (req, res) => {
//     try {
//         const response = await prisma.datanik.findMany();
//         res.status(200).json(response);
//     } catch (error) {
//         res.status(500).json({ msg: error.message });
//     }
// }

export const getDataByNik = async (req, res) => {
    const { nik } = req.params
    try {
        const response = await prisma.datanik.findUnique({
            where: { nik }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(404).json({ msg: error.message });
    }
}
export const getDataByPhone = async (req, res) => {
    const { phone } = req.params
    try {
        const response = await prisma.datanik.findUnique({
            where: { phone }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(404).json({ msg: error.message });
    }
}

export const createData = async (req, res) => {
    const { nik, phone } = req.body;

    const date = new Date();
    // console.log(date.getTime());
    try {
        const response = await prisma.datanik.create({
            data: { nik, phone, time: 43701 }
        });
        // console.log(res);
        res.status(201).json(response);
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
}

export const updateData = async (req, res) => {
    const { nik } = req.params

    try {
        const product = await prisma.datanik.update({
            where: {
                nik
            },
            data: req.body
        });
        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const product = await prisma.product.delete({
            where: {
                id: Number(req.params.id)
            }
        });
        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
}
// export const deleteProduct = async (req, res) => {
//     try {
//         const product = await prisma.product.delete({
//             where: {
//                 id: Number(req.params.id)
//             }
//         });
//         res.status(200).json(product);
//     } catch (error) {
//         res.status(400).json({ msg: error.message });
//     }
// }