import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className='mb-8 text-2xl font-semibold tracking-tighter'>
        Hey there 👋
      </h1>
      <p className='mb-4'>
        I'm Alisa Bhusal, a passionate Information Technology graduate based in
        Sydney with a strong foundation in software testing . With hands-on
        experience as a Software Test Engineer, I've honed my skills in ensuring
        software quality, identifying bugs, and collaborating with
        cross-functional teams to deliver high-quality products.
      </p>

      <p className='mb-4'>
        Currently, I'm further expanding my technical expertise through ongoing
        studies in Full Stack Development, where I'm diving deeper into frontend
        and backend technologies, as well as building innovative projects that
        showcase my coding abilities and problem-solving skills.
      </p>

      <p className='mb-4'>
        I find joy in developing software using React, Next.js, Node.js, and
        Express. However, I'm eager to expand my skills by learning and applying
        various technology stacks.
      </p>

      <p className='mb-4'>
        Beyond my technical background, I bring valuable experience as an
        Assistant Strata Manager, where I've developed strong project
        management, communication, and problem-solving skills. This diverse
        experience has equipped me with a unique blend of technical and soft
        skills, making me well-equipped to thrive in dynamic and collaborative
        software engineering environments.
      </p>

      <p className='mb-b'>
        I'm eager to leverage my multifaceted background to contribute to
        innovative projects and solutions in the software engineering field.
        Let's connect and explore opportunities to collaborate!
      </p>
      <div className='my-8'>
        <BlogPosts />
      </div>
    </section>
  )
}
