import React from 'react';

export const HeaderScreen = () => {
    return (
        <div className='header__corousel'>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner p-40">
                    <div className="carousel-item active">
                        <img src="https://www.nacionflix.com/__export/1596921516892/sites/debate/img/2020/08/08/en_dxnde_puedo_ver_la_pelxcula_de_los_osos_escandalosos_de_cartoon_netwo.png_1406494193.png" className="w-100 h-50 p-5" alt="..." />
                        <div className="carousel-caption d-none d-md-block bg-secondary bg-opacity-50 rounded-3">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    {/* <div className="carousel-item active">
                        <img src="https://juegosjuguetesycoleccionables.com/wp-content/uploads/2018/10/ESCANDALOSOS-GOOGLE.jpg" className="d-block w-100 img-fluid vh" alt="..." />
                        <div className="carousel-caption d-none d-md-block bg-secondary bg-opacity-50 rounded-3">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div> */}
                    {/* 
                    <div className="carousel-item">
                        <img src="https://www.quever.news/u/fotografias/m/2022/1/4/f608x342-21377_51100_0.jpg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block bg-secondary bg-opacity-50 rounded-3">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div> */}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}