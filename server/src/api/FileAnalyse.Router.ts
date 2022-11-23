import { Router, Request, Response } from "express";
import multer from "multer";
import { FileAnalyseController } from "./FileAnalyse.Controller";

const router = Router();
const base = "/fileanalyse";
const controller = new FileAnalyseController();
const upload = multer({ storage: multer.memoryStorage() });

router.post(
  base,
  upload.single("upfile"),
  controller.metadata.bind(controller)
);

export default router;