<template>
    <v-card>
        <v-card-title>
            Ingresos - Rol
			<v-spacer></v-spacer>
        </v-card-title>
            
        <v-card-text>
            <v-row>
                <v-col>
                    <v-row>
                        <v-col md="2">
                            <v-select
                                :items="items"
                                label="Corte"
                                dense
                                solo
                            ></v-select>
                        </v-col>
                        <v-col md="2">
                            <v-select
                                :items="items"
                                label="Tribunal"
                                dense
                                solo
                            ></v-select>
                        </v-col>
                        <v-col md="1">
                            <v-select
                                :items="items"
                                label="Año Inicio"
                                dense
                                solo
                            ></v-select>
                        </v-col>
                        <v-col md="2">
                            <v-select
                                :items="items"
                                label="Mes Inicio"
                                dense
                                solo
                            ></v-select>
                        </v-col>
                        <v-col md="1">
                            <v-select
                                :items="items"
                                label="Año Fin"
                                dense
                                solo
                            ></v-select>
                        </v-col>
                        <v-col md="2">
                            <v-select
                                :items="items"
                                label="Mes Fin"
                                dense
                                solo
                            ></v-select>
                        </v-col>
                        <v-col md="2">
                            <v-btn
                                color="green"
                                dark
                            >
                                Generar
                                <v-icon dark right>
                                mdi-cached
                                </v-icon>
                            </v-btn>

                            &nbsp;
                            
                            <v-btn
                            :loading="loading3"
                            :disabled="loading3"
                            color="blue-grey"
                            class="white--text"
                            @click="loader = 'loading3'"
                            >
                            Guardar
                            <v-icon
                                right
                                dark
                            >
                                mdi-cloud-upload
                            </v-icon>
                            </v-btn>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-data-table
                                :headers="headers"
                                :items="arrData"
                                class="elevation-1"
                                height="500px"
                            >
                            </v-data-table>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>

<script>

export default {
    name: 'VisorReportes',
    data: () => ({
        arrData: [],
        headers: [
                { text: 'cod_corte',  align: 'center', value: 'cod_corte', class : 'primary--text gris'},
                { text: 'gls_corte',  align: 'center', value: 'gls_corte', class : 'primary--text gris'},
                { text: 'cod_tribunal', align: 'center', value: 'cod_tribunal', class : 'primary--text gris'},
                { text: 'gls_tribunal', align: 'left', value: 'gls_tribunal', class : 'primary--text gris'},
                { text: 'gls_tipo_causa', align: 'center', value: 'gls_tipo_causa', class : 'primary--text gris'},
                { text: 'tip_causa', align: 'center', value: 'tip_causa', class : 'primary--text gris'},
                { text: 'rol_causa', align: 'center', value: 'rol_causa', class : 'primary--text gris'},
                { text: 'era_causa', align: 'center', value: 'era_causa', class : 'primary--text gris'},
                { text: 'fecha_ingreso', align: 'center', value: 'fecha_ingreso', class : 'primary--text gris'},
                { text: 'cod_procedimiento', align: 'center', value: 'cod_procedimiento', class : 'primary--text gris'},
                { text: 'gls_procedimiento', align: 'center', value: 'gls_procedimiento', class : 'primary--text gris'},
                { text: 'cod_materia', align: 'center', value: 'cod_materia', class : 'primary--text gris'},
                { text: 'gls_materia', value: 'gls_materia', class : 'primary--text gris'},
                { text: 'gls_ing_causa', value: 'gls_ing_causa', class : 'primary--text gris'},
                { text: 'flg_masivo', align: 'center', value: 'flg_masivo', class : 'primary--text gris'},
                { text: 'est_procesal', align: 'center', value: 'est_procesal', class : 'primary--text gris'},
                { text: 'gls_estprocesal', align: 'center', value: 'gls_estprocesal', class : 'primary--text gris'},
                { text: 'id_formainicio', align: 'center', value: 'id_formainicio', class : 'primary--text gris'},
                { text: 'gls_formainicio', align: 'center', value: 'gls_formainicio', class : 'primary--text gris'},
                { text: 'caratulado', align: 'center', value: 'caratulado', class : 'primary--text gris'},
                { text: 'marca_digital', align: 'center', value: 'marca_digital', class : 'primary--text gris'},
                { text: 'mes', align: 'center', value: 'mes', class : 'primary--text gris'},
                { text: 'ano', align: 'center', value: 'mes', class : 'primary--text gris'}
            ],
    }),
    created(){
        this.requestData()
    },
    methods:{
        requestData: function () {
            
            const axios = require('axios')
            const req1 = 'http://10.13.142.195:3001/civil/ingresos_causa'

            const get = async ing_url => {
                try{

                    const response = await axios.get(req1, {
                        params: {
                            cod_corte: 10, //this.user[0].cod_tribunal
                            cod_tribunal: 2,
                            anoInicio: 2021,
                            mesInicio: 1,
                            anoFin: 2021,
                            mesFin: 1
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
            console.log(this.arrData)


        }
    }
}

</script>
