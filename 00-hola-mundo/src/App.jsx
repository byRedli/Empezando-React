import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App(){
    const formatUserName = (userName) => `@${userName}`
    return(
        <section className='App'>
            <TwitterFollowCard formatUserName={formatUserName} isFollowing={false} userName = "midudev" name= "Miguel Angel Duran" />
            <TwitterFollowCard formatUserName={formatUserName} isFollowing userName = "midudev" name= "Ilder Yoel Guevara Heredia AAA AAA" />
            <TwitterFollowCard formatUserName={formatUserName} isFollowing userName = "midudev" name= "Miguel Angel Duran" />
            <TwitterFollowCard formatUserName={formatUserName} isFollowing={false} userName = "midudev" name= "Miguel Angel Duran" />
            <TwitterFollowCard formatUserName={formatUserName} isFollowing userName = "midudev" name= "Miguel Angel Duran" />
            <TwitterFollowCard formatUserName={formatUserName} isFollowing userName = "midudev" name= "Miguel Angel Duran" />
        </section>
        
    )
}