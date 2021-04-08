<template>
    <v-container>
        <v-card color="#1565C0" class="mx-auto" width="100%" shaped>
            <v-card-title class="cardBack">
                <h2 class="ml-15">Reporte Ingresos - Rol</h2>
                
                <v-spacer></v-spacer>
            </v-card-title>
                
            <v-card-text>
                <v-row class="mt-5">
                    <v-col>
                        <v-row>
                            <v-col md="2" sm="12">
                                <v-select
                                    :items="arrCortes"
                                    dense
                                    solo
                                    label="Sel. Corte"
                                    item-text="nombre"
                                    item-value="value"
                                    v-model="cod_corte_value"
                                    @change="buscarTribunales(cod_corte_value)"
                                ></v-select>
                            </v-col>
                            <v-col md="2" sm="12">
                                <v-select
                                    :items="arrTribunalesSel"
                                    label="Tribunal"
                                    dense
                                    solo
                                    item-text="nombre"
                                    item-value="value"
                                    v-model="cod_tribunal_value"
                                ></v-select>
                            </v-col>
                            <v-col md="1" sm="12">
                                <v-select
                                    :items="arrAno"
                                    label="Año Inicio"
                                    dense
                                    solo
                                    item-text="nombre"
                                    item-value="value"
                                    v-model="ano_inicio_value"
                                ></v-select>
                            </v-col>
                            <v-col md="2" sm="12">
                                <v-select
                                    :items="arrMeses"
                                    label="Mes Inicio"
                                    dense
                                    solo
                                    item-text="nombre"
                                    item-value="value"
                                    v-model="mes_inicio_value"
                                ></v-select>
                            </v-col>
                            <v-col md="1" sm="12">
                                <v-select
                                    :items="arrAno"
                                    label="Año Fin"
                                    dense
                                    solo
                                    item-text="nombre"
                                    item-value="value"
                                    v-model="ano_fin_value"
                                ></v-select>
                            </v-col>
                            <v-col md="2" sm="12">
                                <v-select
                                    :items="arrMeses"
                                    label="Mes Fin"
                                    dense
                                    solo
                                    item-text="nombre"
                                    item-value="value"
                                    v-model="mes_fin_value"
                                ></v-select>
                            </v-col>
                            <v-col md="1" sm="12">
                                <v-btn
                                    color="green"
                                    dark
                                    small
                                    @click="generar()"
                                >
                                    Generar
                                    <v-icon dark right>
                                    mdi-cached
                                    </v-icon>
                                </v-btn>
                            </v-col>
                            <v-col md="1" sm="12">
                                <v-btn color="#E65100" class="white--text" small>
                                    Guardar
                                    <v-icon right dark>
                                        mdi-cloud-upload
                                    </v-icon>
                                </v-btn>
                            </v-col>
                        </v-row>
                        <v-row>

                            <v-col>
                                <v-data-table
                                    :items="arrData"
                                    class="elevation-1 blue-grey lighten-5"
                                    height="500px"
                                    hide-default-header
                                    :loading="myloading"
                                    loading-text="Cargando Informacion..."
                                >
                                    <template v-slot:no-data>
                                        <p>The Table is Empty. Please insert data with the above Button.</p>
                                    </template>
                                    <template v-slot:top>
                                        <v-toolbar flat class="blue-grey lighten-5">
                                            <v-toolbar-title>Reporte Ingresos - Rol</v-toolbar-title>

                                            <v-divider class="mx-4" inset vertical></v-divider>
                                            <v-spacer></v-spacer>
                        
                                            <vue-excel-xlsx class="my-2 btn btn-primary" :data="arrData" :columns="excelheaders" :filename="'Reporte Ingresos_Rol'" :sheetname="'Ingresos_Rol'">
                                                <v-btn
                                                        color="#FFD600"
                                                        class="ma-2"
                                                        right
                                                >
                                                    Excel
                                                    <v-icon right dark>
                                                        mdi-cloud-upload
                                                    </v-icon>
                                                </v-btn>
                                            </vue-excel-xlsx>
                                        </v-toolbar>
                                    </template>
                                    <template v-slot:[`body`]="{ items }">
                                        <thead class="primary--text">
                                            <th>Cod Corte</th>
                                            <th>Corte</th>
                                            <th>Cod. Tribunal</th>
                                            <th>Tribunal</th>
                                            <th>Cod. Tipo Causa</th>
                                            <th>Tipo Causa</th>
                                            <th>ROL</th>
                                            <th>ERA</th>
                                            <th>Fec. Ingreso</th>
                                            <th>Cod. Procedimiento</th>
                                            <th>Procedimiento</th>
                                            <th>Cod. Materia</th>
                                            <th>Materia</th>
                                            <th>Tipo Ingreso</th>
                                            <th>Masivo</th>
                                            <th>Cod. Estado Procesal</th>
                                            <th>Estado Procesal</th>
                                            <th>Cod. Forma Inicio</th>
                                            <th>Forma Inicio</th>
                                            <th>Caratulado</th>
                                            <th>Marca Digital</th>
                                            <th>Mes</th>
                                            <th>Año</th>
                                        </thead>
                                        <tbody>
                                            <tr v-for="item in items" :key="item.increment">
                                                <td style ="text-align: center" class="bordes">{{ item.cod_corte }}</td>
                                                <td style ="text-align: center" class="bordes">{{ item.gls_corte }}</td>
                                                <td style ="text-align: center" class="bordes">{{ item.cod_tribunal }}</td>
                                                <td style ="text-align: center" class="bordes">{{ item.gls_tribunal }}</td>
                                                <td style ="text-align: center" class="bordes">{{ item.gls_tipo_causa }}</td>
                                                <td style ="text-align: center" class="bordes">{{ item.tip_causa }}</td>
                                                <td style ="text-align: center" class="bordes">{{ item.rol_causa }}</td>
                                                <td style ="text-align: center" class="bordes">{{ item.era_causa }}</td>
                                                <td style ="text-align: center" class="bordes">{{ item.fecha_ingreso }}</td>
                                                <td style ="text-align: center" class="bordes">{{ item.cod_procedimiento }}</td>
                                                <td style ="text-align: center" class="bordes">{{ item.gls_procedimiento }}</td>
                                                <td style ="text-align: center" class="bordes">{{ item.cod_materia }}</td>
                                                <td style ="text-align: center" class="bordes">{{ item.gls_materia }}</td>
                                                <td style ="text-align: center" class="bordes">{{ item.gls_ing_causa }}</td>
                                                <td style ="text-align: center" class="bordes">{{ item.flg_masivo }}</td>
                                                <td style ="text-align: center" class="bordes">{{ item.est_procesal }}</td>
                                                <td style ="text-align: center" class="bordes">{{ item.gls_estprocesal }}</td>
                                                <td style ="text-align: center" class="bordes">{{ item.id_formainicio }}</td>
                                                <td style ="text-align: center" class="bordes">{{ item.gls_formainicio }}</td>
                                                <td style ="text-align: center" class="bordes">{{ item.caratulado }}</td>
                                                <td style ="text-align: center" class="bordes">{{ item.marca_digital }}</td>
                                                <td style ="text-align: center" class="bordes">{{ item.mes }}</td>
                                                <td style ="text-align: center" class="bordes">{{ item.ano }}</td>
                                            </tr>
                                        </tbody>
                                    </template>
                                </v-data-table>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <v-data-table
                                    :headers="headersHistorial"
                                    :items="arrHistorial"
                                    class="elevation-1 blue-grey lighten-5"
                                    height="500px"
                                >
                                    <template v-slot:top>
                                        <v-toolbar flat class="blue-grey lighten-5">
                                            <v-toolbar-title>Historial</v-toolbar-title>

                                            <v-divider class="mx-4" inset vertical></v-divider>
                                            <v-spacer></v-spacer>
                                        </v-toolbar>
                                    </template>
                                    <template v-slot:[`body`]="{ items }">
                                        <tbody>
                                            <tr v-for="item in items " :key="item.increment">
                                                <td style ="text-align: center">{{ item.fecha_generacion }}</td>
                                                <td style ="text-align: center">{{ item.cantidad }}</td>
                                                <td style ="text-align: center">{{ item.usuario }}</td>
                                                <td style ="text-align: center">
                                                    <v-icon small class="mr-2" @click="exportarHistorial(item)" color="green">
                                                        mdi-pencil
                                                    </v-icon>
                                                    <v-icon small class="mr-2" color="red">
                                                        mdi-delete
                                                    </v-icon>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </template>
                                </v-data-table>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>

