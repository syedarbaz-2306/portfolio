/// <reference types="svelte" />

declare namespace svelteHTML {
	interface HTMLAttributes<T> {
		"on:enterViewport"?: (event: CustomEvent<void>) => void;
		onenterViewport?: (event: CustomEvent<void>) => void;
		"on:enter"?: (event: CustomEvent<any>) => void;
		onenter?: (event: CustomEvent<any>) => void;
		"on:leave"?: (event: CustomEvent<any>) => void;
		onleave?: (event: CustomEvent<any>) => void;
	}
}
