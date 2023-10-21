import React from "react";
import { styled } from "styled-components";

const Coaches = () => {
  return (
    <DIV>
      <section id="cards">
        <div className="container py-2">
          <div className="row">
            <div className="col-xl-4 col-md-6 mb-4 pt-5">
              <div className="card shadow-sm border-0">
                <div className="card-body">
                  <div className="user-picture">
                    <img
                      src="https://images.unsplash.com/photo-1579758629938-03607ccdbaba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                      className="shadow-sm"
                      height="140"
                      width="180"
                    />
                  </div>
                  <div className="user-content">
                    <h5 className="text-capitalize user-name">Michael Roberts</h5>
                    <p className=" text-capitalize text-muted small blockquote-footer mt-3">
                      Exp :- 8 yrs
                    </p>
                    <div className="small">
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star-half-alt text-warning"></i>
                    </div>
                    <p className="small text-muted mb-0 mt-3">
                      Empowering clients to achieve their fitness goals through
                      progressive training. Expertise in Strength training,
                      Cardio
                    </p>
                  </div>
                  <p
                    className="small text-muted mb-0"
                    style={{ fontWeight: "bold" }}
                  >
                    Email: jessica.anderson@gmail.com
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 mb-4 pt-5">
              <div className="card shadow-sm border-0">
                <div className="card-body">
                  <div className="user-picture">
                    <img
                      src="https://plus.unsplash.com/premium_photo-1681492529719-a1d3d8cc498a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
                      className="shadow-sm"
                      height="140"
                      width="180"
                    />
                  </div>
                  <div className="user-content">
                    <h5 className="text-capitalize user-name">Sarah Johnson</h5>
                    <p className=" text-capitalize text-muted small blockquote-footer mt-3">
                      Exp :- 6 yrs
                    </p>
                    <div className="small">
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star-text-warning"></i>
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star text-light"></i>
                    </div>
                    <p className="small text-muted mb-0 mt-3">
                      Combining science-based strategies with mindfulness
                      practices and hard work. Expertise in Weight loss,
                      Aerobics
                    </p>
                  </div>
                  <p
                    className="small text-muted mb-0"
                    style={{ fontWeight: "bold" }}
                  >
                    Email: jessica.anderson@gmail.com
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 mb-4 pt-5">
              <div className="card shadow-sm border-0">
                <div className="card-body">
                  <div className="user-picture">
                    <img
                      src="https://images.unsplash.com/photo-1571019613531-fbeaeb790845?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80"
                      className="shadow-sm"
                      height="140"
                      width="180"
                    />
                  </div>
                  <div className="user-content">
                    <h5 className="text-capitalize user-name">Jessica Anderson</h5>
                    <p className=" text-capitalize text-muted small blockquote-footer mt-3">
                      Exp :- 5 yrs
                    </p>
                    <div className="small">
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star-half-alt text-warning"></i>
                      <i className="fas fa-star text-light"></i>
                    </div>
                    <p className="small text-muted mb-0 mt-3">
                      Holistic approach to health, focusing on balanced
                      nutrition and Diet. Expertise in Cardiovascular fitness
                      improvement & Muscle gain.
                    </p>
                  </div>
                  <p
                    className="small text-muted mb-0"
                    style={{ fontWeight: "bold" }}
                  >
                    Email: jessica.anderson@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DIV>
  );
};

export default Coaches;

const DIV = styled.div`
  /* ==== Cards using Bootstrap === */

  #cards .card {
    border-radius: 20px;
    min-height: 100%;
  }

  #cards .heading-border {
    position: absolute;
    width: 100%;
    top: 60%;
  }

  #cards .card .user-picture img {
    position: absolute;
    top: -20%;
    right: -5%;
    background: #f8f9fa !important;
    padding: 10px;
  }

  #cards .card .user-content .user-name {
    margin-right: 150px;
  }
`;
