import { Component } from 'react';
import './App.css';
import { PostCard } from './components/PostCard';
class App extends Component {
  state = {
    posts: []
  };
  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = async () => {
    const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts');
    const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos');

    const [posts, photos] = await Promise.all([postsResponse, photosResponse]);

    // eslint-disable-next-line no-use-before-define
    const postsAndPhotos = postsJson.map((post, index) => {
      return { ...post, cover: photosJson[index].url }
    });

    const postsJson = await posts.json();
    const photosJson = await photos.json();
    return postsAndPhotos;
  }

  render() {
    const { posts } = this.state;

    return (
      <section className="container">
        <div className="posts">
          {posts.map(post => (
            <div className="post">
              <img src={post.cover} alt={post.title} />
              <div key={post.id} className="post-content">
                <h1>{post.title}</h1>
                <p>{post.body}</p>
              </div>
            </div>
          ))}
        </div>
        <PostCard 
              key={posts.id}
              title={posts.title} 
              body={posts.body}
              id={posts.id}
              cover={posts.cover}
            />
      </section>
    );
  }
}
export default App;