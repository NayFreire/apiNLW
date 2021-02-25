import {Connection, createConnection, getConnection, getConnectionOptions} from "typeorm"

export default async (): Promise<Connection> => {
    const defaultOptions = await getConnectionOptions()
    return createConnection(
        Object.assign(defaultOptions, {
            database: process.env.NODE_ENV === 'test' ? './src/database/database.test.sqlite' : defaultOptions.database
            //Caso o NODE_ENV seja igual a test, significa que a execução está em modo de teste, ou seja, não podemos usar o banco de dados real. Então, caso isso seja verdade, o banco de dados a ser usado será database.test.sqlite
        })
    )
}