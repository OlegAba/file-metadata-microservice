import { Response, Request } from "express";

export class FileAnalyseController {

  async metadata(req: Request, res: Response): Promise<void> {
    const { file } = req;

    if (!file) {
      res.status(400).json({ error: "No upfile found" });
      return
    }

    const data = {
      name: file.originalname,
      type: file.mimetype,
      size: file.size
    }

    res.status(200).json(data);
  }
}