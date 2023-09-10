import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { w3cwebsocket as W3CWebSocket } from 'websocket';
import { Card, Avatar, Input, Typography } from 'antd';
// import 'antd/antd.css';
import './index.css'


const client = new W3CWebSocket('ws://localhost:8000');
const { Search } = Input;
const { Text } = Typography;
const { Meta } = Card;


export default class App extends Component {

    state = {
        userName: "",
        isLoggedIn: false,
        searchVal: "",
        messages: []
    }

    onButtonClicked (value) {
        client.send(JSON.stringify({
            type: 'message',
            msg: value,
            user: this.state.userName
        }));
        this.setState({searchVal: ""})
    }

    componentDidMount () {
        client.onopen = () => {
            console.log("Websocket client connected");            
        };

        client.onmessage = (message) => {
            const dataFromServer = JSON.parse(message.data);
            console.log('Got reply!', dataFromServer);

            if (dataFromServer.type === "message") {
                this.setState(state => ({
                    messages: [...state.messages, {
                        msg: dataFromServer.msg,
                        user: dataFromServer.user
                    }]
                }));
            }
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.isLoggedIn ?
                        <div className='main'>
                            <div className='title'>
                                <Text type='secondary' style={{fontSize: "36px"}}>Websocket Chat</Text>
                            </div>
                            <div style={{display: "flex", flexDirection: "column", paddingBottom: "2px", height: "150%"}}>
                                {this.state.messages.map(message => 
                                    <Card key={message.msg} style={{width: "300px", margin: "16px 4px 0 4px", alignSelf: this.state.userName === message.user ? "flex-end" : "flex-start"}}>
                                        <Meta 
                                            avatar={
                                                <Avatar style={{color: "#f56a00", backgroundColor: "#fde3cf"}}/>
                                                }
                                            title={message.user}
                                            description={message.msg}
                                        />
                                    </Card>
                                )
                                }
                            </div>
                            <div className='bottom'>
                                <Search
                                    placeholder='Input Message and Send'
                                    enterButton='Send'
                                    value={this.state.searchVal}
                                    size='large'
                                    onChange={(e) => this.setState({searchVal: e.target.value})}
                                    onSearch={value => this.onButtonClicked(value)}
                                />
                            </div>
                        </div> 
                        : 
                        <div style={{padding: "200px 40px"}}>
                            <Search
                                placeholder='Enter Username'
                                enterButton='Login'
                                size='large'
                                onSearch={value => this.setState({isLoggedIn: true, userName: value})}
                            />
                        </div>
                    }
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById("root"));