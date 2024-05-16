import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from 'fastify';
import { CreateCustomerControllers } from './controllers/CreateCustomerControllers';
import { ListCustomersController } from "./controllers/ListCustomersController"
import { DeleteCustomerController } from './controllers/DeleteCustomerController';

export async function routes(fastify: FastifyInstance) {
  fastify.get("/teste", async (request: FastifyRequest, reply: FastifyReply) => {
    return { ok: true };
  });

  fastify.post("/customer", async (request: FastifyRequest, reply: FastifyReply)=>{
    return new CreateCustomerControllers().handle(request, reply)
  })

  fastify.get("/customers", async (request: FastifyRequest, reply: FastifyReply)=>{
    return new ListCustomersController().handle(request, reply)
  })

  fastify.delete("/customer", async (request: FastifyRequest, reply: FastifyReply)=>{
    return new DeleteCustomerController().handle(request, reply)
  })
}