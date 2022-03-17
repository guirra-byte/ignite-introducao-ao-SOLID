import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }: IRequest): User {

    const verifyById = this.usersRepository.findById(user_id);

    if (!verifyById) {

      throw new Error("Mensagem de erro")
    }

    return verifyById;

  }
}

export { ShowUserProfileUseCase };
