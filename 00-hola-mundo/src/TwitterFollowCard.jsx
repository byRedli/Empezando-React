import { useState } from "react"

export function TwitterFollowCard ({children, userName}){
    const [isFollowing, setIsFollowing] = useState(false)
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ?
    'tw-followCard-button is-following' : 'tw-followCard-button'

    const handleClick = () =>{
        setIsFollowing(!isFollowing)
    }


    const altImg = `Avatar de ${userName}`
    // const imgSrc= 'https://unavatar.io/onlyfans/${userName}'
    return(
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' src={`https://unavatar.io/onlyfans/${userName}`} alt={altImg} />
                <div className='tw-followCard-info'>
                    <strong className='tw-followCard-text'>{children}</strong>
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>{text}</button>
            </aside>
        </article>
        
    )
}