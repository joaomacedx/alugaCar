import { Router } from "express";
import { CreateUserController } from "@modules/accounts/useCases/createUser/CreateUserController";
import { UpdateUserAvatarController } from "@modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarControler";
import multer from "multer";
import uploadConfig from "@config/upload";
import { ensureAuthenticated } from "@shared/infra/http/middlewares/ensureAuthenticated";

const usersRoutes = Router();
const createUserController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();
const uploadAvatar = multer(
  uploadConfig.upload(
    "./tmp/avatar",
    ));

usersRoutes.post("/", createUserController.handle);
usersRoutes.patch("/avatar",
  uploadAvatar.single(
    "avatar",
  ),
  ensureAuthenticated,
  updateUserAvatarController.handle,
  );

export { usersRoutes }
