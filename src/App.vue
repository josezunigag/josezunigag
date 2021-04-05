<template>
  <v-app>
    <v-app-bar app dense>
        <v-app-bar-nav-icon @click="showNav()"></v-app-bar-nav-icon>
        <v-toolbar-title></v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
    </v-app-bar>

	<v-navigation-drawer app v-model="drawer" dark>
		<v-list-item>
			<v-list-item-avatar>
			<v-img src=""></v-img>
			</v-list-item-avatar>

			<v-list-item-content>
			<v-list-item-title>Jose Zuniga</v-list-item-title>
			</v-list-item-content>
      	</v-list-item>

      	<v-divider></v-divider>

		<v-list dense>
			<v-list-item
			v-for="item in items"
			:key="item.title"
			link
			>
			<v-list-item-icon>
				<v-icon :color="item.color"> {{ item.icon }}</v-icon>
			</v-list-item-icon>

			<v-list-item-content>
				<!-- <v-list-item-title>{{ item.title }}</v-list-item-title> -->
				<v-list-item-title>
					<router-link :to="item.route" style="color:white">{{ item.title }}</router-link>
				</v-list-item-title>
			</v-list-item-content>
			</v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
        <router-view>
    	</router-view>
    </v-main>
  </v-app>
</template>

<script>

export default {
  	name: 'App',
	data: () => ({
		drawer: true,
		items: [
          	{ title: 'Reportes', icon: 'mdi-view-dashboard', route: '/', color: 'blue' },
          	{ title: 'Favoritos', icon: 'mdi-star', route: '/', color: 'pink' },
        ],
  	}),
 	methods:{
		showNav(){
			this.drawer = !this.drawer
		}
  }
};
</script>

<style lang="css" scoped>
a {
	text-decoration: none;
	}
</style>