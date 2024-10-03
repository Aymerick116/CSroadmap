import pg from 'pg'
// import dotenv from 'dotenv'
import './dotenv.js'


// dotenv.config()

console.log(process.env.CONNECTION_STRING)
const config = {
    connectionString: process.env.CONNECTION_STRING
    

}

export const pool = new pg.Pool(config)