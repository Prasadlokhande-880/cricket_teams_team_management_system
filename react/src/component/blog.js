import React from 'react';
import './blog.css';

const Blog = () => {
  return (
    <div className='blogmainDiv'>
      <p className='blogheading'>Blog</p>
      <div className='blogSubdiv'>
        <div className='blogdiv'>
          <section className='blogdivimg'>
            <img src='https://www.prokabaddi.com/static-assets/waf-images/76/9d/2e/1-1/epjAOOvvtN.jpg?v=2.07&w=1024' alt='' />
          </section>
          <section className='infoblog'>
            <p>Kabaddi</p>
            <p>
              Let’s begin with one of the best-known games of the country. A game played without any gear or equipment, it is based on pure strength and strategy. Played between two teams, the game involves a single player from each team trying to touch down and break into the area of the opponent team.
            </p>
          </section>
        </div>

        <div className='blogdiv'>
          <section className='blogdivimg'>
            <img src='https://www.sportzcraazy.com/wp-content/uploads/2018/07/Kho-Kho-Game-1200x900.jpg' alt='' />
          </section>
          <section className='infoblog'>
            <p>Kho-kho</p>
            <p>Again a team sport, Kho Kho is particularly popular in schools. The first team sits in alternating directions while the other team runs around them. The aim is for the sitting team to catch as many players from the running team as possible.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Blog;
