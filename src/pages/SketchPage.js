import React, { useEffect, useState } from 'react'
import SketchContainer from "../components/SketchContainer"
import { sketchIndex } from '../sketches'
import remarkGfm from 'remark-gfm'

import { useParams } from "react-router-dom"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"

import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';

const SketchPage = () => {
  const { slug } = useParams()
  const [markdown, setMarkdown] = useState('')
  const [sketch, setSketch] = useState({})

  useEffect(() => {
    const currSketch = sketchIndex.filter((item) => item.slug === slug)
    setSketch(currSketch[0])

    import(`../sketches/${slug}/blog.md`)
      .then(res => {
        console.log(res)
        fetch(res.default)
          .then(res => res.text())
          .then(res => setMarkdown(res))
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  }, [slug])

  return (
    <div>
      <p className="text-2xl">{sketch.name}</p>

      <div className="h-[2px] w-[100px] bg-red-400 mb-3"/>
      <p className="font-light">{sketch.description}</p>

      <div className="grid md:grid-cols-5 grid-cols-1 mt-10 gap-5">
        <div className="border-[1px] md:col-span-2 col-span-1 max-h-[520px] flex justify-center items-center">
          {sketchIndex.map((item) => (
            <div>
              {item.slug === slug && <SketchContainer  setup={item.sketch.setup} draw={item.sketch.draw} />}
            </div>
          ))}
        </div>

        <div className="md:col-span-3 col-span-1 md:mt-[-25px]">
          <ReactMarkdown
            className="markdown" 
            children={markdown} 
            remarkPlugins={[remarkGfm]}
            components={{
              code: function code({node, inline, className, children, ...props}) {
                const match = /language-(\w+)/.exec(className || '')
                return !inline && match ? (
                  <SyntaxHighlighter
                    children={String(children).replace(/\n$/, '')}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  />
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                )
              }
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default SketchPage