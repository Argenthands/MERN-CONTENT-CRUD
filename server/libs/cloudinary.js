import cloudinary from 'cloudinary'
//import dotenv from "dotenv"

cloudinary.config({
    cloud_name: "dzecczldw",
    api_key: "964319691585138",
    api_secret: "udIwIno9y4h7i6Btq13ka2Tg2-Y"
})

export const uploadImage = async filePath =>{
    return await cloudinary.v2.uploader.upload(filePath, {
        folder: 'MERN-CONTENT-CRUD'
    })
}

export const deleteImage = async id =>{
    return await cloudinary.uploader.destroy(id)
}