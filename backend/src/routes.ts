import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from 'fastify';
import { CreateCustomerControllers } from './controllers/CreateCustomerControllers';

export async function routes(fastify: FastifyInstance) {
  fastify.get("/teste", async (request: FastifyRequest, reply: FastifyReply) => {
    return { ok: true };
  });

  fastify.post("/customer", async (request: FastifyRequest, reply: FastifyReply)=>{
    return new CreateCustomerControllers().handle(request, reply)
  })
}