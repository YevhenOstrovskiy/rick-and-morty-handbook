import { writable } from 'svelte/store';

export const currentPage = writable<number>(1);
export const totalPages = writable<number>(1);