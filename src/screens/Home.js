import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'


export default function Home() {


  const [search, setSearch] = useState("")

  const [foodCat, setFoodcat] = useState([])
  const [fooditem, setFoodItem] = useState([])

  const loadData = async () => {
    // let response = await fetch("http://localhost:5000/api/foodData", {
    let response = await fetch("https://favfood.onrender.com/api/foodData", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      }


    });
    response = await response.json();
    // console.log(response[0], response[1]);
    setFoodItem(response[0])
    setFoodcat(response[1])
  }

  useEffect(() => {
    loadData();
  }, [])





  return (
    <>
      <div>
        <Navbar></Navbar>

      </div>
      <div>
      <div id="carouselExampleFade" className="carousel slide carousel-fade" style={{objectFit: "contain !important"}}>
                <div className="carousel-inner" id='carousel'>
                    <div className='carousel-caption'>
                        <nav className="navbar bg-body-tertiary">
                            <div className="container-fluid" style={{zIndex: "99"}}>
                                <div className="d-flex justify-content-center"  role="search">
                                    <input className="form-control me-2"  id='search' value={search} onChange={(e)=>{setSearch(e.target.value)}} style={{width:'800px'}} type="search" placeholder="Search" aria-label="Search"/>
                                        {/* <button className="btn btn-outline-success text-white" type="submit">Search</button> */}
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div className="carousel-item active">
                        <img src="https://source.unsplash.com/random/300×300/?burger" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />

                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/300×300/?pastry" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/300×300/?barbeque" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />

                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

      </div>
      <div>

      </div>
      <div className='container'>
        {
          foodCat !== []
            ? foodCat.map((data) => {
              return (
                <div className='row mb-3'>
                  <div key={data._id} className='fs-3 m-3'> {data.CategoryName} </div>
                  <hr />
                  {
                    fooditem.filter((item) =>
                      (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLowerCase())))
                      .map(filterItem => {
                        return (
                          <div key={filterItem._id} className='col-12 col-md-6 col-lg-3'>
                            <Card
                            //  foodName={filterItem.name}
                            foodItem = {filterItem}
                            options={filterItem.options[0]}
                            // imgSrc={filterItem.img}
                            ></Card>
                          </div>
                        )
                      })
                  }
                </div>
              )
            }) : <div> ##### </div>
        }


      </div>



      <Footer></Footer>


    </>
  )
}
