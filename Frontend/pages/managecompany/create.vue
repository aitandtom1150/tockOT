<template>
  <v-container>
    <v-row class="mb-1">
      <v-col cols="auto">
        <a @click="routePath()" class="text-link">
          <v-icon>mdi-chevron-left</v-icon>
          ลงทะเบียนธุรกิจ
        </a>
      </v-col>
    </v-row>
    <validation-observer ref="observerInfoCompany" v-slot="{ invalid, handleSubmit }">
      <v-form @submit.prevent="handleSubmit(createCompany)">
        <!-- ข้อมูลธุรกิจ -->
        <v-card flat class="card-company pa-5">
          <v-row class="pb-2 pl-1">
            <v-col>
              <p class="text-head">ข้อมูลธุรกิจ</p>
            </v-col>
          </v-row>
          <v-divider class="pb-3"></v-divider>
          <v-row class="px-1">
            <v-col>
              <span class="text-16">รายละเอียดบริษัท</span>&nbsp;<span class="text-sub-14">( โปรดกรอกข้อมูลที่มีเครื่องหมาย<span style="color: red;"> * </span>ให้ครบถ้วน )</span>
            </v-col>
          </v-row>

          <v-row no-gutters class="px-1 mt-2">
            <!-- detail -->
            <v-col cols="12" md="8">
              <v-row no-gutters class="mt-1">
                <v-col md="6" cols="12">
                  <v-col class="py-0 pl-0">
                    ประเภทนิติบุคคล ภาษาไทย <span style="color: red;">*</span>
                  </v-col>
                  <v-col class="py-0 pl-0">
                    <validation-provider v-slot="{ errors }" rules="required">
                      <v-autocomplete
                        v-model="accountSelectTypeTH"
                        :error-messages="errors"
                        :items="accountTypeItemsTH"
                        dense
                        outlined
                        placeholder="เลือกประเภทนิติบุคคล ภาษาไทย"
                      />
                    </validation-provider>
                  </v-col>
                </v-col>
                <v-col v-if="accountOther" md="6" cols="12">
                  <v-col class="py-0 pl-0">
                    ระบุประเภทนิติบุคคล ภาษาไทย <span style="color: red;">*</span>
                  </v-col>
                  <v-col class="py-0 pl-0">
                    <validation-provider v-slot="{ errors }" rules="required|thaiOnly">
                      <v-text-field
                        v-model="accountTypeTH"
                        :error-messages="errors"
                        dense
                        outlined
                        placeholder="ระบุประเภทนิติบุคคล ภาษาไทย"
                      />
                    </validation-provider>
                  </v-col>
                </v-col>
                
                <v-col md="6" cols="12">
                  <v-col class="py-0 pl-0">
                    ประเภทนิติบุคคล ภาษาอังกฤษ <span style="color: red;">*</span>
                  </v-col>
                  <v-col class="py-0 pl-0">
                    <validation-provider v-slot="{ errors }" rules="required">
                      <v-autocomplete
                        v-model="accountSelectTypeEN"
                        :error-messages="errors"
                        :items="accountTypeItemsEN"
                        dense
                        outlined
                        placeholder="เลือกประเภทนิติบุคคล ภาษาอังกฤษ"
                      />
                    </validation-provider>
                  </v-col>
                </v-col>
                <v-col v-if="accountOther" md="6" cols="12">
                  <v-col class="py-0 pl-0">
                    ระบุประเภทนิติบุคคล ภาษาอังกฤษ <span style="color: red;">*</span>
                  </v-col>
                  <v-col class="py-0 pl-0">
                    <validation-provider v-slot="{ errors }" rules="required|englishOnly">
                      <v-text-field
                        v-model="accountTypeEN"
                        :error-messages="errors"
                        dense
                        outlined
                        placeholder="ระบุประเภทนิติบุคคล ภาษาอังกฤษ"
                      />
                    </validation-provider>
                  </v-col>
                </v-col>

                <v-col md="6" cols="12">
                  <v-col class="py-0 pl-0">
                    ชื่อเต็มบริษัท ภาษาไทย <span style="color: red;">*</span>
                  </v-col>
                  <v-col class="py-0 pl-0">
                    <validation-provider v-slot="{ errors }" rules="required|thaiOnly">
                      <v-text-field
                        v-model="companyNameTH"
                        :error-messages="errors"
                        dense
                        outlined
                        placeholder="ระบุชื่อเต็มบริษัท ภาษาไทย"
                      />
                    </validation-provider>
                  </v-col>
                </v-col>
                <v-col md="6" cols="12">
                  <v-col class="py-0 pl-0">
                    ชื่อย่อบริษัท ภาษาไทย <span class="text-sub-14">( ไม่จำเป็นต้องกรอก )</span>
                  </v-col>
                  <v-col class="py-0 pl-0">
                    <v-text-field
                      v-model="companyShortNameTH"
                      dense
                      outlined
                      placeholder="ระบุชื่อย่อบริษัท ภาษาไทย"
                    />
                  </v-col>
                </v-col>
                <v-col md="6" cols="12">
                  <v-col class="py-0 pl-0">
                    ชื่อเต็มบริษัท ภาษาอังกฤษ <span style="color: red;">*</span>
                  </v-col>
                  <v-col class="py-0 pl-0">
                    <validation-provider v-slot="{ errors }" rules="required|englishOnly">
                      <v-text-field
                        v-model="companyNameEN"
                        :error-messages="errors"
                        dense
                        outlined
                        placeholder="ระบุชื่อเต็มบริษัท ภาษาอังกฤษ"
                      />
                    </validation-provider>
                  </v-col>
                </v-col>
                <v-col md="6" cols="12">
                  <v-col class="py-0 pl-0">
                    ชื่อย่อบริษัท ภาษาอังกฤษ <span class="text-sub-14">( ไม่จำเป็นต้องกรอก )</span>
                  </v-col>
                  <v-col class="py-0 pl-0">
                    <v-text-field
                      v-model="companyShortNameEN"
                      dense
                      outlined
                      placeholder="ระบุชื่อย่อบริษัท ภาษาอังกฤษ"
                    />
                  </v-col>
                </v-col>
                <v-col md="6" cols="12">
                  <v-col class="py-0 pl-0">
                    ชื่อสำหรับแสดงบนเอกสาร ภาษาไทย 
                  </v-col>
                  <v-col class="py-0 pl-0">
                    <v-text-field
                      v-model="companyNameTaxTH"
                      dense
                      filled
                      outlined
                      disabled
                      placeholder="ระบุชื่อสำหรับแสดงบนเอกสาร ภาษาไทย"
                    />
                  </v-col>
                </v-col>
                <v-col md="6" cols="12">
                  <v-col class="py-0 pl-0">
                    ชื่อสำหรับแสดงบนเอกสาร ภาษาอังกฤษ
                  </v-col>
                  <v-col class="py-0 pl-0">
                    <v-text-field
                      v-model="companyNameTaxEN"
                      dense
                      filled
                      outlined
                      disabled
                      placeholder="ระบุชื่อสำหรับแสดงบนเอกสาร ภาษาอังกฤษ"
                    />
                  </v-col>
                </v-col>
              </v-row>
            </v-col>
            <!-- img -->
            <v-col cols="12" md="4">
              <v-row no-gutters justify="center">
                <v-col cols="auto">
                  <span class="text-sub-14">รูปเครื่องหมายการค้าหรือโลโก้</span>
                </v-col>
              </v-row>
              <v-row no-gutters justify="center">
                <v-col cols="auto">
                  <avatar-upload class="my-5" v-model="profileImage"></avatar-upload>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card>
        <!-- ข้อมูลที่อยู่บริษัท -->
        <v-card flat class="card-company pa-5 mt-4">
          <v-row class="pb-2 pl-1">
            <v-col>
              <span class="text-head">ข้อมูลที่อยู่บริษัท</span>&nbsp;<span class="text-sub-14">( โปรดกรอกข้อมูลที่มีเครื่องหมาย<span style="color: red;"> * </span>ให้ครบถ้วน )</span>
            </v-col>
          </v-row>
          <v-divider class="pb-3"></v-divider>
          <v-row no-gutters class="px-1 mt-2">
            <v-col md="4" cols="12">
              <v-col class="py-0 pl-0">
                ที่อยู่ <span style="color: red;">*</span>
              </v-col>
              <v-col class="py-0 pl-0">
                <validation-provider v-slot="{ errors }" rules="required">
                  <v-text-field
                    v-model="addressCompany.house_no"
                    :error-messages="errors"
                    dense
                    outlined
                    placeholder="ระบุบ้านเลขที่"
                  />
                </validation-provider>
              </v-col>
            </v-col>
            <v-col md="4" cols="12">
              <v-col class="py-0 pl-0">
                เลขที่ห้อง <span style="color: red;">*</span>
              </v-col>
              <v-col class="py-0 pl-0">
                <validation-provider v-slot="{ errors }" rules="required">
                  <v-text-field
                    v-model="addressCompany.house_no"
                    :error-messages="errors"
                    dense
                    outlined
                    placeholder="ระบุเลขที่ห้อง"
                  />
                </validation-provider>
              </v-col>
            </v-col>
            <v-col md="4" cols="12">
              <v-col class="py-0 pl-0">
                อาคาร, ชั้นที่
              </v-col>
              <v-col class="py-0 pl-0">
                <validation-provider v-slot="{ errors }" rules="required">
                  <v-text-field
                    v-model="addressCompany.house_no"
                    :error-messages="errors"
                    dense
                    outlined
                    placeholder="ระบุอาคาร, ชั้นที่"
                  />
                </validation-provider>
              </v-col>
            </v-col>
            <v-col md="4" cols="12">
              <v-col class="py-0 pl-0">
                หมู่บ้าน
              </v-col>
              <v-col class="py-0 pl-0">
                <validation-provider v-slot="{ errors }" rules="required">
                  <v-text-field
                    v-model="addressCompany.house_no"
                    :error-messages="errors"
                    dense
                    outlined
                    placeholder="ระบุหมู่บ้าน"
                  />
                </validation-provider>
              </v-col>
            </v-col>
            <v-col md="4" cols="12">
              <v-col class="py-0 pl-0">
                หมู่ที่
              </v-col>
              <v-col class="py-0 pl-0">
                <validation-provider v-slot="{ errors }" rules="required">
                  <v-text-field
                    v-model="addressCompany.house_no"
                    :error-messages="errors"
                    dense
                    outlined
                    placeholder="ระบุหมู่ที่"
                  />
                </validation-provider>
              </v-col>
            </v-col>
            <v-col md="4" cols="12">
              <v-col class="py-0 pl-0">
                ตรอก/ซอย
              </v-col>
              <v-col class="py-0 pl-0">
                <validation-provider v-slot="{ errors }" rules="required">
                  <v-text-field
                    v-model="addressCompany.house_no"
                    :error-messages="errors"
                    dense
                    outlined
                    placeholder="ระบุตรอก/ซอย"
                  />
                </validation-provider>
              </v-col>
            </v-col>
            <v-col md="4" cols="12">
              <v-col class="py-0 pl-0">
                แยก
              </v-col>
              <v-col class="py-0 pl-0">
                <validation-provider v-slot="{ errors }" rules="required">
                  <v-text-field
                    v-model="addressCompany.house_no"
                    :error-messages="errors"
                    dense
                    outlined
                    placeholder="ระบุแยก"
                  />
                </validation-provider>
              </v-col>
            </v-col>
            <v-col md="4" cols="12">
              <v-col class="py-0 pl-0">
                ถนน
              </v-col>
              <v-col class="py-0 pl-0">
                <validation-provider v-slot="{ errors }" rules="required">
                  <v-text-field
                    v-model="addressCompany.house_no"
                    :error-messages="errors"
                    dense
                    outlined
                    placeholder="ระบุถนน"
                  />
                </validation-provider>
              </v-col>
            </v-col>
            <v-col md="4" cols="12">
              <v-col class="py-0 pl-0">
                จังหวัด<span style="color: red;">*</span>
              </v-col>
              <v-col class="py-0 pl-0">
                <validation-provider v-slot="{ errors }" rules="required">
                  <v-autocomplete
                    v-model="addressCompany.province"
                    :error-messages="errors"
                    :items="provinceItems"
                    dense
                    outlined
                    placeholder="เลือกจังหวัด"
                  />
                </validation-provider>
              </v-col>
            </v-col>
            <v-col md="4" cols="12">
              <v-col class="py-0 pl-0">
                เขต/อำเภอ  <span style="color: red;">*</span>
              </v-col>
              <v-col class="py-0 pl-0">
                <validation-provider v-slot="{ errors }" rules="required|thaiOnly">
                  <v-autocomplete
                    v-model="addressCompany.amphoe"
                    :error-messages="errors"
                    :items="amphoeItems"
                    dense
                    outlined
                    placeholder="เลือกเขต/อำเภอ"
                  />
                </validation-provider>
              </v-col>
            </v-col>
            <v-col md="4" cols="12">
              <v-col class="py-0 pl-0">
                แขวง/ตำบล <span style="color: red;">*</span>
              </v-col>
              <v-col class="py-0 pl-0">
                <validation-provider v-slot="{ errors }" rules="required|englishOnly">
                  <v-autocomplete
                    v-model="addressCompany.tambon"
                    :error-messages="errors"
                    :items="tambonItems"
                    dense
                    outlined
                    placeholder="เลือกแขวง/ตำบล"
                  />
                </validation-provider>
              </v-col>
            </v-col>
            <v-col md="4" cols="12">
              <v-col class="py-0 pl-0">
                รหัสไปรษณีย์ <span style="color: red;">*</span>
              </v-col>
              <v-col class="py-0 pl-0">
                <validation-provider v-slot="{ errors }" rules="required">
                  <v-text-field
                    v-model="addressCompany.zipcode"
                    :error-messages="errors"
                    dense
                    filled
                    disabled
                    outlined
                    placeholder="กรอกรหัสไปรษณีย์"
                  />
                </validation-provider>
              </v-col>
            </v-col>
          </v-row>
        </v-card>

        <!-- ข้อมูลผู้เสียภาษี -->
        <v-card flat class="card-company pa-5 mt-4">
          <v-row class="pb-2 pl-1">
            <v-col>
              <span class="text-head">ข้อมูลผู้เสียภาษี</span>&nbsp;<span class="text-sub-14">(<span style="color: red;"> *</span>โปรดแนบเอกสารให้ตรงกับข้อมูลที่กรอก )</span>
            </v-col>
          </v-row>
          <v-divider class="pb-3"></v-divider>
           <v-row no-gutters class="px-1 mt-2">
            <v-col md="4" cols="12">
              <v-col class="py-0 pl-0">
                เลขที่ผู้เสียภาษีอากร <span style="color: red;">*</span>
              </v-col>
              <v-col class="py-0 pl-0">
                <validation-provider v-slot="{ errors }" rules="required">
                  <v-text-field
                    v-model="addressCompany.house_no"
                    :error-messages="errors"
                    dense
                    outlined
                    placeholder="ระบุบ้านเลขที่"
                  />
                </validation-provider>
              </v-col>
            </v-col>
            <v-col md="4" cols="12">
              <v-col class="py-0 pl-0">
                อีเมล <span style="color: red;">*</span>
              </v-col>
              <v-col class="py-0 pl-0">
                <validation-provider v-slot="{ errors }" rules="required">
                  <v-text-field
                    v-model="addressCompany.house_no"
                    :error-messages="errors"
                    dense
                    outlined
                    placeholder="ระบุบ้านเลขที่"
                  />
                </validation-provider>
              </v-col>
            </v-col>
            <v-col md="4" cols="12">
              <v-col class="py-0 pl-0">
                ภูมิภาค (Region) <span style="color: red;">*</span>
              </v-col>
              <v-col class="py-0 pl-0">
                <validation-provider v-slot="{ errors }" rules="required">
                  <v-autocomplete
                    v-model="addressCompany.province"
                    :error-messages="errors"
                    :items="provinceItems"
                    dense
                    outlined
                    placeholder="เลือกจังหวัด"
                  />
                </validation-provider>
              </v-col>
            </v-col>
            <v-col md="4" cols="12">
              <v-col class="py-0 pl-0">
                ชื่อสาขา <span style="color: red;">*</span>
              </v-col>
              <v-col class="py-0 pl-0">
                <validation-provider v-slot="{ errors }" rules="required">
                  <v-text-field
                    v-model="addressCompany.house_no"
                    :error-messages="errors"
                    dense
                    outlined
                    placeholder="ระบุบ้านเลขที่"
                  />
                </validation-provider>
              </v-col>
            </v-col>
            <v-col md="4" cols="12">
              <v-col class="py-0 pl-0">
                รหัสสาขา <span style="color: red;">*</span>
              </v-col>
              <v-col class="py-0 pl-0">
                <validation-provider v-slot="{ errors }" rules="required">
                  <v-text-field
                    v-model="addressCompany.house_no"
                    :error-messages="errors"
                    dense
                    outlined
                    placeholder="ระบุบ้านเลขที่"
                  />
                </validation-provider>
              </v-col>
            </v-col>
            <v-col md="4" cols="12">
              <v-col class="py-0 pl-0">
                เบอร์โทรศัพท์
              </v-col>
              <v-col class="py-0 pl-0">
                <v-text-field
                  v-model="addressCompany.house_no"
                  dense
                  outlined
                  placeholder="ระบุบ้านเลขที่"
                />
              </v-col>
            </v-col>
            <v-col md="4" cols="12">
              <v-col class="py-0 pl-0">
                เบอร์ติดต่อเจ้าหน้าที่
              </v-col>
              <v-col class="py-0 pl-0">
                <v-text-field
                  v-model="addressCompany.house_no"
                  dense
                  outlined
                  placeholder="ระบุบ้านเลขที่"
                />
              </v-col>
            </v-col>
            <v-col md="4" cols="12">
              <v-col class="py-0 pl-0">
                โทรสาร <span class="text-sub-14">(ไม่จำเป็น)</span>
              </v-col>
              <v-col class="py-0 pl-0">
                <v-text-field
                  v-model="addressCompany.house_no"
                  dense
                  outlined
                  placeholder="ระบุเบอร์โทรสาร"
                />
              </v-col>
            </v-col>
           </v-row>
        </v-card>

        <!-- เอกสารที่ต้องแนบ -->
        <v-card flat class="card-company pa-5 mt-4">
          <v-row class="pb-2 pl-1">
            <v-col>
              <span class="text-head">เอกสารที่ต้องแนบ</span>&nbsp;<span class="text-sub-14">(<span style="color: red;"> *</span>โปรดแนบเอกสารให้ตรงกับข้อมูลที่กรอก )</span>
            </v-col>
          </v-row>
          <v-divider class="pb-3"></v-divider>
          <v-row no-gutters class="px-1 mt-2">
            <v-col md="4" cols="12">
              <v-col class="py-0 pl-0">
                หนังสือรับรองนิติบุคคล <span class="text-sub-14"><span style="color: red;"> *</span>อัปโหลดได้เฉพาะไฟล์ .pdf เท่านั้น</span>
              </v-col>
              <v-col class="py-0 pl-0">
                <v-file-input
                  placeholder="อัปโหลดหนังสือรับรองนิติบุคคล"
                  outlined
                  dense
                  accept=".pdf,application/pdf"
                  @change="onFileSelectedRegistration"
                ></v-file-input>
              </v-col>
            </v-col>
          </v-row>
          <v-row no-gutters class="px-1">
            <v-col md="4" cols="12">
              <v-col class="py-0 pl-0">
                หนังสือมอบอำนาจ <span class="text-sub-14"><span style="color: red;"> *</span>อัปโหลดได้เฉพาะไฟล์ .pdf เท่านั้น</span>
              </v-col>
              <v-col class="py-0 pl-0">
                <v-file-input
                  placeholder="อัปโหลดหนังสือมอบอำนาจ"
                  outlined
                  dense
                  accept=".pdf,application/pdf"
                  @change="onFileSelectedAttorney"
                ></v-file-input>
              </v-col>
            </v-col>
          </v-row>
        </v-card>

        <!-- ข้อมูลผู้ดูแล -->
        <v-card flat class="card-company pa-5 mt-4">
          <v-row class="pb-2 pl-1">
            <v-col cols="auto">
              <span class="text-head">ข้อมูลผู้ดูแล</span>
            </v-col>
            <v-spacer></v-spacer>
            <v-col cols="auto">
              <v-btn color="primary" outlined class="btn-add" @click="dialogOwner = true">
                <v-icon small>mdi-plus-circle-outline</v-icon>&nbsp;เพิ่มผู้ดูแล
              </v-btn>
            </v-col>
          </v-row>
          <v-divider class="pb-3"></v-divider>
          <v-row no-gutters class="px-1 mt-2">
            <v-col>
              <v-data-table
                :headers="headers"
                hide-default-footer
                :items="owner"
                class="elevation-0 table-cus"
              >
                <template v-slot:item.no="{ item }">
                  {{owner.indexOf(item) + 1}}
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
            </v-col>
          </v-row>
        </v-card>

        <v-row no-gutters justify="center" class="mt-6">
          <v-col class="d-flex justify-end">
            <v-btn
              outlined
              color="primary"
              class="btn-primary"
              @click="cancel()"
            >ยกเลิก</v-btn>
            <v-btn
              :dark="!invalid"
              color="primary"
              class="btn-primary ml-3"
              type="submit"
              :disabled="invalid"
            >บันทึก</v-btn>
          </v-col>
        </v-row>
      </v-form>
    </validation-observer>

    <!-- dialog เพิ่มผู้ดูแล -->
    <v-dialog
      v-model="dialogOwner"
      width="600px"
    >
      <v-card class="card-owner">
        <v-container>
          <v-row class="mx-2 mt-2">
            <v-col class="auto">
              <p class="text-head">เพิ่มผู้ดูแล</p>
            </v-col>
            <v-spacer></v-spacer>
            <v-col cols="auto">
              <v-icon
                size="20"
                color="#333333"
                @click="cancelOwner"
              >
                mdi-close-thick
              </v-icon>
            </v-col>
          </v-row>
          <v-divider class="mt-2 mx-4"></v-divider>
          <v-row class="mx-2 mt-2 mb-0">
            <v-col class="pb-0">
              <v-autocomplete
                v-model="selectedUser"
                :items="itemsUser"
                item-value="accountId"
                :item-text="item => `${item.titleTh}${item.name} - ${item.emailOneId}`"
                placeholder="ค้นหาจากชื่อนามสกุล หรือ อีเมล One ID"
                append-icon="mdi-magnify"
                outlined
                dense
              ></v-autocomplete>
            </v-col>
          </v-row>
          <v-row no-gutters class="mx-5 mt-0">
            <v-col cols="12">
              <p>ผลการค้นหา</p>
            </v-col>
            <v-col cols="12" class="mt-1">
              <v-card v-if="!userData" flat class="card-search-emp">
                <v-row justify="center">
                  <v-col cols="auto" align-self="center">
                    <p>ไม่มีข้อมูล</p>
                  </v-col>
                </v-row>
              </v-card>
              <v-card v-else flat class="card-search">
                <v-row no-gutters>
                  <v-col cols="12">
                    <p>ชื่อ-สกุล</p>
                  </v-col>
                  <v-col cols="12" class="mt-2">
                    <p class="text-b">{{ userData.titleTh }}{{ userData.name }}</p>
                  </v-col>
                </v-row>
                <v-row no-gutters class="mt-3">
                  <v-col cols="12">
                    <p>อีเมล</p>
                  </v-col>
                  <v-col cols="12" class="mt-2">
                    <p class="text-b">{{ userData.emailOneId }}</p>
                  </v-col>
                </v-row>
                <v-row no-gutters class="mt-3">
                  <v-col cols="12">
                    <p>เบอร์โทรศัพท์</p>
                  </v-col>
                  <v-col cols="12" class="mt-2">
                    <p class="text-b">{{ userData.tel }}</p>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
          <v-row no-gutters class="mx-2 my-4" justify="center">
            <v-col cols="auto">
              <v-btn
                class="btn-dialog mx-2"
                color="primary"
                outlined
                @click="cancelOwner"
              >
                ยกเลิก
              </v-btn>
            </v-col>
            <v-col cols="auto">
              <v-btn
                class="btn-dialog mx-2"
                  color="primary"
                  :dark="!!selectedUser"
                  :disabled="!selectedUser"
                  @click="addOwner"
                >
                  ยืนยัน
                </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>
    <DialogReject ref="openDialogReject" :text-status="textStatus" @close="cancelOwner" />
  </v-container>
