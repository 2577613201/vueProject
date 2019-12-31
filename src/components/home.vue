<template>
	<div id="home">
			<div class="logo">
				<img class="logo_img" src="@/assets/image/1.png" />
			</div>
			<p class="title">
				标题
		    </p>
	</div>
</template>
<script>
	import '@/assets/css/home.scss'
	export default{
		inject: ['reload'],
		data(){
			return{}
		},
		
	
		methods: {
		    handleReload() {
		      this.reload(); // 在想要刷新页面的时候调用reload方法，防止刷新出现空白
		    }
		}

	}
</script>