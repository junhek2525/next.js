// import Image from "next/image";
// import tomato from '/public/food0.png'
'use client'
import {useState} from "react"


export default function List() {
    let 상품 = ['Tomatoes','Pizza','pasta'];
    let [수량,수량변경] = useState([0,0,0]);
    // let 어레이 = [2,3,4];
    return(
        <div>
            <h4 className="title">상품 목록</h4>
            {/* <span>{수량[0]}</span>
            <button onClick={() =>{let copy = [...수량]; copy[0]++; 수량변경(copy);}}>+</button>
            <span>{수량[1]}</span>
            <button>+</button>
            <span>{수량[2]}</span>
            <button>+</button> */}
            {
                상품.map((a,i) => {
                    return (
                        <div className="food" key={i}>
                            <img src={`/food${i}.png`} className="food-img"></img>
                            <h4>{a} 14000</h4>
                            <span>{수량 [i]}</span>
                            <button onClick={() =>{let copy = [...수량]; copy[0]++; 수량변경(copy);}}>+</button>
                        </div>
                    )
                })
            }
        </div>
    )
}
            {/* // <div className="food">
            //     <h4>{상품 [0]} 2111111118000</h4>
                
            // </div>
            // <div className="food">
            //     <h4>{상품 [1]} 14000</h4>
                
            // </div>
            // <div className="food">
            //     <h4>{상품 [2]} 28000</h4>
                
            // </div>
            
        </div> */}
    
{/* //     )
// } */}