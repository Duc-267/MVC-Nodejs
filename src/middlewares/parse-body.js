function parseRequestBody(request) {
  try {
    return new Promise((resolve, reject) => {
      const chunks = [];
      request.on("data", (chunk) => {
        chunks.push(chunk);
      });
      request.on("end", () => {
          console.log("🚀 ~ file: parse-body.js ~ line 10 ~ request.on ~ chunks", chunks)
        resolve(chunks);
      });
    });
  } catch (err) {
    if (!err.message) {
      console.log(err, "in parseRequestBody");
    }
  }
}

export { parseRequestBody };
