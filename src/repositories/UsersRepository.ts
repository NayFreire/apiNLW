import { EntityRepository, Repository } from "typeorm";
import { User } from "../models/User";
@EntityRepository(User)
class UsersRepository extends Repository<User>{ 
    /*extends permite que a classe UsersRepository tenha os métodos de Repository, taos como findOne e etc
     *o User (tabela da usuários) é a entidade passada para o Repository*/

}

export {UsersRepository}