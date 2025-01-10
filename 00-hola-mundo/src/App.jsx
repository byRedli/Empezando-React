import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App(){
    // const formatUserName = (userName) => `@${userName}`
    // formatUserName={formatUserName} 
    return(
        <section className='App'>
            <TwitterFollowCard userName = "midudev"> 
                Ilder Yoel Guevara Heredia
            </TwitterFollowCard>
            <TwitterFollowCard userName = "Redli">
                Ilder Yoel Guevara Heredia
            </TwitterFollowCard>
            <TwitterFollowCard userName = "midudev">
                Ilder Yoel Guevara Heredia
            </TwitterFollowCard>
        </section>
        
    )  
}