<script>
  import { Character } from '~/lib/components/Character/';
	
</script>

<Character
	character={{
		id: 1,
		name: 'Rick Sanchez',
		status: 'Alive',
		species: 'Human',
		type: 'Scientist',
		gender: 'Male',
		origin: { name: 'Earth', url: 'https://example.com/earth' },
		location: { name: 'Citadel of Ricks', url: 'https://example.com/citadel' },
		image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
		episode: ['https://example.com/episode1', 'https://example.com/episode2'],
		url: 'https://example.com/rick',
		created: '2017-11-04T18:48:46.250Z'
	}}
/>
