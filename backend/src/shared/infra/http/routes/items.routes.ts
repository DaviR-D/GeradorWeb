import { Router } from "express";

import { ListItemsController } from "@modules/items/useCases/listItems/ListItemsController";
import { BuyItemController } from "@modules/userItems/useCases/buyItem/BuyItemController";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const itemsRoutes = Router();

const listItemsController = new ListItemsController();
const buyItemController = new BuyItemController();

itemsRoutes.get("/", ensureAuthenticated, listItemsController.handle);
itemsRoutes.post("/buy", ensureAuthenticated, buyItemController.handle);

export { itemsRoutes };
