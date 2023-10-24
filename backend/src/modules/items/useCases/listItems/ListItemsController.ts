import { Request, Response } from "express";
import { container } from "tsyringe";

import ItemView from "@modules/items/View/ItemView";

import { ListItemsUseCase } from "./ListItemsUseCase";

class ListItemsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listItemByIdUseCase = container.resolve(ListItemsUseCase);

    const item = await listItemByIdUseCase.execute();

    return response.json(ItemView.renderMany(item));
  }
}

export { ListItemsController };
