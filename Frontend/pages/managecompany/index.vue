<template>
  <v-container>
    <v-row class="ml-1 mb-1">
      <v-col cols="auto">
        <p class="text-head">จัดการบริษัท</p>
      </v-col>
    </v-row>
    <v-card class="card-company pa-5" flat>
      <template>
        <v-row>
          <v-col cols="4">
            <v-text-field
              placeholder="ค้นหาจากชื่อบริษัทภาษาไทย"
              append-icon="mdi-magnify"
              outlined
              dense
            ></v-text-field>
          </v-col>
          <v-col cols="auto">
            <v-btn outlined color="primary" class="btn-pri">ค้นหา</v-btn>
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="auto">
            <v-btn dark color="primary" class="btn-search" @click="createCompany()"><v-icon small class="mr-2">mdi-plus-circle-outline</v-icon>สร้างบริษัท</v-btn>
          </v-col>
        </v-row>
      </template>

      <template>
        <v-data-table
          :headers="headers"
          :items="company"
          class="elevation-1"
        >
          <template v-slot:item.no="{ item }">
            {{company.indexOf(item) + 1}}
          </template>
          <template v-slot:item.img="{ item }">
            <v-img width="50" src="https://cdn.vuetifyjs.com/images/john.jpg"></v-img>
          </template>
          <template v-slot:item.actions="{ item }">
            <v-icon
              small
              class="mr-2"
              @click="editItem(item)"
            >
              mdi-pencil
            </v-icon>
            <v-icon
              small
              @click="deleteItem(item)"
            >
              mdi-delete
            </v-icon>
          </template>
        </v-data-table>
      </template>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'companyPage',
  data () {
    return {
      headers: [
        { text: 'ลำดับ', align: 'center', sortable: false, value: 'no' },
        { text: 'รูป', align: 'start', sortable: false, value: 'img' },
        { text: 'ชื่อบริษัทภาษาไทย', align: 'start', sortable: false, value: 'companyTh' },
        { text: 'ชื่อบริษัทภาษาอังกฤษ', align: 'start', sortable: false, value: 'companyEn' },
        { text: 'สาขา', align: 'start', sortable: false, value: 'branch' },
        { text: 'จัดการ', align: 'center', sortable: false, value: 'actions' },
      ],
      company: [
        {
          _id: '1',
          companyTh: 'บริษัท อินเทอร์เน็ตประเทศไทย จำกัด (มหาชน)',
          companyEn: 'INET',
          tax_id: '1234567890121',
          branch: 'สำนักงานใหญ่',
          sts: 1
        },
        {
          _id: '2',
          companyTh: 'บริษัท แมนดาลา คอมมูนิเคชั่น จำกัด',
          companyEn: 'Mandala',
          tax_id: '1234567890122',
          branch: 'สำนักงานใหญ่',
          sts: 1
        },
        {
          _id: '3',
          companyTh: 'บริษัท ไทยไอเด็นติตี้ส์ จำกัด',
          companyEn: 'Thai Identities',
          tax_id: '1234567890123',
          branch: 'สำนักงานใหญ่',
          sts: 1
        },
      ],
    }
  },
  methods: {
    createCompany () {
      this.$router.push('/managecompany/create/')
    },
    editItem (item) {
      console.log(item);
    },
    deleteItem (item) {
      console.log(item);
    }
  }
}
</script>

<style scoped>
::v-deep .theme--light.v-data-table > .v-data-table__wrapper > table > thead > tr > th {
    color: rgba(0, 0, 0, 0.6);
    background-color: #F9FAFB;
}
::v-deep .theme--light.v-data-table > .v-data-table__wrapper > table > thead > tr:last-child > th {
    border-bottom: none;
}
.text-head {
  font-size: 24px;
  font-weight: 700;
  color: #333333;
}
.card-company {
  border-radius: 24px;
  padding: auto;
}
.btn-pri {
  border-radius: 10px;
  height: 40px !important;
  width: 100px !important;
}
.btn-search {
  border-radius: 10px;
  height: 40px !important;
}
</style>
