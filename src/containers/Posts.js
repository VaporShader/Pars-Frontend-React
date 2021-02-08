import React from 'react';
import PostCard from '../components/PostCard';
import axios from 'axios';


export default class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount(prevProps) {
        // Typical usage (don't forget to compare props):
        axios.get('http://127.0.0.1:8000/api/').then(res => {
            this.setState({ posts: res.data })
        })

    }

    render() {
        //const [, set] = React.useState();
        const posts = this.state.posts.map((data, index) => <PostCard inputData={data} key={index} />)
        return (
            <>
                {posts}
            </>
        )
    }
}