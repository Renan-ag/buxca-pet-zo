import z, { ZodError } from "zod";
import { AppError } from "@/shared/errors/app-error";
import type { FastifyInstance } from "fastify";

export async function errorHandlerPlugin(app: FastifyInstance) {
  app.setErrorHandler((error, request, reply) => {
    if (error instanceof ZodError) {
      return reply.status(400).send({
        message: "Validation error",
        issues: z.treeifyError(error),
      });
    }

    if (error instanceof AppError) {
      return reply.status(error.statusCode).send({
        message: error.message,
        code: error.code,
      });
    }

    request.log.error(error);

    return reply.status(500).send({
      message: "Internal server error",
    });
  });
}
