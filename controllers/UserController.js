import bcrypt from "bcrypt";
import express from "express";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getUsers = async (req, res) => {
    try {
        const response = await prisma.user.findMany();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export const Register = async (req, res) => {
    const { nama, email, password, username } = req.body;
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    try {
        await prisma.user.create({
            data: {
                username: username,
                nama: nama,
                email: email,
                status: "2",
                password: hashPassword
            }
        });

        res.json({ msg: "Register Berhasil" });

    } catch (error) {
        console.log(error);
    }
}

export const deleteUser = async (req, res) => {
    try {
        const user = await prisma.user.delete({
            where: {
                id: Number(req.params.id)
            }
        });
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
}
export const Login = async (req, res) => {

    try {
        const user = await prisma.user.findUnique({
            where: {
                email: req.body.email
            }
        });
        if (user == null) return res.status(400).json({ msg: "User Tidak terdaftar" });

        const match = await bcrypt.compare(req.body.password, user.password);
        if (!match) return res.status(400).json({ msg: "Wrong Password" });
        const userId = user.id;
        const username = user.username;
        const email = user.email;
        const accessToken = jwt.sign({ userId, username, email }, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: '1d'
        });
        const refreshToken = jwt.sign({ userId, username, email }, process.env.REFRESH_TOKEN_SECRET, {
            expiresIn: '1d'
        });

        await prisma.user.update({
            where: {
                id: userId
            },
            data: {
                refresh_token: refreshToken
            }
        });

        // res.cookie("testcookie", "text");

        // res.cookie('refreshToken', refreshToken, {
        //     httpOnly: true,
        //     maxAge: 24 * 60 * 60 * 1000,
        //     secure: true
        // });

        res.json({ accessToken });

        // res.send();
        // res.status(200).cookie("refreshToken", refreshToken).json({
        //     success: true,
        //     refreshToken,
        //     accessToken,
        //     message: "Login Successfully"
        // });


        // let cookieOptions = {
        //     httpOnly: true,
        //     maxAge: 24 * 60 * 60 * 1000,
        //     secure: true
        // }
        // res.cookie("testcookie", "text");
        // res.send();




        // const extractCookieJWTFromRequest = (req) => {
        //     let token;
        //     // Try to fetch cookie
        //     if (req.cookies) {
        //         token = req.cookies[SESSION_COOKIE_NAME];
        //         if (token) return token;
        //     }
        //     const authorization = req.headers.authorization;
        //     if (!authorization) return null;
        //     const parts = authorization.split(' ');
        //     if (parts.length !== 2) return null;
        //     const scheme = parts[0];
        //     if (scheme !== 'Bearer') return null;
        //     token = parts[1];
        //     return token;
        // };


        // res.cookie('tes', 'tes')
        // res.status(200).cookie('refreshToken', refreshToken, { httpOnly: true, domain: 'http://localhost:5000' }).json({ accessToken, username, email })

        // const options = {
        //     expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
        //     // httpOnly: true,
        //     secure: true,
        //     sameSite: "none",
        //     path: '/'
        // };
        // res.status(200).cookie("refreshToken", refreshToken).json({
        //     success: true,
        //     refreshToken,
        //     accessToken,
        //     message: "Login Successfully"
        // });
        // res.status(200).cookie('refreshToken', refreshToken, { httpOnly: true, domain: process.env.NODE_ENV === 'development' ? 'http://localhost:5000' : 'https://api-final-sand.vercel.app' }).json({ accessToken, rtoken: refreshToken, username, email })
        // res.status(200).cookie('refreshToken', refreshToken).json({ accessToken, rtoken: refreshToken, username, email })
        // res.json({ token: `${accessToken}|${refreshToken}`, email, username });
    } catch (error) {
        console.log(error);
    }
}

export const Logout = async (req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken;
        if (!refreshToken) return res.sendStatus(204);
        const user = await prisma.user.findMany({
            where: {
                refresh_token: refreshToken
            }
        });

        // res.json(refreshToken);
        if (!user.length) return res.sendStatus(204);
        const userId = user[0].id;

        await prisma.user.update({
            where: {
                id: userId
            },
            data: {
                refresh_token: null
            }
        });
        res.clearCookie('refreshToken');
        return res.sendStatus(200);
    } catch (error) {
        console.log(error);
    }

}
// export const Logout = async (req, res) => {
//     const refreshToken = req.cookies.refreshToken;
//     if (!refreshToken) return res.sendStatus(204);
//     const user = await prisma.user.findMany({
//         where: {
//             refresh_token: refreshToken
//         }
//     });

//     if (!user.length) return res.sendStatus(204);
//     const userId = user.id;
//     // UPDATE user set refresh_token = null where id =3

//     await prisma.user.update({
//         where: {
//             id: 3
//         },
//         data: {
//             refresh_token: "null"
//         }
//     });

//     res.clearCookie('refreshToken');
//     return res.sendStatus(200);
// }

