<template>
  <CRow>
    <CCol :xs="12">
      <div>
        <CIcon :icon="cliNotes" />
        <h1 class="mt-12">보도자료</h1>
      </div>
      <CCard class="mb-4">
        <CCardHeader style="height: 1.5rem"></CCardHeader>
        <CCardBody>
          <CTable caption="top" hover responsive="xl">
            <CTableCaption class="mb-1">보도자료를 입력하세요</CTableCaption>
            <CTableHead color="light">
              <CTableRow>
                <CTableHeaderCell scope="col">#</CTableHeaderCell>
                <CTableHeaderCell scope="col">썸네일이미지</CTableHeaderCell>
                <CTableHeaderCell scope="col">제목</CTableHeaderCell>
                <CTableHeaderCell scope="col">등록일</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              <CTableRow>
                <CTableHeaderCell scope="row">1</CTableHeaderCell>
                <CTableDataCell width="80" height="61">
                  <CImage rounded :src="VueImg" />
                </CTableDataCell>
                <CTableDataCell>Mark</CTableDataCell>
                <CTableDataCell>Otto</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row">2</CTableHeaderCell>
                <CTableDataCell>
                  <CImage rounded :src="VueImg2" width="80" height="61" />
                </CTableDataCell>
                <CTableDataCell>
                  Content Content Content Content Content Content Content
                  Content Content Content Content Content Content Content
                </CTableDataCell>
                <CTableDataCell>Thornton</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row">3</CTableHeaderCell>
                <CTableDataCell>Image</CTableDataCell>
                <CTableDataCell>Larry the Bird</CTableDataCell>
                <CTableDataCell>Thornton</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row">4</CTableHeaderCell>
                <CTableDataCell>Image</CTableDataCell>
                <CTableDataCell>Jacob</CTableDataCell>
                <CTableDataCell>Thornton</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row">5</CTableHeaderCell>
                <CTableDataCell>Image</CTableDataCell>
                <CTableDataCell>Larry the Bird</CTableDataCell>
                <CTableDataCell>Thornton</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row">6</CTableHeaderCell>
                <CTableDataCell>Image</CTableDataCell>
                <CTableDataCell>Jacob</CTableDataCell>
                <CTableDataCell>Thornton</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row">7</CTableHeaderCell>
                <CTableDataCell>Image</CTableDataCell>
                <CTableDataCell>Larry the Bird</CTableDataCell>
                <CTableDataCell>Thornton</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row">8</CTableHeaderCell>
                <CTableDataCell>Image</CTableDataCell>
                <CTableDataCell>Jacob</CTableDataCell>
                <CTableDataCell>Thornton</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row">9</CTableHeaderCell>
                <CTableDataCell>Image</CTableDataCell>
                <CTableDataCell>Larry the Bird</CTableDataCell>
                <CTableDataCell>Thornton</CTableDataCell>
              </CTableRow>
            </CTableBody>
          </CTable>
          <CPagination
            align="center"
            size="sm"
            aria-label="Page navigation example"
          >
            <CPaginationItem aria-label="Previous" href="#">
              <span aria-hidden="true">&laquo;</span>
            </CPaginationItem>
            <CPaginationItem href="#" active>1</CPaginationItem>
            <CPaginationItem href="#">2</CPaginationItem>
            <CPaginationItem aria-label="Next" href="#">
              <span aria-hidden="true">&raquo;</span>
            </CPaginationItem>
          </CPagination>
        </CCardBody>
        <CCardFooter style="height: 4.5rem">
          <CRow class="text-end">
            <CCol>
              <CButton
                class="mt-2"
                size="sm"
                component="a"
                color="light"
                href="/theme/test#/theme/test"
                role="button"
              >
                보도자료 등록하기
              </CButton>
            </CCol>
          </CRow>
        </CCardFooter>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
import VueImg from '@/assets/images/logo.png'
import VueImg2 from '@/assets/images/vue.jpg'
import { CIcon } from '@coreui/icons-vue'
import * as icon from '@coreui/icons'
export default {
  name: 'Test',
  components: {
    CIcon,
  },
  setup() {
    return {
      VueImg,
      VueImg2,
      icon,
    }
  },
}
</script>
