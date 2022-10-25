import { connect } from "mongoose";

const DB_URI = `${process.env.DB_URI}`

const dbInit = async () => {
    try {
        console.log("Conectando a mongo")
        const result = await connect(DB_URI)
        console.log(result)
        console.log('Solo mondongo')
    }
    catch (e) {
        console.log("Fallo al conectar a mongo")
    }
}

export default dbInit
