import { Swiper, SwiperSlide } from 'swiper/react'; 

import styled from 'styled-components';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/bundle';
const StyledDiv = styled.div
`

<style>
*,
::after,
::before {
    box-sizing: border-box;
}

[_ngcontent-ng-cli-universal-c85].category-wrapper {
    position: sticky;
    position: -webkit-sticky;
    overflow: hidden;
    top: 56px;
    z-index: 3;
    background: #fff;
    margin-bottom: 1.42rem;
    
}

/* @media all and (min-width:768px) */
[_ngcontent-ng-cli-universal-c85].category-wrapper {
    top: 102px;
    margin-bottom: 2.14rem;
    padding-top: 0.57rem;
}

/* @media all and (min-width:768px) */
[_ngcontent-ng-cli-universal-c85].item-list-wrapper {
    padding: 0 0 .71428571rem;
}

article,
aside,
dialog,
figcaption,
figure,
footer,
header,
main,
nav,
section {
    display: block;
}

/* @media all and (min-width:992px) */
:not(.footer-without-link).wrapper main {
    min-height: calc(100vh - 445px);
}

body,
dl,
h1,
h2,
h3,
h4,
h5,
h6,
li,
ol,
p,
ul {
    margin: 0;
    padding: 0;
}

body {
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 1rem;
    line-height: 20px;
    color: #202124;
    background: #fff;
}

/* @media all and (min-width:992px) */
body {
    font-size: 1.07rem;
}

html {
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: transparent;
    font-size: 14px;
}

body,
html {
    height: 100%;
}

.position-relative {
    position: relative;
}

.container {
    width: 100%;
    padding: 0 1.07142857rem;
    margin: 0 auto;
}

/* @media all and (min-width:1200px) */
.container {
    max-width: 1200px;
}

dl,
li,
ol,
ul {
    list-style-type: none;
  
}

[_ngcontent-ng-cli-universal-c85].category-wrapper ul[_ngcontent-ng-cli-universal-c85] {
    overflow-x: auto;
    white-space: nowrap;
    text-align: center;
    justify-content: space-evenly;
    border-bottom: 1px solid #ccc;
    line-height: 35px;
}

/* @media all and (min-width:992px) */
[_ngcontent-ng-cli-universal-c85].category-wrapper ul[_ngcontent-ng-cli-universal-c85] {
    overflow-x: hidden;
}

/* @media all and (min-width:359px) */
[_ngcontent-ng-cli-universal-c85].category-wrapper ul[_ngcontent-ng-cli-universal-c85] {
    border-bottom: 1px solid #ccc;
    font-size: 1.57rem;
    line-height: 35px;
}

.switch::after,
.with-arrow::after,
.with-left-arrow::before {
    padding: .21428571rem;
    display: inline-block;
    content: "";
}

.switch::after,
.with-arrow::after {
    border: solid #000;
    border-width: 0 2px 2px 0;
    margin-left: 0.42rem;
    -ms-transform: rotate(-45deg);
    transform: rotate(-45deg);
}

[_ngcontent-ng-cli-universal-c75].category-next,
[_ngcontent-ng-cli-universal-c75].category-prev {
    position: absolute;
    top: calc(50% - 22px);
    cursor: pointer;
    padding: .71428571rem 0 .71428571rem .71428571rem;
    background-image: linear-gradient(90deg, rgba(0, 0, 0, 0) 0, #fff 40%, #fff);
}


[_ngcontent-ng-cli-universal-c75].category-next {
    right: 0px;
}

[_ngcontent-ng-cli-universal-c85].category-wrapper ul[_ngcontent-ng-cli-universal-c85] li[_ngcontent-ng-cli-universal-c85] {
    display: inline-block;
    width: auto;
    white-space:nowrap;
    vertical-align: top;
}

/* @media all and (min-width:359px) */
[_ngcontent-ng-cli-universal-c85].category-wrapper ul[_ngcontent-ng-cli-universal-c85] li[_ngcontent-ng-cli-universal-c85] {
    text-transform: uppercase;
    width: auto;
    margin: 0 2.14285714rem;
}

a {
    color: #202124;
    text-decoration: none;
    cursor: pointer;
    transition: color .2s linear;
}

[_ngcontent-ng-cli-universal-c85].category-wrapper ul[_ngcontent-ng-cli-universal-c85] li[_ngcontent-ng-cli-universal-c85] a[_ngcontent-ng-cli-universal-c85] {
    display: inline-block;
    opacity: 0.5;
    padding-top: 0.14rem;
    cursor: pointer;
    font-weight: 700;
    font-size: 1.07rem;
    line-height: 37px;
}

/* @media all and (min-width:768px) */
[_ngcontent-ng-cli-universal-c85].category-wrapper ul[_ngcontent-ng-cli-universal-c85] li[_ngcontent-ng-cli-universal-c85] a[_ngcontent-ng-cli-universal-c85] {
    font-size: 1rem;
}

/* @media all and (min-width:320px) */
[_ngcontent-ng-cli-universal-c85].category-wrapper ul[_ngcontent-ng-cli-universal-c85] li[_ngcontent-ng-cli-universal-c85] a[_ngcontent-ng-cli-universal-c85] {
    font-family: Oswald, sans-serif;
    opacity: 1;
    color: rgba(0, 0, 0, 0.5);
    position: relative;
}

[_ngcontent-ng-cli-universal-c85].category-wrapper ul[_ngcontent-ng-cli-universal-c85] li[_ngcontent-ng-cli-universal-c85] a[_ngcontent-ng-cli-universal-c85].active {
    opacity: 1;
    color: #000;
}

/* @media all and (min-width:320px) */
[_ngcontent-ng-cli-universal-c85].category-wrapper ul[_ngcontent-ng-cli-universal-c85] li[_ngcontent-ng-cli-universal-c85] a[_ngcontent-ng-cli-universal-c85].active,
[_ngcontent-ng-cli-universal-c85].category-wrapper ul[_ngcontent-ng-cli-universal-c85] li[_ngcontent-ng-cli-universal-c85] a[_ngcontent-ng-cli-universal-c85]:hover {
    color: #000;
}

/* @media all and (min-width:320px) */
[_ngcontent-ng-cli-universal-c85].category-wrapper ul[_ngcontent-ng-cli-universal-c85] li[_ngcontent-ng-cli-universal-c85] a[_ngcontent-ng-cli-universal-c85].active::after {
    bottom: 0px;
    content: "";
    height: 5px;
    left: 50%;
    position: absolute;
    background: #e4002b;
    transition: width .3s ease 0s, left .3s ease 0s;
    width: 0px;
}

/* @media all and (min-width:320px) */
[_ngcontent-ng-cli-universal-c85].category-wrapper ul[_ngcontent-ng-cli-universal-c85] li[_ngcontent-ng-cli-universal-c85] a[_ngcontent-ng-cli-universal-c85].active::after,
[_ngcontent-ng-cli-universal-c85].category-wrapper ul[_ngcontent-ng-cli-universal-c85] li[_ngcontent-ng-cli-universal-c85] a[_ngcontent-ng-cli-universal-c85]:hover::after {
    width: 100%;
    left: 0px;
}

[_ngcontent-ng-cli-universal-c85]
</style>
`;
<style>

