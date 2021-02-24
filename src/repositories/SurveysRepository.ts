import { EntityRepository, Repository } from "typeorm";
import { Survey } from "../models/Survey";
@EntityRepository(Survey)
class SurveysRepository extends Repository<Survey>{ 
    /*extends permite que a classe SurveysRepository tenha os métodos de Repository, taos como findOne e etc
     *o Survey (tabela da usuários) é a entidade passada para o Repository*/

}

export {SurveysRepository}