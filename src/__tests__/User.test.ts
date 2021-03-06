import request from 'supertest'
import { app } from '../app'
import createConnection from '../database'

describe("User", async () => {
    //Requisita o app, com o express() e as rotas, define que a requisição é post com a rota /users e envia um email e um name

    beforeAll(async () => {
        const connection = await createConnection()
        await connection.runMigrations()
    });
    
    it("Should be able to create a new user", async () => {
        const response = await request(app).post("/users").send({
            email: "user@example.com", 
            name: "User Example"
        })

        expect(response.status).toBe(201)
    })

    it("Shoul not be able to create a user with an existing email", async () => {
        const response = await request(app).post("/users").send({
            email: "user@example.com", 
            name: "User Example"
        })

        expect(response.status).toBe(400)
    })
})