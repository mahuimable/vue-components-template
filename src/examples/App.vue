<template>
	<div id="app">
		<div class="container">
			<side-nav class="nav"/>
			<transition>
				<router-view class="view"/>
			</transition>
		</div>
	</div>
</template>
<script>
import sideNav from './components/side-nav'
export default {
	name: 'App',
	components: {
		sideNav
	}
}
</script>
<style lang="scss">
	@import "./assets/styles/md.scss";
	.container {
    margin: 48px auto;
    width: 90%;
    background-color: #fff;
    box-shadow: 0 4px 30px 0 rgba(223, 225, 230, 0.5);
    .nav {
      float: left;
      width: 210px;
    }
    .view {
      margin-left: 210px;
      padding: 32px 48px 48px;
      box-sizing: border-box;
    }
  }

  .container:after {
    content: "";
    clear: both;
    display: block;
  }
</style>