function parseRequestBody(request) {
  try {
    return new Promise((resolve, reject) => {
      const chunks = [];
      request.on("data", (chunk) => {
        chunks.push(chunk);
      });
      request.on("end", () => {
        request.body = chunks;
        resolve();
      });
    });
  } catch (err) {
    if (!err.message) {
      console.log(err, "in parseRequestBody");
    }
  }
}

export { parseRequestBody };
