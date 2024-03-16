'use client'
import axios from 'axios'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export default function Github() {
  const [contrib, setContrib] = useState({
    totalCommitContributions: 242,
    totalPullRequestContributions: 8,
    totalIssueContributions: 37,
    totalRepositoryContributions: 0,
  })
  const getGithubStats = async () => {
    try {
      const result = await axios({
        url: `https://api.github.com/graphql`,
        method: 'post',
        data: {
          query: `{
            user(login: "v1ct0r2002") {
              contributionsCollection(
                from: "2024-01-01T00:00:00Z"
                to: "2024-12-31T23:59:59Z"
              ) {
                totalCommitContributions
                totalPullRequestContributions
                totalIssueContributions
                totalRepositoryContributions
              }
            }
          }`,
        },
        headers: {
          Authorization: 'Bearer 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',
        },
      })
      if (result?.data?.data?.user?.contributionsCollection) {
        setContrib(result?.data.data.user.contributionsCollection)
      }
    } catch (error: any) {
      console.log(error.message)
    }
  }
  useEffect(() => {
    getGithubStats()
  }, [])

  return (
    <div className='mx-auto py-20 grid lg:grid-cols-4 gap-10 text-center text-4xl max-w-screen-lg'>
      <Image
        data-aos='zoom-in'
        data-aos-duration={1000}
        src='/github-white.png'
        height={100}
        width={100}
        alt='github'
        className='mx-auto'
      />
      <div>
        <div data-aos='zoom-in' data-aos-duration={1000}>
          Commit
        </div>
        <div data-aos='fade-up' data-aos-duration={1000}>
          {contrib.totalCommitContributions}
        </div>
      </div>
      <div>
        <div data-aos='zoom-in' data-aos-duration={1300}>
          Pull Request
        </div>
        <div data-aos='fade-up' data-aos-duration={1300}>
          {contrib.totalPullRequestContributions}
        </div>
      </div>
      <div>
        <div data-aos='zoom-in' data-aos-duration={1600}>
          Issue
        </div>
        <div data-aos='fade-up' data-aos-duration={1600}>
          {contrib.totalIssueContributions}
        </div>
      </div>
    </div>
  )
}
