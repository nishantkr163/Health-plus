import React from 'react'

const AdminLoading = () => {
  return (
    <div style={{ marginTop : '10%' }}>
        <div className="spinner-container">
          <div style={{ borderTopColor: "black" }} className="spinner">
            <div style={{ borderTopColor: "black" }} className="spinner">
              <div style={{ borderTopColor: "black" }} className="spinner">
                <div style={{ borderTopColor: "black" }} className="spinner">
                  <div style={{ borderTopColor: "black" }} className="spinner">
                    <div
                      style={{ borderTopColor: "black" }}
                      className="spinner"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default AdminLoading