import { createClient, ssrExchange, debugExchange, cacheExchange, fetchExchange } from '@urql/core';

export const createUrqlClient = () => {
	const ssr = ssrExchange({ isClient: false });

	const client = createClient({
		url: 'https://rickandmortyapi.com/graphql',
		exchanges: [debugExchange, cacheExchange, ssr, fetchExchange],
		fetch,
	});

	return { client, ssr };
};