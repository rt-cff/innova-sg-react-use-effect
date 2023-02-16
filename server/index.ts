import { Server } from "socket.io";

const io = new Server(3001, {
  cors: {
    origin: `http://localhost:3000`,
  },
});

io.on("connection", (socket) => {
  console.log(`⚡: ${socket.id} user just connected!`);
  socket.on("disconnect", () => {
    console.log("🔥: A user disconnected");
  });
});

io.of("/user", (socket) => {
  console.log(`USER ⚡: ${socket.id} user just connected!`);
  socket.on("disconnect", () => {
    console.log("USER 🔥: A user disconnected");
  });
});

io.of("/admin", (socket) => {
  console.log(`ADMIN ⚡: ${socket.id} user just connected!`);
  socket.on("disconnect", () => {
    console.log("ADMIN 🔥: A user disconnected");
  });
});
