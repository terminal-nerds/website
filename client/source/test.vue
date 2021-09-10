<template>
	<main>
		<ul>
			<li
				v-for="page in ['Options API', 'Class API', 'Composition API']"
				:key="page"
			>
				<nuxt-link :to="`/${page.toLowerCase().split(' ').join('-')}`">
					With {{ page }}
				</nuxt-link>
			</li>
		</ul>
	</main>
</template>

<script lang="ts">
	export interface Human {
		name: string;
	}

	const me: Human = {
		name: "xeho91",
	};

	console.log(me);
</script>
