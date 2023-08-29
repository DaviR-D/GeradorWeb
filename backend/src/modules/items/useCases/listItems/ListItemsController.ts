import { Request, Response } from "express";
import { container } from "tsyringe";

import ItemView from "@modules/items/View/ItemView";

import { ListItemsUseCase } from "./ListItemsUseCase";

class ListItemByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { item_id } = request.params;

    const listItemByIdUseCase = container.resolve(ListItemsUseCase);

    const item = await listItemByIdUseCase.execute(item_id);

    return response.json(ItemView.render(item));
  }
}

export { ListItemByIdController };
