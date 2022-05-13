<template>
  <CRow>
    <CCol :xs="12">
      <div>
        <h1 class="mt-12">공지사항</h1>
      </div>
      <CCard class="mb-4">
        <CCardHeader style="height: 1.5rem"></CCardHeader>
        <CCardBody>
          <CTable caption="top" hover responsive="xl">
            <CTableCaption class="mb-1">공지사항을 입력하세요</CTableCaption>
            <CTableHead color="light">
              <CTableRow>
                <CTableHeaderCell scope="col">#</CTableHeaderCell>
                <CTableHeaderCell scope="col">제목</CTableHeaderCell>
                <CTableHeaderCell scope="col">등록일</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              <CTableRow>
                <CTableHeaderCell scope="row">1</CTableHeaderCell>
                <CTableDataCell>Mark</CTableDataCell>
                <CTableDataCell>Otto</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row">2</CTableHeaderCell>
                <CTableDataCell>Jacob</CTableDataCell>
                <CTableDataCell>Thornton</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row">3</CTableHeaderCell>
                <CTableDataCell>Larry the Bird</CTableDataCell>
                <CTableDataCell>Thornton</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row">4</CTableHeaderCell>
                <CTableDataCell>Jacob</CTableDataCell>
                <CTableDataCell>Thornton</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row">5</CTableHeaderCell>
                <CTableDataCell>Larry the Bird</CTableDataCell>
                <CTableDataCell>Thornton</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row">6</CTableHeaderCell>
                <CTableDataCell>Jacob</CTableDataCell>
                <CTableDataCell>Thornton</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row">7</CTableHeaderCell>
                <CTableDataCell>Larry the Bird</CTableDataCell>
                <CTableDataCell>Thornton</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row">8</CTableHeaderCell>
                <CTableDataCell>Jacob</CTableDataCell>
                <CTableDataCell>Thornton</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row">9</CTableHeaderCell>
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
                공지사항 등록하기
              </CButton>
            </CCol>
          </CRow>
        </CCardFooter>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
export default {
  name: 'Test',
}
</script>
