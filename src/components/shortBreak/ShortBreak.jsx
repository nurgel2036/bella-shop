import React from 'react'
import '../shortBreak/ShortBreak.scss'
import {AiFillStar} from 'react-icons/ai'
import {AiFillHeart} from 'react-icons/ai'
import {BsFillCartFill}from 'react-icons/bs'
import {AiFillHome}from 'react-icons/ai'
import {BsFillEyeFill} from 'react-icons/bs'

import {Link} from 'react-router-dom'

import  '../shortBreak/productimg/product1.jpg'
import '../shortBreak/productimg/product2.jpg'
import '../shortBreak/productimg/product3.jpg'
import '../shortBreak/productimg/product4.jpg'

export default function ShortBreak({shortBreak}) {
  return (
    <div className='shortBreakAll'>
        <div className={shortBreak}>
            <div className="block-shortBreak">
                <Link to={'/sale__detail'}>                 
                    <span>
                        <BsFillEyeFill id='bsFillHeart'/>
                    </span>
                </Link>
            </div>
        </div>
        <div className="shortBreak-under">
            <h5>Standard Product Header</h5>
            <div className="stars">
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <span>
                <AiFillStar/>
                <AiFillStar/>
                </span>
            </div>
            <div className="paragraph-shortBreak">
                <p><span>$400.00</span><del>$425.00</del></p>
            </div>
            <div className="icons-shortBreak">
                <span><AiFillHeart/></span>
                <div className="cart-shortBreak">
                    <BsFillCartFill id='fillCart'/>
                    <p>add to cart</p>
                </div>
                <Link to={'/home'}> <span><AiFillHome/></span></Link>
            </div>
        </div>
    </div>
  )
}
