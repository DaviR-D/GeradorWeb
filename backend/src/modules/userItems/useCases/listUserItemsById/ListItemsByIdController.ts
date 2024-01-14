import { Request, Response } from "express";
import { container } from "tsyringe";

import ItemsView from "@modules/userItems/View/UserItemsView";

import { ListItemsByIdUseCase } from "./ListItemsByIdUseCase";

class ListItemsByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;
    const user_id = id;

    const listItemsByIdUseCase = container.resolve(ListItemsByIdUseCase);

    const item = await listItemsByIdUseCase.execute(user_id);

    return response.json(ItemsView.renderMany(item));
  }
}

export { ListItemsByIdController };