</template>

<script>
import AvatarUpload from "@/components/template/AvatarUpload.vue";
import DialogReject from '../../components/dialog/reject.vue'
export default {
  components: {
    AvatarUpload, DialogReject
  },
  data () {
    return {
      selectedUser: null,
      itemsUser: [{
        accountId: "123796589311",
        emailOneId: "panuphol.na@one.th",
        name: "ภาณุพล นฤสิงห์สำราญ",
        tel: "0631975812",
        titleTh: "นาย"
      }],
      dialogOwner: false,
      editedIndex: -1,
      profileImage: '', // base64 หรือ url ของรูป
      companyNameTH: '',
      companyShortNameTH: '',
      companyNameEN: '',
      companyShortNameEN: '',
      companyNameTaxTH: '',
      companyNameTaxEN: '',
      taxId: '',
      fileRegistration: null,
      fileRegistrationName: '',
      fileAttorney: null,
      fileAttorneyName: '',
      branch: '',
      branchType: '',
      branchCode: '',
      branchItems: [
        'สำนักงานใหญ่',
        'อื่นๆ'
      ],
      phoneNumber: '',
      businessType: '',
      businessTypeItems: [
        'การขนส่ง',
        'การตลาดออนไลน์',
        'การแพทย์',
        'เกษตร',
        'คอมพิวเตอร์และอุปกรณ์',
        'ค้าส่ง-ค้าปลีก',
        'เคมีภัณฑ์',
        'เครื่องจักรและอุปกรณ์เกี่ยวกับเครื่องจักร',
        'ที่ปรึกษา',
        'นำเข้า-ส่งออก',
        'บันเทิงและสันทนาการ',
        'ประกันชีวิตและประกันภัย',
        'พลาสติกและ บรรจุภัณฑ์',
        'ไฟฟ้าและอิเล็กทรอนิคส์',
        'ยานยนต์และชิ้นส่วนยานยนต์',
        'โรงแรมและการท่องเที่ยว',
        'วัสดุก่อสร้างและผลิตภัณฑ์',
        'เวชภัณฑ์และเครื่องสำอาง',
        'ศูนย์การค้า',
        'สถาบันการเงิน',
        'สถาบันการศึกษา',
        'สมาคม/ชมรม/มูลนิธิ',
        'สินค้าอุปโภคบริโภค',
        'สื่อสารและคมนาคม',
        'หน่วยงานราชการ',
        'อสังหาริมทรัพย์',
        'อุตสาหกรรม',
        'อื่นๆ'
      ],
      accountSelectTypeTH: '',
      accountTypeTH: '',
      accountTypeItemsTH: [
        'ห้างหุ้นส่วนสามัญ',
        'ห้างหุ้นส่วนจำกัด',
        'บริษัทจำกัด',
        'บริษัทมหาชนจำกัด',
        'นิติบุคคลอื่นๆ ภายใต้กฎหมายเฉพาะ'
      ],
      accountSelectTypeEN: '',
      accountTypeEN: '',
      accountTypeItemsEN: [
        'Ordinary Partnership',
        'Limited partnership',
        'Company limited',
        'Public Limited Company',
        'Other'
      ],
      accountOther: false,
      provinceItems: [],
      amphoeItems: [],
      tambonItems: [],
      addressCompany: {
        house_no: '',
        moo_no: '',
        building_name: '',
        street: '',
        soi: '',
        province: '',
        amphoe: '',
        tambon: '',
        zipcode: '',
        country: 'Thailand'
      },
      owner: [
        {
          name: 'จักรภัทร แสวงแก้ว',
          titleTh: "นาย",
          emailOneId: 'jakkapat.sa@one.th',
          tel: '0943287688',
          accountId: '12379658904',
          role: 'RA',
          _id: '60cadb75ecf68232741b7bf1'
        }
      ],
      headers: [
        { text: 'ลำดับ', align: 'start', sortable: false, value: 'no' },
        { text: 'ชื่อ-นามสกุล', align: 'start', sortable: false, value: 'name' },
        { text: 'อีเมล', align: 'start', sortable: false, value: 'emailOneId' },
        { text: 'เบอร์โทรศัพท์', align: 'start', sortable: false, value: 'tel' },
        { text: 'จัดการ', align: 'start', sortable: false, value: 'actions' }
      ],
      textStatus: {
        mainText: '',
        subText: '',
        code: ''
      },
    }
  },
  watch: {
    accountSelectTypeTH (val) {
      if (val == 'นิติบุคคลอื่นๆ ภายใต้กฎหมายเฉพาะ') {
        const index = this.accountTypeItemsTH.indexOf(val)
        this.accountSelectTypeEN = this.accountTypeItemsEN[index]
        this.accountTypeTH == ''
        this.accountTypeEN = ''
        this.accountOther = true
      } else {
        const index = this.accountTypeItemsTH.indexOf(val)
        this.accountSelectTypeEN = this.accountTypeItemsEN[index]
        this.accountTypeEN = this.accountTypeItemsEN[index]
        this.accountOther = false
      }
    },
    accountSelectTypeEN (val) {
      if (val == 'Other') {
        const index = this.accountTypeItemsEN.indexOf(val)
        this.accountSelectTypeTH = this.accountTypeItemsTH[index]
        this.accountTypeTH = ''
        this.accountTypeEN = ''
        this.accountOther = true
      } else {
        const index = this.accountTypeItemsEN.indexOf(val)
        this.accountSelectTypeTH = this.accountTypeItemsTH[index]
        this.accountTypeTH = this.accountTypeItemsTH[index]
        this.accountOther = false
      }
    },
    branchType (val) {
      if (val === 'สำนักงานใหญ่') {
        this.branchCode = '00001'
        this.branch = ''
      } else {
        this.branchCode = ''
        this.branch = ''
      }
    },
  },
  computed: {
    userData () {
      return this.itemsUser.find(u => u.accountId === this.selectedUser) || null
    }
  },
  methods: {
    onFileSelectedRegistration (file) {
      if (file) {
        this.fileRegistration = file
        this.fileRegistrationName = file.name
        console.log('เลือกไฟล์:', file.name)
      } else {
        // เคสตอนลบไฟล์ออก
        this.fileRegistration = null
        this.fileRegistrationName = ''
        console.log('ลบไฟล์ออกแล้ว')
      }
    },
    onFileSelectedAttorney (file) {
      if (file) {
      this.fileAttorney = file
      this.fileAttorneyName = file.name
      console.log('เลือกไฟล์:', file.name)
    } else {
      // เคสตอนลบไฟล์ออก
      this.fileAttorney = null
      this.fileAttorneyName = ''
      console.log('ลบไฟล์ออกแล้ว')
    }
    },
    routePath () {
      this.$router.push('/managecompany/')
    },
    createCompany () {
      console.log('company');
    },
    cancel () {
      alert('ต้องการยกเลิก')
    },
    getProvince () {

    },
    getaAmphoe () {

    },
    getTambon () {

    },
    editItem (item) {
      this.dialogOwner = true
      this.selectedUser = item.accountId
    },
    deleteItem (item) {
      this.editedIndex = this.owner.indexOf(item)
      this.owner.splice(this.editedIndex, 1)
    },
    addOwner () {
      const exists = this.owner.some(o => o.accountId === this.selectedUser)
      if (exists) {
        this.textStatus = {
          mainText: 'คุณได้เพิ่มพนักงานคนนี้แล้ว',
          subText: ''
        }
        this.$refs.openDialogReject.open()
        this.cancelOwner()
        return
      }
      this.owner.push(this.userData)
      this.dialogOwner = false
      this.selectedUser = null
    },
    cancelOwner () {
      console.log('ddd');
      this.dialogOwner = false
      this.selectedUser = null
    },
  }
}
</script>