export default {
    name: 'VisorReportes',
    data: () => ({
        cod_corte_value: null,
        cod_tribunal_value: null,
        ano_inicio_value: null,
        mes_inicio_value: null,
        ano_fin_value: null,
        mes_fin_value: null,
        myloading: false,
        arrHistorial: [{fecha_generacion: "01-04-2021", cantidad: 3500,usuario: "jose_zuniga"}],
        headersHistorial: [
            {   text: 'fecha_generacion',  align: 'center', value: 'fecha_generacion', class : 'primary--text gris'},
            {   text: 'usuario',  align: 'center', value: 'usuario', class : 'primary--text gris'},
            {   text: 'Nº Registros',  align: 'center', value: 'cantidad', class : 'primary--text gris'},
            {   text: 'Acciones',  align: 'center', value: '', class : 'primary--text gris'},
        ],
        arrData: [],
        excelheaders:[ 
            {label: "cod_corte",               field:  "cod_corte"},
            {label: "gls_corte",                field:  "gls_corte"},
            {label: "cod_tribunal",             field:  "cod_tribunal"},
            {label: "gls_tribunal",             field:  "gls_tribunal"},
            {label: "gls_tipo_causa",           field:  "gls_tipo_causa"},
            {label: "tip_causa",                field:  "tip_causa"},
            {label: "rol_causa",                field:  "rol_causa"},
            {label: "era_causa",                field:  "era_causa"},
            {label: "fecha_ingreso",            field:  "fecha_ingreso"},
            {label: "cod_procedimiento",        field:  "cod_procedimiento"},
            {label: "gls_procedimiento",        field:  "gls_procedimiento"},
            {label: "cod_materia",              field:  "cod_materia"},
            {label: "gls_materia",              field:  "gls_materia"},
            {label: "gls_ing_causa",            field:  "gls_ing_causa"},
            {label: "flg_masivo",               field:  "flg_masivo"},
            {label: "est_procesal",             field:  "est_procesal"},
            {label: "gls_estprocesal",          field:  "gls_estprocesal"},
            {label: "id_formainicio",           field:  "id_formainicio"},
            {label: "gls_formainicio",          field:  "gls_formainicio"},
            {label: "caratulado",               field:  "caratulado"},
            {label: "marca_digital",            field:  "marca_digital"},
            {label: "mes",                      field:  "mes"},
            {label: "mes",                      field:  "mes"}
        ],
        arrCortes: [
            {nombre: "Todos", value: 0},
            {nombre: "C.A. de Arica", value: 10},
            {nombre: "C.A. de Santiago", value: 90},
        ],
        arrTribunales: [
            {nombre: "Todos", value: 0, cod_corte: 0},
            {nombre: "1º Juzgado de Letras de Arica", value: 2  , cod_corte: 10 },
            {nombre: "2º Juzgado de Letras de Arica", value: 3  , cod_corte: 10 },
            {nombre: "3º Juzgado de Letras de Arica", value: 4  , cod_corte: 10 },
            {nombre: "1º Juzgado Civil de Santiago" , value: 259, cod_corte: 90 },
            {nombre: "2º Juzgado Civil de Santiago" , value: 260, cod_corte: 90 },
            {nombre: "3º Juzgado Civil de Santiago" , value: 261, cod_corte: 90 },
            {nombre: "4º Juzgado Civil de Santiago" , value: 262, cod_corte: 90 },
            {nombre: "5º Juzgado Civil de Santiago" , value: 263, cod_corte: 90 },
        ],
        arrTribunalesSel:[],
        arrAno: [
            {nombre: "2021", value: 2021},
            {nombre: "2020", value: 2020},
        ],
        arrMeses: [
            {nombre: "Enero", value: 1},
            {nombre: "Febrero", value: 2},
            {nombre: "Marzo", value: 3},
            {nombre: "Abril", value: 4},
            {nombre: "Mayo", value: 5},
            {nombre: "Junio", value: 6},
            {nombre: "Julio", value: 7},
            {nombre: "Agosto", value: 8},
            {nombre: "Septiembre", value: 9},
            {nombre: "Octubre", value: 10},
            {nombre: "Noviembre", value: 11},
            {nombre: "Diciembre", value: 12},
        ]
    }),
    created(){
        this.requestData()
    },
    methods:{
        generar(){
            const axios = require('axios')
            const req1 = 'http://10.13.142.195:3001/civil/ingresos_causa'

            this.myloading = true

            console.log(this.myloading)
            const get = async ing_url => {
                try{

                    const response = await axios.get(req1, {
                        params: {
                            cod_corte: this.cod_corte_value, //this.user[0].cod_tribunal
                            cod_tribunal: this.cod_tribunal_value,
                            anoInicio: this.ano_inicio_value,
                            mesInicio: this.mes_inicio_value,
                            anoFin: this.ano_fin_value,
                            mesFin: this.mes_fin_value
                        }
                    })

                    const data = response.data

                    this.arrData = []
                    let objDocumento

                    Object.values(data.recordset).map((doc) => {
                        objDocumento = new Object()
                        objDocumento.cod_corte              =   doc.cod_corte
                        objDocumento.gls_corte              =   doc.gls_corte
                        objDocumento.cod_tribunal           =   doc.cod_tribunal
                        objDocumento.gls_tribunal           =   doc.gls_tribunal
                        objDocumento.gls_tipo_causa         =   doc.gls_tipo_causa
                        objDocumento.crr_causa              =   doc.crr_causa
                        objDocumento.tip_causa              =   doc.tip_causa
                        objDocumento.rol_causa              =   doc.rol_causa
                        objDocumento.era_causa              =   doc.era_causa
                        objDocumento.fecha_ingreso          =   doc.fecha_ingreso
                        objDocumento.cod_procedimiento      =   doc.cod_procedimiento
                        objDocumento.gls_procedimiento      =   doc.gls_procedimiento
                        objDocumento.cod_materia            =   doc.cod_materia
                        objDocumento.gls_materia            =   doc.gls_materia
                        objDocumento.gls_ing_causa          =   doc.gls_ing_causa
                        objDocumento.flg_masivo             =   doc.flg_masivo
                        objDocumento.est_procesal           =   doc.est_procesal
                        objDocumento.gls_estprocesal        =   doc.gls_estprocesal
                        objDocumento.id_formainicio         =   doc.id_formainicio
                        objDocumento.gls_formainicio        =   doc.gls_formainicio
                        objDocumento.caratulado             =   doc.caratulado
                        objDocumento.marca_digital          =   doc.marca_digital
                        objDocumento.mes                    =   doc.mes
                        objDocumento.ano                    =   doc.ano

                        this.arrData.push(objDocumento)

                    })


                }catch(error){
                    console.log(error)
                }
            }

            get(req1)

            this.myloading = false

        },
        requestData: function () {
            
        },
        buscarTribunales(cod_corte){
            this.arrTribunalesSel = []
            this.arrTribunalesSel = this.arrTribunales.filter(tribunal => tribunal.cod_corte == cod_corte || tribunal.cod_corte == 0)
        },
        exportarHistorial(){
            console.log("hola mundo ")
        },
    }
}

</script>

<style lang="css" scoped>
.cardBack{
	/* background-color: rgba(0, 0, 0, 0.70); */
	background-image: url("../../public/img/cabecera.jpg");
	background-position: center; /* Center the image */
	background-size: cover;
}

.pruebas{
    white-space: nowrap;
}

th {
    /* border: 1px solid rgb(190, 190, 190); */
    padding: 5px 10px;
    white-space: nowrap;
    border: 1px solid #ddd;
    position: sticky;
    top: 0;
    background-color: #BDBDBD;
}

.bordes{
    border: 1px solid #ddd;
    white-space: nowrap;
}
</style>
