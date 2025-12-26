import * as net from "net";

// You can use print statements as follows for debugging, they'll be visible when running tests.
console.log("Logs from your program will appear here!");

// TODO: Uncomment the code below to pass the first stage
const server = net.createServer((socket) => {
  socket.on("data", (data) => {
    const reqString = data.toString();

    const reqStringArray = reqString.split("\r\n");
    console.log(reqStringArray);
    const reqStringPath = reqStringArray[0].split(" ");
    const str = reqStringPath[1].split("/")[2];

    if (reqStringPath[1].includes(`/echo/`)) {
      socket.write(
        `HTTP/1.1 200 OK\r\nContent-Type: text/plain\r\nContent-Length: 3\r\n\r\n${str}`,
      );
    }
    console.log(reqStringPath);
  });
  socket.on("close", () => {
    socket.end();
  });
});

server.listen(4221, "localhost");
