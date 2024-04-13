import React, { useState } from 'react'

export default function TwitterCard({name, userName, url, addAr, initialIsFollowing}) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true)
  }

  const handleMouseLeft = () => {
    setIsHovering(false)
  }

  const handleFollowing = () => {
    setIsFollowing(!isFollowing);
  }

  let text = isFollowing ? 'Following' : 'Follow'
  if(isFollowing && isHovering) {
    text = 'Unfollow'
  }
  let button = isFollowing ? 'tw-follow-card-button is-following' : 'tw-follow-card-button'
  return (
    <article>
      <header>
        <img src={`/${url}`} alt="photo" />
        <div>
          <strong>{name}</strong>
          <span>{addAr(userName)}</span>
        </div>
      </header>
      <aside>
        <button onClick={handleFollowing}
         className={button}
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeft}
         >
          {text}
        </button>
      </aside>
    </article>
  )
}
