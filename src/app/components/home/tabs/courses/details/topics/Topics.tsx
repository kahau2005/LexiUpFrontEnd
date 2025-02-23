import TopicCard from '@/app/components/home/tabs/courses/details/topics/TopicCard'
import HorizontalCardView from '@/app/components/HorizontalCardView'
import React from 'react'


export default function Topics() {
  const topics = [
    {
      name: 'Cambrige 10',
      img: '/images/topic_demo.jpg',
      total_words: 1000,
      words_learned: 580
    },
    {
      name: 'Cambrige 11',
      img: '/images/topic_demo.jpg',
      total_words: 1000,
      words_learned: 450
    },
    {
      name: 'Cambrige 12',
      img: '/images/topic_demo.jpg',
      total_words: 1000,
      words_learned: 500
    },
    {
      name: 'Cambrige 13',
      img: '/images/topic_demo.jpg',
      total_words: 1000,
      words_learned: 990
    },
    {
      name: 'Cambrige 14',
      img: '/images/topic_demo.jpg',
      total_words: 1000,
      words_learned: 1000
    },
    {
      name: 'Cambrige 15',
      img: '/images/topic_demo.jpg',
      total_words: 1000,
      words_learned: 300
    },
  ]
  return (
    <div className='mt-2'>
      <div className='flex justify-between items-center p-2'>
        <span className='title m-0'>All Topics</span>
        {/* <span className='text-[#a282db] text-[18px]'>View All</span> */}
      </div>
      <HorizontalCardView data={topics} CardComponent={TopicCard}/>
    </div>
  )
}
