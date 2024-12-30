import React, { useState, useEffect } from 'react'
// Show top 10 articles from Hacker News(https://reactpractice.dev/exercise/show-top-10-articles-from-hacker-news/)

type StoryType = {
  by: string
  descendants: number
  id: number
  kids: number[]
  score: number
  text: string
  time: number
  title: string
  type: string
  url: string
}

export default function HackerNews() {
  const [storiesIds, setStoriesIds] = useState<number[]>([])
  const [storyDetails, setStoryDetails] = useState<StoryType[]>([])
  useEffect(() => {
    fetch(
      'https://hacker-news.firebaseio.com/v0/beststories.json?print=pretty&orderBy=%22$priority%22&limitToFirst=10',
    )
      .then((res) => res.json())
      .then((data) => setStoriesIds(data))
  }, [])

  const fetchStoriesById = (id: number) => {
    return new Promise((resolve, reject) => {
      fetch(
        `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`,
      )
        .then((res) => res.json())
        .then((data) => resolve(data))
    })
  }

  useEffect(() => {
    const promiseResult = Promise.all(
      storiesIds.map((id) => fetchStoriesById(id)),
    )
    promiseResult.then((data) => {
      if (data.length > 0) {
        setStoryDetails(data as typeof storyDetails)
      }
    })
    console.log(storiesIds.map((id) => fetchStoriesById(id)))
  }, [storiesIds.length])
  return (
    <div>
      <h3>Hacker News Top 10 Articles</h3>
      {storyDetails.map((item) => (
        <div>
          <a target="_blank" rel="noopener noreferrer" href={item.url}>
            {item.title}
          </a>
          <p>
            {item.score} by {item.by}
          </p>
        </div>
      ))}
    </div>
  )
}
