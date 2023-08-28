import React from 'react'
import style from './Loading.module.css'

const Loading = () => {
  return (
    <div style={{
      padding : "90px"
    }} >
        <div className="spinner-container">
  <div className="spinner">
   <div className="spinner">
    <div className="spinner">
      <div className="spinner">
        <div className="spinner">
            <div className="spinner"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  </div>
  )
}

export default Loading