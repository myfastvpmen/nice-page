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
              <div className="cui__utils__heading mb-0">
                <strong>안드로이드 프로그램</strong>
              </div>
              <div className="text-muted">
                <Button
                  type="primary"
                  className="mr-3 mb-3"
                  onClick={e => {
                    e.preventDefault()
                    window.open('https://rb.gy/sqy64l', '_blank')
                  }}
                >
                  다운로드
                </Button>
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
              Q1. 업데이트 하는법<p>asdfasdf</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardBeta
