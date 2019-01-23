export class RequestHandlerService {
  static async handleRequestError(res, err) {
    console.error('Database Error, fail to retrieved', err);
    res.status(500).json({
      message: 'System Error, fail to connect to database',
      error: err,
    });
  }
  static async handleNotFoundError(res, text) {
    res.status(404).json({
      message: text,
    });
  }
  static async handleNotAvailiable(res, text) {
    console.error(text);
    res.status(403).json({
      message: text,
    });
  }
}
