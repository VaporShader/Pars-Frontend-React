import React from 'react';
import PostCard from '../components/PostCard';
import ErrorCard from '../components/ErrorCard';
import axios from 'axios';


export default class PostView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: null
        }
    }

    componentDidMount(prevProps) {
        const PostID = this.props.match.params.PostID
        axios.get(`http://127.0.0.1:8000/api/${PostID}`).then(res => {
            this.setState({ post: res.data })
        }).catch(function (error) { })
    }

    render() {
        var post = (this.state.post !== null) ? <PostCard inputData={this.state.post} key={this.state.post.PostID} /> : <ErrorCard />;
        return (
            <>
                {post}
            </>
        )
    }
}