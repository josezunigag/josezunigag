<template>
	<v-card>
		<v-card-title>
			Reportes
			<v-spacer></v-spacer>
			<v-text-field
				v-model="search"
				append-icon="mdi-magnify"
				label="Search"
				single-line
				hide-details
			></v-text-field>
		</v-card-title>
		<v-card-text>
			<v-data-table
				:headers="headers"
				:items="desserts"
				:search="search"
				sort-by="calories"
				class="elevation-1"
			>
				<template v-slot:[`item.actions`]="{ item }">
					<v-icon
						small
						class="mr-2"
						color="green"
						@click="editItem(item)"
					>
						mdi-menu
					</v-icon>
					<v-icon
						small
						:color="icon_color"
						@click="selFavorito(!active)"
					>
						mdi-star
					</v-icon>
				</template>
			</v-data-table>
		</v-card-text>
	</v-card>
</template>

<script>
// @ is an alias to /src

export default {
 	name: 'Home',
	data: () => ({
		search: '',
		icon_color: 'grey',
		active: true,
		headers: [
			{
				text: 'Nombre',
				align: 'start',
				sortable: true,
				value: 'name',
			},
        	{ text: 'Fec. Generacion', value: 'fec_gen', sortable: true },
        	// { text: 'Fat (g)', value: 'fat' },
        	// { text: 'Carbs (g)', value: 'carbs' },
        	// { text: 'Protein (g)', value: 'protein' },
        	{ text: 'Acciones', value: 'actions', sortable: false },
      	],
      desserts: [],
	}),
	created () {
      	this.initialize()
    },
	methods: {
		selFavorito(active){
			if(active){
				this.active = !this.active
				this.icon_color = "pink"
			}else{
				this.active = !this.active
				this.icon_color = "grey"
			}
		},
      	initialize () {
			this.desserts = [
				{
					name: 'Ingresos - Rol',
					fec_gen: "01-04-2021",
				},
				{
					name: 'Ingresos - Materias',
					fec_gen: '10-03-2021',
					// fat: 9.0,
					// carbs: 37,
					// protein: 4.3,
				},
				{
					name: 'Terminos - Duracion',
					fec_gen: '11-03-2021',
					// fat: 16.0,
					// carbs: 23,
					// protein: 6.0,
				},
				{
					name: 'Terminos - Materias',
					fec_gen: '20-02-2021',
					// fat: 3.7,
					// carbs: 67,
					// protein: 4.3,
				},
				{
					name: 'Resoluciones Detalles',
					fec_gen: '15-01-2021',
					// fat: 16.0,
					// carbs: 49,
					// protein: 3.9,
				},
				{
					name: 'Resoluciones - Funcionarios',
					fec_gen: '02-04-2021',
					// fat: 0.0,
					// carbs: 94,
					// protein: 0.0,
				},
				{
					name: 'Escritos',
					fec_gen: '02-04-2021',
					// fat: 0.2,
					// carbs: 98,
					// protein: 0,
				},
				{
					name: 'Materias',
					fec_gen: '27-01-2021',
					// fat: 3.2,
					// carbs: 87,
					// protein: 6.5,
				},
				{
					name: 'Actuaciones',
					fec_gen: '15-12-2020',
					// fat: 25.0,
					// carbs: 51,
					// protein: 4.9,
				},
				{
					name: 'Audiencias',
					fec_gen: '15-02-2021',
					// fat: 26.0,
					// carbs: 65,
					// protein: 7,
				},
			]
      	},
		editItem (item) {
			this.$router.push({ path: 'VisorReportes' })
      	},
	}
}
</script>
