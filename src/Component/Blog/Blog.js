import React from "react";

const Blog = () => {
  return (
    <div>
      <h1>Our Blog Question</h1>

      <div>
        <h2>Q1:What is Cors? </h2>
        <p>
          Ans: CORS stands for Cross-Origin Resource Sharing. It allows us to
          relax the security applied to an API. This is done by bypassing the
          Access-Control-Allow-Origin headers, which specify which origins can
          access the API. In other words, CORS is a browser security feature
          that restricts cross-origin HTTP requests with other servers and
          specifies which domains access your resources. An API is a set
          procedure for two programs to communicate. This means that API
          resources are consumed by other clients and servers.The client and the
          server have the same origin. In this example, accessing resources will
          be successful. You’re trying to access resources on your server, and
          the same server handles the request.
        </p>
      </div>
      <div>
        <h2>
          Q2:Why are using firebase? What Other option do you have implement
          authentication ?
        </h2>
        <p>
          Ans : ndeed, Firebase is a less technical and time-saving alternative
          to writing full-fledged backend code for dynamic apps. You might also
          want to consider leveraging this tool if you eventually wish to host
          and manage your app in the cloud. Being serverless, Firebase removes
          the need to worry about the technicalities of cloud server
          configuration Authentication is used by a server when the server needs
          to know exactly who is accessing their information or site.
          Authentication is used by a client when the client needs to know that
          the server is system it claims to be. In authentication, the user or
          computer has to prove its identity to the server or client. Usually,
          authentication by a server entails the use of a user name and
          password. Other ways to authenticate can be through cards, retina
          scans, voice recognition, and fingerprints{" "}
        </p>
      </div>
      <div>
        <h2>How does private router work?</h2>
        <p>
          Ans: PrivateRoute component is the blueprint for all private routes in
          the application. If the user is logged in, go on and display the
          component in question; otherwise, redirect the user to sign-in page.
          Additionally, we can define the logic of isLogin utility function
          separately in utils folder.Private Routes vary based on the Apps, For
          example, Dashboard, User Profile, App Settings, Home etc. In simple
          words, These routes can be accessed only after login. The constraints
          for Public and Private routes are that Public routes should not be
          accessed after login and Private routes should not be accessible
          before login. In this article, we can see. How to create public and
          private routes using react-router for your react apps. Let's start
        </p>
      </div>
    </div>
  );
};

export default Blog;
