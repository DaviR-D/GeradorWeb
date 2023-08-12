import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetCoinsByIdUseCase } from "./GetCoinsByIdUseCase";

class GetCoinsByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;

    const getCoinsByIdUseCase = container.resolve(GetCoinsByIdUseCase);

    const coins = await getCoinsByIdUseCase.execute(id);

    return response.json(coins);
  }
}

export { GetCoinsByIdController };
