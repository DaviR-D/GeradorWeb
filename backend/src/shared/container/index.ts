import { container } from "tsyringe";

import "@shared/container/providers";

import { UsersRepository } from "@modules/accounts/infra/typeorm/repositories/UsersRepository";
import { UsersTokensRepository } from "@modules/accounts/infra/typeorm/repositories/UsersTokensRepository";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { IUsersTokensRepository } from "@modules/accounts/repositories/IUsersTokensRepository";
import { AchievementsRepository } from "@modules/achievements/infra/typeorm/repositories/AchievementsRepository";
import { IAchievementsRepository } from "@modules/achievements/repositories/IAchievementsRepository";
import { ActivitysRepository } from "@modules/activity/infra/typeorm/repositories/ActivitysRepository";
import { IActivitysRepository } from "@modules/activity/repositories/IActivitysRepository";
import { ItemsRepository } from "@modules/items/infra/typeorm/repositories/ItemsRepository";
import { IItemsRepository } from "@modules/items/repositories/IItemsRepository";
import { QuestionsRepository } from "@modules/questions/infra/typeorm/repositories/QuestionsRepository";
import { IQuestionsRepository } from "@modules/questions/repositories/IQuestionsRepository";
import { ScoresRepository } from "@modules/scores/infra/typeorm/repositories/ScoresRepository";
import { IScoresRepository } from "@modules/scores/repositories/IScoresRepository";
import { StudentsRepository } from "@modules/students/infra/typeorm/repositories/StudentsRepository";
import { StudentsTokensRepository } from "@modules/students/infra/typeorm/repositories/StudentsTokensRepository";
import { IStudentsRepository } from "@modules/students/repositories/IStudentsRepository";
import { IStudentsTokensRepository } from "@modules/students/repositories/IUsersTokensRepository";
import { UserAchievementsRepository } from "@modules/userAchievements/infra/typeorm/repositories/UserAchievementsRepository";
import { IUserAchievementsRepository } from "@modules/userAchievements/repositories/IUserAchievementsRepository";
import { UserItemsRepository } from "@modules/userItems/infra/typeorm/repositories/UserItemsRepository";
import { IUserItemsRepository } from "@modules/userItems/repositories/IUserItemsRepository";

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<IUsersTokensRepository>(
  "UsersTokensRepository",
  UsersTokensRepository
);

container.registerSingleton<IActivitysRepository>(
  "ActivitysRepository",
  ActivitysRepository
);

container.registerSingleton<IQuestionsRepository>(
  "QuestionsRepository",
  QuestionsRepository
);

container.registerSingleton<IScoresRepository>(
  "ScoresRepository",
  ScoresRepository
);

container.registerSingleton<IItemsRepository>(
  "ItemsRepository",
  ItemsRepository
);

container.registerSingleton<IUserItemsRepository>(
  "UserItemsRepository",
  UserItemsRepository
);

container.registerSingleton<IAchievementsRepository>(
  "AchievementsRepository",
  AchievementsRepository
);

container.registerSingleton<IUserAchievementsRepository>(
  "UserAchievementsRepository",
  UserAchievementsRepository
);

container.registerSingleton<IStudentsRepository>(
  "StudentsRepository",
  StudentsRepository
);

container.registerSingleton<IStudentsTokensRepository>(
  "StudentsTokensRepository",
  StudentsTokensRepository
);
