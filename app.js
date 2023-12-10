import Fastify from "fastify";
const fastify = Fastify({
	logger: true
});

fastify.get("/", (req, rep) => {
	rep.send("Hello World!");
});

fastify.listen({ port: 3535 }, (error, address) => {
	if (error) {
		fastify.log.error(error);
		process.exit(1);
	}
	fastify.log.info(`Server listening on ${address}`);
});
