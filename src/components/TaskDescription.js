import React from "react";

const TaskDescription = () => {
  const goToGitHub = () => {
    window.open("https://github.com/jole141/b2match-task", "_blank");
  };

  return (
    <div className="jumbotron">
      <h2 className="display-4">Hello world !</h2>
      <p className="lead">
        This is simple React app that fetches the data from the selected API and
        displays cosmetic products as a table. You can find out more details by
        clicking on item displayed in table.
      </p>

      <p>This app was made using React, Redux, HTML, CSS and Bootstrap.</p>
      <p>You can find source code on my GitHub.</p>
      <button type="button" className="btn btn-dark" onClick={goToGitHub}>
        GitHub
      </button>
    </div>
  );
};

export default TaskDescription;
