import { PrismaClient } from '@prisma/client';
import { withAccelerate } from '@prisma/extension-accelerate';

const prismaClientSingleton = () => {
	const client = new PrismaClient();

	if (process.env.PRISMA_ACCELERATE_URL) {
		return client.$extends(withAccelerate());
	}

	return client;
};

declare const globalThis: {
	prismaGlobal: ReturnType<typeof prismaClientSingleton> | undefined;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

export default prisma as PrismaClient;

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma;
