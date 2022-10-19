import React, {useState,useEffect} from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { detailDayIdGrammmar } from '../../api/grammar';
import { GammarType } from '../../types/grammar';
import parse from 'html-react-parser';
const LessonGrammar = () => {
  const [grammar, setGrammar] = useState<any>();
  const {dayId} = useParams();
  useEffect(() => {
    const getData = async () => {
      const {data} = await detailDayIdGrammmar(dayId);
      setGrammar(data)
    }
    getData();
  },[])
  console.log("grammar",grammar);
  
  return (
    <div className="content__grammar">
      <h3 className="title__content__grammar">
      {grammar?.name}
      </h3>
      <div className="structure__exercise__grammar">
      {parse(grammar?.description)}

        <div className="attention__grammar">
          <h3 className="title__structure__exercise__grammar">
            III. Tóm tắt
          </h3>
          <div className="note__attention">
            <p>
               {grammar?.summary}
            </p>
          </div>
        </div>
      </div>
      <div className="next__page__grammar">
        <button>
          <NavLink to={'/learning/detailLearning/exercise'} className='text-white hover:text-white'>
            Bài tập
          </NavLink>
        </button>
      </div>
    </div>
  )
}

export default LessonGrammar