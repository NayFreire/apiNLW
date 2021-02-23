import {Request, Response} from 'express'
import {getRepository} from 'typeorm';
import {User} from '../models/User'
class UserController{
    async create(request: Request, response: Response){
        const {name, email} = request.body;
        const usersRepository = getRepository(User); //Repositórios fazem a conexão com o banco de dados atravéz das operações (insert, delete, update, select)
        
        const userAlreadyExists = await usersRepository.findOne({email}) //Verificação para ver se já está cadastrado um usuário com esse email

        if(userAlreadyExists){ //Caso esteja cadastrado, um erro é mostrado
            return response.status(400).json({
                error: "User already exists"
            })
        }

        const user = usersRepository.create({name, email}) //Cria o usuário

        await usersRepository.save(user) //Salva o usuário no banco de dados

        return response.json(user)
    }
}

export{UserController}