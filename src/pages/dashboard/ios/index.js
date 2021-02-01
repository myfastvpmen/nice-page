import React from 'react'
import { Helmet } from 'react-helmet'
import { Button } from 'antd'

const DashboardBeta = () => {
  return (
    <div>
      <Helmet title="iOS download install" />
      <div className="row">
        <div className="col-lg-12 col-xl-6">
          <div className="card">
            <div className="card-header">
              <div className="cui__utils__heading mb-0">
                <strong>NICE VPN Download Center</strong>
              </div>
            </div>
            <div className="card-body">
              <div className="cui__utils__heading mb-10">
                <strong>아이폰/아이패드 프로그램 다운로드</strong>
              </div>
              <div>
                <div className="rounded overflow-hidden position-relative">
                  <img
                    className="img-fluid"
                    src="https://ac.yiaway.com/ios/shadowrocket.png"
                    alt="Lion"
                  />
                </div>
              </div>
              <div className="text-muted mt-10">
                <p />
                <p>Shdowroket 어플이 이미 있으신가요?</p>
                <p>예 : 바로 설치메뉴얼에 따라 설정하시면 됩니다.</p>
                <p>
                  아니요 : 결제가 가능한 한국계정 또는 홍콩이나 미국등 중국이외의 계정이 있으신가요?
                </p>
                <p>예 : Shdowroket을 검색하여 본인부담 구입(2.99달러)</p>
                <p>아니요 : 관리자에게 문의</p>
                <p>무료다운은 안돼나요? : 자주 묻는 질문참조</p>
              </div>
              <div className="cui__utils__heading mb-0">
                <strong>안드로이드 설치 메뉴얼 PDF</strong>
              </div>
              <div className="text-muted">
                <Button
                  type="primary"
                  className="mr-3 mb-3"
                  onClick={e => {
                    e.preventDefault()
                    window.open('https://google.com', '_blank')
                  }}
                >
                  다운로드
                </Button>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <div className="cui__utils__heading mb-0">
                <strong>자주묻는 질문</strong>
              </div>
            </div>
            <div className="card-body">
              Q1. 어플은 왜 본인부담인가요? 무료다운은 안돼나요?
              <div className="text-muted">
                <p>애플 보안 정책상 안전하고 빠른 이용을 위해 어플을 구입하셔야 합니다.</p>
                <p>
                  개인정보등 노출에 민감하지 않으시다면, 계정변경등 편법을 통해 무료로 다운이
                  가능합니다. 관리자에게 문의
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardBeta
