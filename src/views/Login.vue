<template>
	<v-container class="mx-auto">
        <v-card class="mx-auto"  width="40%" shaped>
            <v-card-title >
                Login
            </v-card-title>
            <v-card-text>
                <v-row align="center">
                    <v-col md="3" >
                       <h4> Usuario:</h4>
                    </v-col>
                    <v-col md="9">                      
                        <v-text-field
                            color="purple darken-2"
                            label="Usuario"
                            required
                            
                        ></v-text-field>
                    </v-col>

                </v-row>
                <v-row align="center">
                    <v-col md="3" >
                       <h4> Password:</h4>
                    </v-col>
                    <v-col md="9">                      
                        <v-text-field
                            color="purple darken-2"
                            label="Password"
                            required
                            
                        ></v-text-field>
                    </v-col>

                </v-row>
                <v-row>
                    <v-col md="12" align="right">
                        <v-btn
                            color="green"
                            dark
                            small
                            @click="generar()"
                        >
                            Ingresar
                        </v-btn>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>
export default {
    name: "Login",
    
}
</script>