<style scoped>
>>>.v-input__append-inner {
  margin-top: 11px !important;
}
>>>.v-data-table-header {
  background: #f6fafd;
}
.table-cus {
  border-radius: 10px;
  border: 1px solid rgb(229, 236, 238);
}
.text-head {
  font-size: 18px;
  font-weight: 700;
  color: #333333;
}
.text-link {
  color: #333333;
  font-weight: 700;
  font-size: 22px;
}
.text-16 {
  color: #333333;
  font-weight: 700;
  font-size: 16px;
}
.text-sub-14 {
  color: grey;
  font-size: 14px;
}
.text-b {
  color: #333333;
  font-weight: 500;
  font-size: 16px;
}
.text-sub {
  font-size: 18px;
  font-weight: 700;
  color: #0863B6;
}
.card-search-emp {
  height: 230px;
  background: #FAFAFA;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.card-search {
  height: 230px;
  background: #FAFAFA;
  border-radius: 10px;
  padding: 20px;
}
.card-add {
  background: #FAFAFA;
  border-radius: 24px;
  padding: 20px;
}
.card-company {
  border-radius: 24px;
  padding: auto;
}
.card-img {
  background: linear-gradient(90deg,#E6EFF7, #FFFFFF);
  border-radius: 16px;
}
.card-owner {
  border-radius: 16px;
}
.custom-card {
  color: #1b5dd6;
  background-color: #f5f9ff;
  border-radius: 32px;
  padding: 16px;
  margin-bottom: 16px;
}
.custom-img-icon {
  width: 30px;
  height: 30px;
  object-fit: contain;
}
.btn-add {
  border-radius: 10px;
}
.btn-dialog {
  border-radius: 10px;
  width: 80px;
  height: 40px !important;
}
.btn-primary {
  border-radius: 10px;
  width: 120px;
  height: 40px !important;
}
</style>
