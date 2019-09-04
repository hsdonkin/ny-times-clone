import React from 'react';

function Article (){
  return(
    <div className="article">
      <div className="article-left">
        <h2>Article Title</h2>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <div className="article-right">
        <img src="https://picsum.photos/500/300" />
      </div>
    </div>
  );
}

export default Article;
