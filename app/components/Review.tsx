'use client'
import React, { useState } from 'react'
import ReviewContent from './ReviewContent'
import { FaArrowLeft } from 'react-icons/fa'
import { FaArrowRight } from 'react-icons/fa'
import { ReviewDetails } from '@/utils'

const Review = () => {
    const [selected, setSelected] = useState(0)
    const [prevDisabled, setPrevDisabled] = useState(false)
    const [nextDisabled, setNextDisabled] = useState(false)



    const showNextReviewContent = () => {
        setPrevDisabled(false)
        selected < ReviewDetails.length - 1 ?
            setSelected((current) => current + 1)
            : setNextDisabled(true)

    }
    const showPrevReviewContent = () => {
        setNextDisabled(false)
        selected === 0 ? setPrevDisabled(true) :
            setSelected((current) => current - 1)
    }

    return (
        <div className='review'>
            <div className=''>
                <ReviewContent
                    selected={selected}
                />
            </div>
            <div className="slideButtons flex gap-4 items-center mt-8">
                <div className={`bg-[rgb(19,19,19)] p-3 rounded-full ${prevDisabled ? 'opacity-10' : 'opacity-100'}`}><FaArrowLeft onClick={showPrevReviewContent} />
                </div>
                <div className={`bg-[rgb(19,19,19)] p-3 rounded-full ${nextDisabled ? 'opacity-10' : 'opacity-100'}`}><FaArrowRight onClick={showNextReviewContent} /></div>
            </div>
        </div>
    )
}

export default Review