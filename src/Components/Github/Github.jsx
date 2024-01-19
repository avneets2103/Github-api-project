import React from 'react'
import { useState } from 'react'
import { useLoaderData } from 'react-router-dom';
import useGithubDetails from '../../Hooks/useGithubDetails';
import './Github.css'

export async function loader({params}){
    const user = params.username;
    return user;
}

function Github(props) {
    const username = props.username;
    // const username = loader();
    const data = useGithubDetails(username);
    const date = new Date(data.created_at).toDateString();

    return (
        <>
            <div className="githubInfo">
                <h1>My github username is <a href="https://github.com/avneets2103" target='_blank' className='username'>{username}</a></h1>
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

export default Github
