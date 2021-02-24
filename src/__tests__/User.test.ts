import request from 'supertest'
import { app } from '../app'

describe("User", () => {
    //Requisita o app, com o express() e as rotas, define que a requisição é post com a rota /users e envia um email e um name
    request(app).post("/users").send({email: "user@example.com", name: "User Example"})
})