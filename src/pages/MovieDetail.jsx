import React from 'react'
import movie_img from '../img/img.png';

export default function MovieDetail() {
    return (
        <div className="page-container" style={{fontSize: '32px'}}>
            <img src={movie_img} alt="트랜스포머:비스트의 서막" />
            <div className='story-box'>
            <h4>[Story]</h4>
            <p>전 우주의 행성을 집어삼키는 절대자, ‘유니크론’의 부하 
‘스커지’는 ‘테러콘’들을 이끌고 지구에 당도한다. 
그에 맞서기 위해 지구에 정체를 숨기고 있던 트랜스포머 
‘오토봇’ 군단이 모습을 드러내고 
또 다른 트랜스포머 진영인 ‘맥시멀’과 힘을 합친다.  

옵티머스 프라임이 이끄는 ‘오토봇’과
옵티머스 프라이멀을 중심으로 한 ‘맥시멀’.
모두의 운명을 건 그들의 압도적 전투가 시작된다!</p>
</div>
        </div>
    )
}