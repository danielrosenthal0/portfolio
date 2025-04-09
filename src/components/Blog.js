import { Fragment } from "react";
import classes from "./Blog.module.css";
import FadeInOnScroll from "./UI/FadeInOnScroll";
import Card from "./UI/Card";

const POSTS = [
  {
    id: "p1",
    title: "my first blog post",
    date: "2025-04-09",
    summary: "thought i'd make a blog so here it is. life has been pretty good - i just hit a year working at threshold and i'm still learning a ton. i've been listening to some good music and reading some good books. i started a book club at work for the dev team and it's been a lot of fun. technical books aren't always the most enjoyable but it's definitely worth grinding through them, even really old books. \n i left this site dormant for a while so it's been good to refresh my react skills as well as update some of the content. i'm currently moving a bunch of my old projects over to vercel since everything was hosted on github pages, and i think it's smart to try something new. also want to explore some of the analytics that vercel offers (even though no one is checking my site).",
  },
  
];

const Blog = () => {
  return (
    <Fragment>
      <div className={classes.content}>
        <h1>Blog</h1>
        <div className={classes.post}>
          {POSTS.map((post) => (
            <FadeInOnScroll key={post.id}>
              <Card>
                <h2>{post.title}</h2>
                <p>{post.date}</p>
                <p>{post.summary}</p>
              </Card>
            </FadeInOnScroll>
          ))}
        </div>
        
      </div>
    </Fragment>
  );
};

export default Blog;
