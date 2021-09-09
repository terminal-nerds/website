import type { Human } from "../types/index.js";

export function example({ name, age }: Human) {
	console.log(
		"[HELPER]:",
		`Hello ${name}! I am supposed to help, but I don't really do it.`,
		`By the way... you are ${age} old!`,
	);
}
