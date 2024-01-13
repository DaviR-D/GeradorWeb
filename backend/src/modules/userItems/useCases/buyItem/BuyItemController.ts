import { Request, Response } from "express";
import { container } from "tsyringe";

import { BuyItemUseCase } from "./BuyItemUseCase";

class BuyItemController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { item_id } = request.body;

    const { id } = request.user;
    const user_id = id;

    const buyItemUseCase = container.resolve(BuyItemUseCase);

    await buyItemUseCase.execute({
      item_id,
      user_id,
    });

    return response.status(201).send();
  }
}

export { BuyItemController };
