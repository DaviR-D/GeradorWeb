import { Request, Response } from "express";
import { container } from "tsyringe";

import { AddCoinsByIdUseCase } from "./AddCoinsByIdUseCase";

class AddCoinsByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;
    const { amount } = request.body;

    const addCoinsByIdUseCase = container.resolve(AddCoinsByIdUseCase);

    const coins = await addCoinsByIdUseCase.execute(id, amount);

    return response.json(coins);
  }
}

export { AddCoinsByIdController };
