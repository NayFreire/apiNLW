import request from 'supertest'
import { app } from '../app'
import createConnection from '../database'

describe("Survey", async () => {
    //Requisita o app, com o express() e as rotas, define que a requisição é post com a rota /users e envia um email e um name

    beforeAll(async () => {
        const connection = await createConnection()
        await connection.runMigrations()
    });
    
    it("Should be able to create a new user", async () => {
        const response = await request(app).post("/users").send({
            title: "Survey test", 
            name: "Testing survies"
        })

        expect(response.status).toBe(201)
    })
})