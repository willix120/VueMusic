<template lang="pug">
div
	p {{ artista.name }}
	a(:href="artista.url"): img(:src="artista.image[2]['#text']")
</template>
<script>
export default {
	name:'artista',
	props: ['artista']
}
</script>

<style lang="stylus">
p
	margin 2px
	font-size 14px
	
div
	margin 20px
</style>