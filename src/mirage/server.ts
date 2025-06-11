import { createServer, Response } from "miragejs";

export function makeServer() {
  return createServer({
    routes() {
      this.namespace = "api";

      this.post("/login", (_schema, request) => {
        const { email, password } = JSON.parse(request.requestBody);

        if (email === "user@example.com" && password === "password123") {
          return {
            token: "mock-token-123",
            user: {
              email: "user@example.com",
              role: "user",
            },
          };
        }

        return new Response(401, {}, { error: "Invalid credentials" });
      });

      this.get("/me", (_schema, request) => {
        const auth = request.requestHeaders["Authorization"];
        if (auth === "Bearer mock-token-123") {
          return {
            user: {
              email: "user@example.com",
              role: "user",
            },
          };
        }
        return new Response(401, {}, { error: "Unauthorized" });
      });
    },
  });
}
