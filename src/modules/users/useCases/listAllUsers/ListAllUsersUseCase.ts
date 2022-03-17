import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }: IRequest): User[] {


    const existsById = this.usersRepository.findById(user_id);

    if (!existsById.admin) {

      throw new Error("Mensagem de erro")
    }

    const users = this.usersRepository.list()
    return users;


  }
}

export { ListAllUsersUseCase };
