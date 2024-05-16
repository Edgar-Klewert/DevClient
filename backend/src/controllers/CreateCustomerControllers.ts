import { FastifyRequest, FastifyReply } from 'fastify'
import { CreateCustomerService } from '../services/CreateCustomerService'
import { z } from 'zod'

class CreateCustomerControllers{
  async handle(request: FastifyRequest, reply: FastifyReply){
    const { name, email } = z.object({
      name: z.string(),
      email: z.string().email()
    }).parse(request.body)

    const customerService = new CreateCustomerService()
    
    try {
      const customer = await customerService.execute({ name, email });

      return reply.status(201).send(customer)
    } catch (error) {
      if (error instanceof Error) {
        return reply.status(400).send({ message: error.message })
      }
    }
  }
}

export { CreateCustomerControllers }