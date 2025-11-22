<template>
    <v-container class="pa-0">
        <v-row>

            <v-col cols="12" md="8" class="pa-6">
                <v-breadcrumbs class="px-0 mb-2" :items="breadcrumbs" />

                <v-card>
                    <v-card-title class="font-weight-bold">
                        รายการเวลาเข้างาน  รายการ

                    </v-card-title>
                </v-card>

                
            </v-col>
        </v-row>

    </v-container>
</template>

<script>
    export default {
        name: 'CompanyPage',
        data() {
            return {
                selectAll: false,
                
                breadcrumbs: [
                    { text: 'ข้อความ', disabled: false, href: '#' },
                    { text: 'ข้อความ', disabled: false, href: '#' },
                    { text: 'อิอิ', disabled: true}
                ],
            }
        }
    };
</script>
