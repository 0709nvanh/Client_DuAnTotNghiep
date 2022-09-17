import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { detailCategory } from '../api/category';
import Footer from '../Component/Footer';
import Header from '../Component/Header';

const DetailLearning = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const { id }: any = useParams()
    const [speak, setSpeak] = useState()
    const [quiz, setQuiz] = useState()
    const [listenWrite, setListenWrite] = useState()

    useEffect(() => {
        const getQuiz = async () => {
            const { data } = await detailCategory(id)
            console.log(data);
        }
        getQuiz()
    }, [id])

    return (
        <div>
            <Header />

            <section className="main__topic">
                <div className="box__topic">
                    <div className="img__topic">
                        <img src="../../image/family.PNG" />
                    </div>
                    <div className="desc__topic">
                        <h2 className="title__topic">Gia đình</h2>
                        <p>
                            Trong bài học này, bạn sẽ học các kỹ thuật khác nhau để thành thạo
                            các từ ngữ về gia đình.
                        </p>
                        <button>12%</button>
                    </div>
                </div>
            </section>
            <section className='box__video__topic'>
                <h2 className='title__video__topic'>
                    Phần 1.1
                </h2>
                <p >
                    video
                </p>
                <div className="video__leaning">
                    <iframe width="100%" height="720" src="https://www.youtube.com/embed/NBS7OlWbgS4" title="Luyện nghe tiếng Anh thụ động-IELTS|I'm Mary" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                </div>

                <div className="box__btn__video">
                    <button className='btn__previous'><i className="fa-solid fa-angle-left"></i>Previous</button>
                    <button className='btn__next'>Next <i className="fa-solid fa-angle-right"></i></button>
                </div>
            </section>
            <section className="box__review">
                <h2 className="title__review">Chọn cách luyện tập</h2>
                <div className="list__detail__learning">
                    <Link to={`/learning/detailLearning/${id}/speak`} >
                        <div className="item__detail__learning">
                            <img src="../../image/phat am.PNG" />
                            <h4>Phát âm</h4>
                        </div>
                    </Link>
                    <Link to={`/learning/detailLearning/${id}/quiz`} >
                        <div className="item__detail__learning">
                            <img src="../../image/nghe viet.PNG" />
                            <h4>Trắc Nghiệm</h4>
                        </div>
                    </Link>
                    <Link to={`/learning/detailLearning/${id}/writeAndListen`} >
                        <div className="item__detail__learning">
                            <img src="../../image/quiz.PNG" />
                            <h4>Nghe</h4>
                        </div>
                    </Link>


                </div>
            </section>

            <Footer />
        </div>
    )
}

export default DetailLearning