import { Router } from "express";

import { ListItemsController } from "@modules/items/useCases/listItems/ListItemsController";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const itemsRoutes = Router();

const listItemsController = new ListItemsController();

itemsRoutes.get("/", ensureAuthenticated, listItemsController.handle);

export { itemsRoutes };
