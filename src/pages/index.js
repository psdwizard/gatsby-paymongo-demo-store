import React from "react"
import { Link } from "gatsby"

export default () =>
  <div>
    <div>Hello world!</div>
    <div>
      <Link to="/sample">Sample static page under /pages folder</Link>
    </div>
    <div>
      <Link to="/blog/my-first-post">Sample blog post</Link>
    </div>
  </div>
