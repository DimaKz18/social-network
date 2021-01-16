import { act, render, screen } from '@testing-library/react';
import profileReducer, { addPost, deletePost } from './profile-reducer';

let state = {
    posts: [
        {id:1, msg: "Hi!", likes: 15, img: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
        {id:2, msg: "Hello!", likes: 7, img: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
    ],
}

test('add new post, posts length should be incremented', () => {
  let action = addPost("New Post");
  let newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(3);
});

test('new post text should be correct', () => {
    let action = addPost("New Post");
    let newState = profileReducer(state, action);
    expect(newState.posts[2].msg).toBe("New Post");
});

test('after deleting post posts length should be decremented', () => {
    let action = deletePost(1);
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(1);
}); 