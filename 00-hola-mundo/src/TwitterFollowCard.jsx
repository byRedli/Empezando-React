export function TwitterFollowCard ({formatUserName,userName, name, isFollowing}){
    // const imgSrc= 'https://unavatar.io/onlyfans/${userName}'
    return(
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' src={`https://unavatar.io/onlyfans/${userName}`} alt="Avatar 1" />
                <div className='tw-followCard-info'>
                    <strong className='tw-followCard-text'>{name}</strong>
                    <span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span>
                </div>
            </header>
            <aside>
                <button className='tw-followCard-button'>Seguir</button>
            </aside>
        </article>
        
    )
}