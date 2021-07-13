import React from 'react';
import Post from './Post/Post';
import './MyPosts.css'
import { Field, reduxForm, reset } from 'redux-form'
import { maxLengthCreator, requiredField } from '../../../validators/validators';
import { Textarea } from '../../FormControls/FormControls';


const maxLength10 = maxLengthCreator(10);

const MyPosts = React.memo((props) => {
  let postsElements = props.profilePage.posts.map( p => <Post key={p.id} msg={p.msg} likes={p.likes} img={p.img}/>)

  let newPost = React.createRef();

  let onAddPost = (values, dispatch) => {
    props.addPost(values.newPost);
    dispatch(reset('addPost'))
  }
  return (
    <div className="my-posts">
        <AddPostFormRedux onSubmit={onAddPost} />
        {postsElements}
    </div>
  );
});

const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder='Enter your post' name='newPost' component={Textarea} validate={[requiredField, maxLength10]}/>
      </div>
      <div>
        <button>Add Post</button>
      </div>
    </form>
  );
};

const AddPostFormRedux = reduxForm ({form: 'addPost'})(AddPostForm);

export default MyPosts;
