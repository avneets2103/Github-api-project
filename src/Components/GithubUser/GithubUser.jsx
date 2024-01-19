import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom';
import useGithubDetails from '../../Hooks/useGithubDetails';
import './GithubUser.css'


function GithubUser() {
    const {username} = useParams();
    const data = useGithubDetails(username);
    const date = new Date(data.created_at).toDateString();
    const url = "https://github.com/"+username;
    return (
        <>
            <div className="githubInfo">
                <h1>Your github username is <a href={url} target='_blank' className='username'>{username}</a></h1>
                <div className="inner">
                    <img class ='profile' src={data.avatar_url} alt="me" />
                    <div className="textInner">
                        <p>Followers: <br /><span>{data.followers}</span></p>
                        <p>Repositories: <br /><span>{data.public_repos}</span></p>
                        <p>Bio: <br /><span>{data.bio}</span></p>
                        <p>On github since: <br /><span>{date}</span></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GithubUser
