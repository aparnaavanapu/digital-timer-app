import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component{

    state={timerMin:25,
        timerSec:0,
        isRunning:true,
        timerLimit:25
    }

    componentDidMount(){
        this.timerId=setInterval(this.tick,1000)
    }
    componentWillUnmount(){
        clearInterval(this.timerId)
    }
    tick=()=>{
        this.setState(prevState=>{
            const {timerMin,timerSec}=prevState
           
            if(timerSec===0){
                return {timerMin:timerMin-1,
                    timerSec:59
                }
            }else{
                return {timerSec:timerSec-1}
            }
    })
    }

    pauseTimer=()=>{
        clearInterval(this.timerId)
        this.setState({isRunning:false})

    }
    playTimer=()=>{
        this.setState({ isRunning: true }, () => {
            this.timerId = setInterval(this.tick, 1000);
          });

    }
    resetTimer=()=>{
        clearInterval(this.timerId)
        this.setState(
            { timerMin:this.state.timerLimit,
              timerSec: 0,
              isRunning: false,
            },
           
          );
    }
    incrementLimit=()=>{
        this.setState(prevState=>{
            const {timerLimit}=prevState
            return {timerLimit:timerLimit+1,
                timerMin:timerLimit}
            
    })

    }

    decrementLimit=()=>{
        this.setState(prevState=>{
            const {timerLimit}=prevState
            if (timerLimit > 1) {
                return {
                  timerLimit: timerLimit - 1,
                  timerMin: timerLimit - 1,
                };
              }
              return null; 
            });
            
    

    }


    render(){
        const {timerMin,timerSec,isRunning,timerLimit}=this.state
        return(
            <div className="bg-container">
                <h1 className="heading">Digital Timer</h1>
                <div className="card-container">
                    <div className="timer-container">
                        
                        <h1 className="timer-text">{String(timerMin).padStart(2, '0')} : {String(timerSec).padStart(2, '0')}</h1>
                        {isRunning?<p className="pause-paly-reset-text">Running</p>:<p className="pause-paly-reset-text">Paused</p>}
                      
                    </div>
                    <div className="buttons-container">
                        <div className="pause-reset-container">
                            {isRunning?(<div className="icon-text-container">
                                <button className="pause-play-reset-btn" onClick={this.pauseTimer}><img src="https://assets.ccbp.in/frontend/react-js/pause-icon-img.png" alt="pause-icon" className="play-pause-reset-icon" /></button><p className="pause-paly-reset-text">Pause</p>
                                </div>):
                             (<div className="icon-text-container">
                            <button className="pause-play-reset-btn" onClick={this.playTimer}><img src="https://assets.ccbp.in/frontend/react-js/play-icon-img.png" alt="play-icon" className="play-pause-reset-icon" /></button><p className="pause-paly-reset-text">Play</p>
                            </div>)}
                            <div className="icon-text-container">
                                <button className="pause-play-reset-btn" onClick={this.resetTimer}><img src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png " alt="reset-icon" className="play-pause-reset-icon" /></button>
                                <p className="pause-paly-reset-text">Reset</p>
                            </div> 
                        </div>
                        <div className="set-timer-limit-container">
                            <p  className="limit-text">Set Timer limit</p>
                            <div className="timer-limit-container">
                                <button className="inc-dec" onClick={this.decrementLimit}>-</button>
                                <p className="timer-limit">{timerLimit}</p>
                                <button className="inc-dec" onClick={this.incrementLimit}>+</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }

}

export default DigitalTimer