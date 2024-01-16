import { Router } from "express";

import { ListItemsController } from "@modules/items/useCases/listItems/ListItemsController";
import { BuyItemController } from "@modules/userItems/useCases/buyItem/BuyItemController";
import { ListItemsByIdController } from "@modules/userItems/useCases/listUserItemsById/ListItemsByIdController";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const itemsRoutes = Router();

const listItemsController = new ListItemsController();
const listItemsByIdController = new ListItemsByIdController();
const buyItemController = new BuyItemController();

itemsRoutes.get("/", ensureAuthenticated, listItemsController.handle);
itemsRoutes.post("/buy", ensureAuthenticated, buyItemController.handle);
itemsRoutes.get("/list", ensureAuthenticated, listItemsByIdController.handle);

export { itemsRoutes };
