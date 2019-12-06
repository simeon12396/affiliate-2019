import React from 'react';
import { CasinoContentWrapper, CoupleBox, CasinosContainer, CasinoContentWrapperLine } from '../styles/CasinoContent';

const CasinoContent = () => {
    const casinoUrl = 'https://winbet.bg/bg/casino/all';
    const liveCasinoUrl = 'https://winbet.bg/bg/livecasino/all-live';

    return(
        <CasinoContentWrapperLine>
            <CasinoContentWrapper>
                <CoupleBox text>
                    <h4>Нашите продукти</h4>

                    <p>Станете част от семейството на Winbet и се възползвайте от шанса за допълнителна печалба!</p>
                </CoupleBox>

                <CasinosContainer>
                    <CoupleBox>
                        <a href={casinoUrl} target="_blank">
                            <span>казино</span>

                            <object alt="Casino Live">
                                <svg xmlns="http://www.w3.org/2000/svg" height="512px" viewBox="0 -46 512 512" width="512px"><path d="m76 180h30v9.027344c-19.394531 21.574218-30 49.171875-30 78.398437v17.574219h30v-17.574219c0-23.351562 9.09375-45.304687 25.605469-61.820312l4.394531-4.390625v-51.214844h-90v45h30zm0 0" fill="#5d5d5d"/><path d="m241 195v-15h30v9.027344c-19.394531 21.574218-30 49.171875-30 78.398437v17.574219h30v-17.574219c0-23.351562 9.09375-45.304687 25.605469-61.820312l4.394531-4.390625v-51.214844h-90v45zm0 0" fill="#5d5d5d"/><path d="m406 195v-15h30v9.027344c-19.394531 21.570312-30 49.167968-30 78.398437v17.574219h30v-17.574219c0-23.351562 9.09375-45.304687 25.605469-61.820312l4.394531-4.390625v-51.214844h-90v45zm0 0" fill="#5d5d5d"/><path d="m0 420h512c0-12.460938 0-407.601562 0-420h-512zm482-330.011719v240.011719h-121v-240.011719zm-151 240.011719h-150v-240.011719h150zm-180 0h-121v-240.011719h121zm331 60h-452v-30h452zm0-360.011719v30.011719h-452v-30.011719zm0 0" fill="#5d5d5d"/></svg>
                            </object>
                        </a>
                    </CoupleBox>

                    <CoupleBox>
                        <a href={casinoUrl} target="_blank">
                            <span>спорт</span>

                            <object alt="Casino Live">
                                <svg xmlns="http://www.w3.org/2000/svg" height="512px" version="1.1" viewBox="0 0 512.00099 512" width="512px">
                                    
                                <g id="surface1">
                                    <path d="M 497 36.953125 L 431.296875 36.953125 C 431.535156 29.675781 431.667969 22.355469 431.667969 15 C 431.667969 6.714844 424.949219 0 416.667969 0 L 95.332031 0 C 87.050781 0 80.332031 6.714844 80.332031 15 C 80.332031 22.355469 80.464844 29.675781 80.703125 36.953125 L 15 36.953125 C 6.714844 36.953125 0 43.667969 0 51.953125 C 0 119.164062 17.566406 182.574219 49.460938 230.507812 C 80.988281 277.894531 122.984375 305.074219 168.351562 307.71875 C 178.636719 318.910156 189.507812 328.035156 200.832031 334.996094 L 200.832031 401.664062 L 175.667969 401.664062 C 145.246094 401.664062 120.5 426.414062 120.5 456.832031 L 120.5 481.996094 L 119.433594 481.996094 C 111.148438 481.996094 104.433594 488.714844 104.433594 496.996094 C 104.433594 505.28125 111.148438 511.996094 119.433594 511.996094 L 392.566406 511.996094 C 400.851562 511.996094 407.566406 505.28125 407.566406 496.996094 C 407.566406 488.714844 400.851562 481.996094 392.566406 481.996094 L 391.5 481.996094 L 391.5 456.832031 C 391.5 426.414062 366.753906 401.664062 336.332031 401.664062 L 311.167969 401.664062 L 311.167969 334.996094 C 322.492188 328.039062 333.367188 318.910156 343.652344 307.71875 C 389.015625 305.074219 431.011719 277.894531 462.542969 230.507812 C 494.4375 182.574219 512 119.164062 512 51.953125 C 512 43.667969 505.285156 36.953125 497 36.953125 Z M 74.4375 213.890625 C 48.128906 174.355469 32.671875 122.644531 30.316406 66.953125 L 82.378906 66.953125 C 87.789062 135.414062 103.859375 198.695312 128.976562 248.925781 C 132.976562 256.925781 137.160156 264.484375 141.5 271.601562 C 116.550781 262.179688 93.460938 242.484375 74.4375 213.890625 Z M 361.5 456.832031 L 361.5 482 L 150.5 482 L 150.5 456.832031 C 150.5 442.957031 161.789062 431.664062 175.667969 431.664062 L 336.332031 431.664062 C 350.210938 431.664062 361.5 442.957031 361.5 456.832031 Z M 281.167969 401.664062 L 230.832031 401.664062 L 230.832031 348.03125 C 239.078125 350.203125 247.480469 351.332031 256 351.332031 C 264.519531 351.332031 272.921875 350.203125 281.167969 348.03125 Z M 290.457031 312.34375 C 289.78125 312.621094 289.132812 312.957031 288.511719 313.328125 C 277.910156 318.601562 267.015625 321.332031 256 321.332031 C 244.988281 321.332031 234.097656 318.601562 223.5 313.335938 C 222.871094 312.957031 222.21875 312.621094 221.535156 312.335938 C 209.773438 306.117188 198.394531 296.726562 187.632812 284.386719 C 187.066406 283.578125 186.429688 282.832031 185.722656 282.152344 C 175.039062 269.46875 164.988281 253.867188 155.808594 235.507812 C 128.242188 180.378906 112.320312 107.890625 110.507812 30 L 401.492188 30 C 399.675781 107.890625 383.753906 180.382812 356.191406 235.507812 C 347.011719 253.867188 336.960938 269.46875 326.28125 282.152344 C 325.570312 282.832031 324.925781 283.582031 324.363281 284.390625 C 313.601562 296.734375 302.21875 306.121094 290.457031 312.34375 Z M 437.5625 213.890625 C 418.539062 242.484375 395.449219 262.179688 370.5 271.601562 C 374.839844 264.484375 379.023438 256.925781 383.023438 248.925781 C 408.140625 198.695312 424.207031 135.414062 429.621094 66.953125 L 481.683594 66.953125 C 479.328125 122.644531 463.871094 174.355469 437.5625 213.890625 Z M 437.5625 213.890625 " stroke="#5d5d5d" fill="#5d5d5d"/>
                                </g>
                                </svg>
                            </object>
                        </a>
                    </CoupleBox>

                    <CoupleBox>
                        <a href={liveCasinoUrl} target="_blank">
                            <span>казино на живо</span>

                            <object alt="Casino Live">
                                <svg xmlns="http://www.w3.org/2000/svg" height="512px" viewBox="0 -9 512.00093 512" width="512px"><path d="m490.085938 103.722656-204.503907-99.773437c-19.34375-9.4375-42.753906-1.378907-52.191406 17.964843l-5.164063 10.582032h-189.199218c-21.519532 0-39.027344 17.507812-39.027344 39.03125v104.121094c0 5.523437 4.476562 10 10 10s10-4.476563 10-10v-104.121094c0-10.492188 8.535156-19.03125 19.027344-19.03125h227.546875c10.492187 0 19.027343 8.539062 19.027343 19.03125v351.832031c0 10.492187-8.535156 19.027344-19.027343 19.027344h-227.542969c-10.492188 0-19.03125-8.535157-19.03125-19.027344v-167.691406c0-5.523438-4.476562-10.003907-10-10.003907s-10 4.480469-10 10.003907v167.691406c0 21.519531 17.507812 39.027344 39.03125 39.027344h205.792969l56.769531 27.695312c5.496094 2.683594 11.316406 3.949219 17.050781 3.949219 14.464844 0 28.382813-8.0625 35.140625-21.910156l154.269532-316.210938c9.433593-19.339844 1.375-42.753906-17.96875-52.1875zm-.007813 43.417969-154.269531 316.210937c-4.601563 9.429688-16.015625 13.355469-25.445313 8.757813l-27.363281-13.347656c10.320312-4.800781 18.234375-14.160157 21.222656-25.140625.910156-3.335938 1.382813-6.800782 1.382813-10.261719v-109.039063l63.9375-22.425781c5.167969-1.8125 7.917969-7.445312 6.164062-12.636719l-36.398437-107.789062c-.855469-2.53125-2.6875-4.613281-5.089844-5.785156s-5.171875-1.335938-7.695312-.449219l-20.921876 7.335937v-101.042968c0-21.523438-17.507812-39.03125-39.027343-39.03125h-16.089844l.882813-1.8125c4.601562-9.429688 16.015624-13.355469 25.445312-8.757813l204.507812 99.769531c9.425782 4.601563 13.355469 16.015626 8.757813 25.445313zm-184.476563 145.984375v-99.359375l17.996094-6.3125 30 88.839844zm0 0" fill="#5d5d5d"/><path d="m1.691406 221.449219c2.273438 3.472656 6.722656 5.183593 10.738282 4.148437 3.984374-1.023437 7.042968-4.449218 7.507812-8.554687.46875-4.144531-1.765625-8.265625-5.515625-10.105469-3.808594-1.871094-8.480469-1.109375-11.492187 1.894531-3.335938 3.324219-3.847657 8.707031-1.238282 12.617188zm0 0" fill="#5d5d5d"/><path d="m242.777344 120.980469v-31.414063c0-5.523437-4.480469-10-10-10-5.523438 0-10.003906 4.476563-10.003906 10v31.410156c0 5.523438 4.480468 10.003907 10.003906 10.003907 5.519531 0 10-4.480469 10-10zm0 0" fill="#5d5d5d"/><path d="m82.828125 405.269531v-31.414062c0-5.523438-4.476563-10-10-10s-10 4.476562-10 10v31.414062c0 5.519531 4.476563 10 10 10s10-4.480469 10-10zm0 0" fill="#5d5d5d"/><path d="m127.652344 291.929688c5.214844 0 10.332031-.949219 15.128906-2.734376v21.816407h-21.523438c-5.523437 0-10 4.476562-10 10 0 5.523437 4.476563 10 10 10h62.824219c5.523438 0 10-4.476563 10-10 0-5.523438-4.476562-10-10-10h-21.300781v-21.8125c4.796875 1.785156 9.910156 2.730469 15.125 2.730469 23.871094 0 43.320312-19.304688 43.554688-43.117188.429687-6.398438-.902344-38.59375-62.851563-83.0625-3.484375-2.503906-8.179687-2.503906-11.664063 0-59.828124 42.945312-63.039062 74.363281-62.832031 81.917969-.015625.234375-.023437.46875-.023437.703125.003906 24.019531 19.542968 43.558594 43.5625 43.558594zm-23.546875-44.832032c-.011719-.242187-.546875-23.734375 48.671875-60.8125 47.003906 35.425782 48.6875 58.710938 48.730468 61.011719-.089843.464844-.042968.46875-.042968 1.074219 0 12.992187-10.566406 23.558594-23.558594 23.558594-6.71875 0-13.144531-2.910157-17.632812-7.988282-3.921876-4.441406-11.070313-4.4375-14.988282 0-4.488281 5.078125-10.914062 7.988282-17.632812 7.988282-12.917969 0-23.4375-10.445313-23.558594-23.332032.015625-.230468.027344-.457031.027344-.691406.007812-.273438 0-.535156-.015625-.808594zm0 0" fill="#5d5d5d"/><path d="m450.703125 139.394531c-4.976563-2.394531-10.953125-.308593-13.351563 4.667969l-13.636718 28.296875c-2.398438 4.976563-.3125 10.953125 4.664062 13.351563 1.402344.675781 2.878906.992187 4.335938.992187 3.71875 0 7.292968-2.082031 9.015625-5.660156l13.640625-28.296875c2.398437-4.976563.308594-10.953125-4.667969-13.351563zm0 0" fill="#5d5d5d"/></svg>
                            </object>
                        </a>
                    </CoupleBox>
                </CasinosContainer>
            </CasinoContentWrapper>
        </CasinoContentWrapperLine>
    )
};

export default CasinoContent;