</style>
function Hearder() {
    return (
        <StyledDiv>
        <>
        <div class="item-list-wrapper" _ngcontent-ng-cli-universal-c85="">
                            <div class="category-wrapper" _ngcontent-ng-cli-universal-c85="">
                                <div class="container position-relative" _ngcontent-ng-cli-universal-c85="">
                                    <app-scrollable-menu _ngcontent-ng-cli-universal-c85=""
                                        _nghost-ng-cli-universal-c75="">
                                        <div class="position-relative" _ngcontent-ng-cli-universal-c75="">
                                            <ul class="ng-star-inserted" _ngcontent-ng-cli-universal-c85="">
                                                <Swiper 
                                                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                                                      
                                                        slidesPerView={6}
                                                        spaceBetween={10}
                                                        navigation={{
                                                            nextEl: '.swiper-button-next',
                                                            prevEl: '.swiper-button-prev',
                                                          }}
                                                        >
                                                    <SwiperSlide>
                                                    <li class="ng-star-inserted" _ngcontent-ng-cli-universal-c85=""><a
                                                        class="active" _ngcontent-ng-cli-universal-c85=""> Ưu Đãi </a>
                                                </li>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                    <li class="ng-star-inserted" _ngcontent-ng-cli-universal-c85=""><a
                                                        _ngcontent-ng-cli-universal-c85=""> Món Mới </a></li>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                    <li class="ng-star-inserted" _ngcontent-ng-cli-universal-c85=""><a
                                                        _ngcontent-ng-cli-universal-c85=""> Combo 1 Người </a></li>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                    <li class="ng-star-inserted" _ngcontent-ng-cli-universal-c85=""><a
                                                        _ngcontent-ng-cli-universal-c85=""> Combo Nhóm </a></li>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                    <li class="ng-star-inserted" _ngcontent-ng-cli-universal-c85=""><a
                                                        _ngcontent-ng-cli-universal-c85=""> Gà Rán - Gà Quay </a></li>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                    <li class="ng-star-inserted" _ngcontent-ng-cli-universal-c85=""><a
                                                        _ngcontent-ng-cli-universal-c85=""> Burger - Cơm - Mì Ý </a>
                                                </li>

                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                    <li class="ng-star-inserted" _ngcontent-ng-cli-universal-c85=""><a
                                                        _ngcontent-ng-cli-universal-c85=""> Thức Ăn Nhẹ </a></li>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                    <li class="ng-star-inserted" _ngcontent-ng-cli-universal-c85=""><a
                                                        _ngcontent-ng-cli-universal-c85=""> Thức Uống 
                                                    </a></li>
                                                    </SwiperSlide>
                                                    <div className="swiper-button-next" ></div>
                                                    <div className="swiper-button-prev"></div>
                                                    
                                                </Swiper>
                                                
                                               
                                               
                                               
                                               
                                                
                                                
                                               
                                               
                                            </ul>
                                            
                                            
                                        </div>
                                    </app-scrollable-menu></div>
                            </div>
                        </div>
            
        


        </>
        </StyledDiv>
    )

}
export default Hearder;