<script lang="ts">

import { currentPage, totalPages } from './pagination.store';

	let siblingCount = 0;

	let paginationRange = $state<(number | string)[]>([]);

	const updatePaginationRange = () => {
		paginationRange = generatePaginationRange($currentPage, $totalPages, siblingCount);
	};

	$effect(() => {
		updatePaginationRange();
	});

	const onPageChange = (page: number) => {
		if (page >= 1 && page <= $totalPages && page !== $currentPage) {
      currentPage.update(n => n = page);
		}
	};

	function generatePaginationRange(
		currentPage: number,
		totalPages: number,
		siblingCount: number
	): (number | string)[] {
		const totalNumbers = siblingCount * 2 + 3;
		const totalBlocks = totalNumbers + 2;

		if (totalPages > totalBlocks) {
			const startPages = [1, 2];
			const endPages = [totalPages - 1, totalPages];
			const leftSiblingIndex = Math.max(currentPage - siblingCount, 3);
			const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages - 2);

			const middleRange = [];
			for (let i = leftSiblingIndex; i <= rightSiblingIndex; i++) {
				middleRange.push(i);
			}

			if (leftSiblingIndex > 2) {
				middleRange.unshift('...');
			}

			if (rightSiblingIndex < totalPages - 1) {
				middleRange.push('...');
			}

      if (currentPage > 5 && currentPage <= totalPages - 1) {
        startPages.splice(0, 2, currentPage -3 , currentPage - 2);
      }

			return [...startPages, ...middleRange, ...endPages];
		}

		return Array.from({ length: totalPages }, (_, i) => i + 1);
	}
</script>

<nav class="pagination">
	<ul>
    <li>
      <button 
        class="pagination-button" 
        onclick={() => onPageChange($currentPage = 1)}
        disabled={$currentPage === 1}>
        ««
      </button>
    </li>

		<li>
			<button 
				class="pagination-button" 
				onclick={() => onPageChange($currentPage -= 1)}
				disabled={$currentPage === 1}>
				«
			</button>
		</li>

		{#each paginationRange as page}
			<li>
				{#if page === '...'}
					<span class="pagination-ellipsis">{page}</span>
				{:else}
					<button 
						class:active={page === $currentPage}
						class="pagination-button"
						onclick={() => onPageChange(Number(page))}>
						{page}
					</button>
				{/if}
			</li>
		{/each}

		<li>
			<button 
				class="pagination-button"
				onclick={() => onPageChange($currentPage += 1)} 
				disabled={$currentPage === $totalPages}>
				»
			</button>
		</li>
    <li>
			<button 
				class="pagination-button"
				onclick={() => onPageChange($currentPage = $totalPages)}
				disabled={$currentPage === $totalPages}>
				»»
			</button>
		</li>
	</ul>
</nav>

<style>
	.pagination {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.5rem;
		margin: 1rem 0;
	}

	.pagination ul {
		list-style: none;
		display: flex;
		gap: 0.25rem;
		padding: 0;
		margin: 0;
	}

	.pagination-button {
		padding: 0.5rem 0.75rem;
		border: 1px solid #ddd;
		background-color: #fff;
		color: #333;
		border-radius: 0.25rem;
		cursor: pointer;
		transition: background-color 0.2s ease;
	}

	.pagination-button:hover {
		background-color: #f5f5f5;
	}

	.pagination-button:disabled {
		background-color: #eee;
		color: #aaa;
		cursor: not-allowed;
	}

	.pagination-ellipsis {
		padding: 0.5rem;
		color: #aaa;
	}

	.active {
		background-color: #007bff;
		color: #fff;
		border-color: #007bff;
	}
</style>
