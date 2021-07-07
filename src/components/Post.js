import React, { useState, useEffect } from "react"
import sanityClient from "../client.js"

export default function Post() {
  const [postData, setPost] = useState(null)

  useEffect(() => {
    sanityClient.fetch(`*[_type == "post"]{
      title,
      slug,
      mainImage{
        asst->{
          _id,
          url
        },
        alt
      }
    }`)
    .then((data) => setPost(data))
    .catch(console.error)
  }, [])

  return (
    <main>
      <section>
        <h1>Blog Page</h1>
        <h2>Welcome</h2>
        <div>
          <article>
            <Link>
            <span>
              <img />
              <span>
                <h3>

                </h3>
              </span>
            </span>
            </Link>
          </article>
        </div>
      </section>
    </main>
  )

  
}