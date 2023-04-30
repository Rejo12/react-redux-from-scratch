import React, { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom'
import { connect } from 'react-redux';
import { fetchPostById, clearSelectedPost } from '../../Action.js/InterviewAction';
import { createNewState } from '../../Reusable/hooks';

const Details = (props) => {
    const params = useParams();
    const location = useLocation();
    //console.log({ newState })
    console.log({ props })
    const [newState, setNewState] = createNewState(props.selectedPost || {}, ['title', 'body'], {})
    useEffect(() => {
        props.fetchPostById(params.postId)
        return () => {
            props.clearSelectedPost()
        }
    }, [])

    const handleChange = (field, e) => {
        console.log("key pressed", e.target.value)
        setNewState({ ...newState, [field]: e.target.value })
    }
    // TO DO : understand this
    console.log(newState.title, newState.title ? (newState.title.length == 0 ? 'text-box' : 'text-box error') : 'text-box-default')
    return (
        <>
            <h2>{params.postId}</h2>
            <hr />
            <div className='form'>
                <div className='text-field'>
                    <label>Title</label>
                    <input type="text" className={(newState.title !== undefined) ? (newState.title.length === 0 ? 'text-box-error' : 'text-box') : 'text-box'} value={newState.title || ''} onChange={e => handleChange('title', e)}></input>

                </div>
                <div className='text-field'>
                    <label>Body</label>
                    <input type="text" className={(newState.body !== undefined) ? (newState.body.length === 0 ? 'text-box-error' : 'text-box') : 'text-box'} value={newState.body || ''} onChange={e => handleChange('body', e)}></input>
                </div>
            </div>
        </>
    )
}

// const ma


export default connect((state) => {
    return {
        selectedPost: state.interviewReducer.selectedPost
    }
},
    {
        fetchPostById,
        clearSelectedPost
    })(Details);