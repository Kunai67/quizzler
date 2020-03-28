import React from 'react';
import { HeaderP } from '../styled/pages/quiz.components';

export default class Timer extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
            minutes: 0,
            seconds: 0
        };

        this.tick = this.tick.bind(this);
    }
    
    tick() {
        if(this.state.seconds > 60) {
            this.setState({
                minutes: this.state.minutes + 1,
                seconds: 0
            })
        } else {
            this.setState({
                seconds: this.state.seconds + 1
            })
        }
    }

    componentDidMount() {
        this.timer = setInterval(
            () => this.tick()
            , 1000
        );
    }

    componentWillUnmount() {
        this.props.recordTime(this.state.minutes, this.state.seconds);
        clearInterval(this.timer);
    }

    render() {
        return <HeaderP>{ this.state.minutes < 10 ? '0' + this.state.minutes : this.state.minutes }: { this.state.seconds < 10 ? '0' + this.state.seconds : this.state.seconds  }</HeaderP>
    }
}