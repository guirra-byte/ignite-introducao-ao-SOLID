import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) { }

  handle(request: Request, response: Response): Response {

    const { user_id } = request.params;
    //Receber no header da Requisição

    try {

      const user = this.showUserProfileUseCase.execute({ user_id });
      return response.json(user);
    }
    catch (exception) {
      return response.status(404).json({ error: `${exception}` });
    }

  }
}

export { ShowUserProfileController };
