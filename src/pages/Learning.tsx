import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import Footer from '../Component/Footer'
import Header from '../Component/Header'
import { getCategoryList } from '../features/Slide/category/CategorySlide'



const Learning = () => {
    const categories = useAppSelector(item => item.category.value)
    const dispatch = useAppDispatch()
    console.log("categories", categories);


    useEffect(() => {
        dispatch(getCategoryList())
    }, [])




    return (
        <div>

            <div>
                <Header />
                <section className="content__learning">
                    <h2 className="title_learning">Chủ đề cho bạn</h2>
                    <div className="learning__box">
                        <div className="box__list__learning">
                            {categories?.map((item: any, index) => {
                                return <div className="item__list__learning">
                                    <Link to={`detailLearning/${item._id}`} >
                                        <a>
                                            <img className='h-40 w-fit ' src={item.image} />
                                        </a>
                                    </Link>
                                    <h3 className="title__tiem__learning">{item.title}</h3>
                                </div>
                            })}
                            <div className="item__list__learning">
                                <a >
                                    <img src="./../image/family.PNG" />
                                </a>
                                <h3 className="title__tiem__learning">Gia đình</h3>
                            </div>
                            <div className="item__list__learning">
                                <a >
                                    <img src="./../image/info.PNG" />
                                </a>
                                <h3 className="title__tiem__learning">Giới thiệu</h3>
                            </div>
                            <div className="item__list__learning">
                                <a >
                                    <img src="./../image/hi.PNG" />
                                </a>
                                <h3 className="title__tiem__learning">Chào hỏi</h3>
                            </div>
                            <div className="item__list__learning">
                                <a >
                                    <img src="./../image/shopping.PNG" />
                                </a>
                                <h3 className="title__tiem__learning">Mua sắm</h3>
                            </div>
                            <div className="item__list__learning__key">
                                <div className="col">
                                    <a >
                                        <img src="./../image/shopping.PNG" />
                                    </a>
                                    <h3 className="title__tiem__learning">Mua sắm</h3>
                                </div>
                                <div className="item__lock_learning">
                                    <button><i className="fa-solid fa-lock" /></button>
                                </div>
                            </div>
                            <div className="item__list__learning__key">
                                <div className="col">
                                    <a >
                                        <img src="./../image/shopping.PNG" />
                                    </a>
                                    <h3 className="title__tiem__learning">Mua sắm</h3>
                                </div>
                                <div className="item__lock_learning">
                                    <button><i className="fa-solid fa-lock" /></button>
                                </div>
                            </div>
                            <div className="item__list__learning__key">
                                <div className="col">
                                    <a>
                                        <img src="./../image/shopping.PNG" />
                                    </a>
                                    <h3 className="title__tiem__learning">Mua sắm</h3>
                                </div>
                                <div className="item__lock_learning">
                                    <button><i className="fa-solid fa-lock" /></button>
                                </div>
                            </div>
                            <div className="item__list__learning__key">
                                <div className="col">
                                    <a>
                                        <img src="./../image/shopping.PNG" />
                                    </a>
                                    <h3 className="title__tiem__learning">Mua sắm</h3>
                                </div>
                                <div className="item__lock_learning">
                                    <button><i className="fa-solid fa-lock" /></button>
                                </div>
                            </div>
                        </div>
                        <div className="btn__display_item">
                            <button className='btn__see__more'> Xem thêm bài học</button>
                        </div>
                    </div>
                </section>
            </div>


            <Footer />
        </div>
    )
}

export default Learning