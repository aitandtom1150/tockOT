<template>
    <v-container fluid class="pa-0">
        <v-row no-gutters>
           
            <!-- MAIN CONTENT -->
            <v-col cols="12" md="8" class="pa-6 main-bg">
                <v-breadcrumbs class="px-0 mb-2" :items="breadcrumbs" />

                <h2 class="font-weight-bold mb-4">ระบบลงเวลางาน</h2>

                <v-card class="pa-4">
                    <!-- หัวการ์ด -->
                    <div class="d-flex justify-space-between align-center mb-4 flex-wrap">
                        <div>
                            <v-btn depressed disabled 
                                class="px-12"
                                style="margin-top: 5px; margin-bottom: 20px; margin-left: 5px;"
                            >
                                ส่งคำขอ
                            </v-btn>
                            <h3 class="font-weight-bold mb-1">
                                รายการเวลาเข้างาน {{ attendanceRecords.length }} รายการ
                            </h3>
                            <div class="grey--text text--darken-1">
                                เลือกและจัดการคำขอเวลาเข้างานของคุณ
                            </div>
                        </div>

                        <v-btn color="primary" depressed class="mt-3 mt-md-0" @click="onAdd">
                            เพิ่มคำขอช่วงเวลา
                        </v-btn>
                    </div>

                    <v-divider class="mb-4" />

                    <!-- เลือกทั้งหมด -->
                    <v-checkbox v-model="selectAll" label="เลือกทั้งหมด" hide-details class="mb-2"
                        @change="toggleSelectAll" />

                    <!-- ถ้าไม่มีรายการ -->
                    <v-alert v-if="!attendanceRecords.length" type="info" text>
                        ยังไม่มีรายการเวลาเข้างาน
                    </v-alert>

                    <!-- รายการเวลาเข้างาน -->
                    <v-card v-for="item in attendanceRecords" :key="item.id" outlined class="mb-3">
                        <v-card-text class="py-3">
                            <v-row no-gutters align="center">
                                <v-col cols="12" md="1" class="d-flex align-center">
                                    <v-checkbox v-model="item.selected" hide-details />
                                </v-col>

                                <v-col cols="12" md="8">
                                    <div class="mb-1">
                                        <span class="font-weight-bold">วันที่ : </span>
                                        {{ item.dateText }}
                                    </div>
                                    <div class="mb-1">
                                        <span class="font-weight-bold">สถานะ : </span>
                                        {{ item.status || '-' }}
                                    </div>
                                    <div>
                                        <span class="font-weight-bold">เข้างาน : </span>
                                        {{ item.checkIn }}
                                        <span class="ml-4 font-weight-bold">ออกงาน : </span>
                                        {{ item.checkOut }}
                                    </div>
                                </v-col>

                                <v-col cols="12" md="3" class="text-right mt-3 mt-md-0">
                                    <v-btn small outlined color="primary" @click="onEdit(item)">
                                        <v-icon left small>mdi-pencil</v-icon>
                                        แก้ไขคำขอช่วงเวลา
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-card>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'AttendancePage',
    data() {
        return {
            selectAll: false,

            breadcrumbs: [
                { text: 'ข้อความ', disabled: false, href: '#' },
                { text: 'ข้อความ', disabled: false, href: '#' },
                { text: 'เวลางาน', disabled: true }
            ],
            attendanceRecords: [
                {
                    id: 1,
                    dateText: 'จ. 26 ก.ย. 2565',
                    status: '-',
                    checkIn: '26 กันยายน 2565 08.30 น.',
                    checkOut: '26 กันยายน 2565 17.30 น.',
                    selected: false
                },
                {
                    id: 2,
                    dateText: 'อ. 27 ก.ย. 2565',
                    status: '-',
                    checkIn: '27 กันยายน 2565 08.30 น.',
                    checkOut: '27 กันยายน 2565 17.30 น.',
                    selected: false
                },
                {
                    id: 3,
                    dateText: 'พ. 28 ก.ย. 2565',
                    status: '-',
                    checkIn: '28 กันยายน 2565 08.30 น.',
                    checkOut: '28 กันยายน 2565 17.30 น.',
                    selected: false
                }
            ]
        }
    },
    methods: {
        toggleSelectAll() {
            this.attendanceRecords.forEach(item => {
                item.selected = this.selectAll
            })
        },
        onAdd() {
            // ไว้ต่อกับ dialog / route อื่นทีหลัง
            // ตอนนี้แค่ log ไว้ให้
            console.log('เพิ่มคำขอช่วงเวลา')
        },
        onEdit(item) {
            console.log('แก้ไขรายการ', item)
        }
    }
}
</script>

<style scoped>
.main-bg {
    background-color: #f5f7fb;
    min-height: 100vh;
}

.sidebar-elevated {
    background-color: #ffffff;
    border-right: 1px solid #e0e0e0;
    min-height: 100vh;
}

.subtitle {
    font-size: 0.8rem;
    color: #78909c;
}

.active-item {
    background-color: #e3f2fd;
}

.active-item .v-list-item-title {
    font-weight: 600;
}
</style>
