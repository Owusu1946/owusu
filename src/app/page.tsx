/* eslint-disable @next/next/no-html-link-for-pages, @next/next/no-img-element */
import { PortfolioControls } from '@/components/editorial/portfolio-controls';
import {
  experience,
  interests,
  profile,
  projects,
  stack,
} from '@/data/portfolio';
import {
  ArrowUpRight,
  FileText,
  Github,
  Instagram,
  LinkedIn,
  Mail,
  WhatsApp,
  XTwitter,
} from '@/components/ui/icons';
import { GithubButton } from '@/components/ui/github-button';
import { formatPostDate, getAllPosts } from '@/lib/posts';

function SectionHeading({
  id,
  index,
  children,
}: {
  id: string;
  index: string;
  children: string;
}) {
  return (
    <div className="section-heading">
      <span>{index}</span>
      <h2 id={id}>{children}</h2>
      <i aria-hidden="true" />
    </div>
  );
}

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 2);
  const stackIndex = recentPosts.length > 0 ? '05' : '04';
  const experienceIndex = recentPosts.length > 0 ? '03' : '04';

  return (
    <div className="portfolio-shell">
      <PortfolioControls />

      <main className="portfolio-main">
        <header className="portfolio-header">
          <p className="location">{profile.location}</p>
          <h1>{profile.name.toLowerCase()}</h1>
          <p className="role">
            <span aria-hidden="true">&gt;</span> {profile.role}
          </p>
          <p className="intro">{profile.summary}</p>
          <nav className="quick-links" aria-label="Contact and documents">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" title="GitHub">
              <Github aria-hidden="true" />
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <LinkedIn aria-hidden="true" />
              LinkedIn
            </a>
            <a href={profile.twitter} target="_blank" rel="noopener noreferrer" title="X (Twitter)">
              <XTwitter aria-hidden="true" />
              X(Twitter)
            </a>
            <a href={profile.instagram} target="_blank" rel="noopener noreferrer" title="Instagram">
              <Instagram aria-hidden="true" />
              Instagram
            </a>
            <a href={profile.whatsapp} target="_blank" rel="noopener noreferrer" title="WhatsApp">
              <WhatsApp aria-hidden="true" />
              WhatsApp
            </a>
            <a href={`mailto:${profile.email}`} title="Email">
              <Mail aria-hidden="true" />
              Email
            </a>
            <a href="/blog">Blog</a>
            <a href="/CV.pdf" target="_blank" rel="noopener noreferrer" title="CV">
              <FileText aria-hidden="true" />
              CV
            </a>
          </nav>
        </header>

        <section aria-labelledby="interests-heading">
          <SectionHeading id="interests-heading" index="01">
            what i like to do
          </SectionHeading>
          <ul className="interest-list">
            {interests.map((interest) => (
              <li key={interest.text}>
                <span
                  style={{ backgroundColor: interest.color }}
                  aria-hidden="true"
                />
                {interest.text}
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="projects-heading">
          <SectionHeading id="projects-heading" index="02">
            selected work
          </SectionHeading>
          <div className="project-list dim-list">
            {projects.map((project) => (
              <article className="project-row" key={project.title}>
                <div className="project-mark" aria-hidden="true">
                  <span>{project.mark}</span>
                  <i />
                </div>
                <div className="project-copy">
                  <div className="project-title-row">
                    <h3>{project.title}</h3>
                    {project.status === 'private' && <span>private</span>}
                  </div>
                  <p>{project.description}</p>
                  <ul aria-label={`${project.title} technologies`}>
                    {project.technologies.map((technology) => (
                      <li key={technology}>{technology}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        {recentPosts.length > 0 && (
          <section aria-labelledby="writing-heading">
            <SectionHeading id="writing-heading" index="03">
              recent writes
            </SectionHeading>
            <div className="home-blog-list blog-list">
              {recentPosts.map((post) => (
                <article key={post.slug}>
                  <a href={`/blog/${post.slug}`}>
                    <div>
                      <h3>{post.title}</h3>
                      <p>{post.description}</p>
                    </div>
                    <time dateTime={post.date}>
                      {formatPostDate(post.date)}
                    </time>
                  </a>
                </article>
              ))}
              <a className="view-all-posts" href="/blog">
                view all posts <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </section>
        )}

        <section aria-labelledby="experience-heading">
          <SectionHeading id="experience-heading" index={experienceIndex}>
            experience
          </SectionHeading>
          <div className="experience-list dim-list">
            {experience.map((item) => (
              <article key={`${item.company}-${item.role}`}>
                <div>
                  <h3>{item.role}</h3>
                  <p>{item.company}</p>
                  <small>{item.detail}</small>
                </div>
                <time>{item.period}</time>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="stack-heading">
          <SectionHeading id="stack-heading" index={stackIndex}>
            what i work with
          </SectionHeading>
          <ul className="stack-grid">
            {stack.map((item) => (
              <li
                key={item.name}
                style={{ '--stack-tone': item.tone } as React.CSSProperties}
              >
                {'icon' in item && item.icon ? (
                  // These local SVGs are below the fold and should not compete with initial content.
                  <img
                    src={item.icon}
                    alt=""
                    width="34"
                    height="34"
                    loading="lazy"
                    decoding="async"
                    aria-hidden="true"
                  />
                ) : (
                  <span aria-hidden="true">{(item as { mark?: string }).mark}</span>
                )}
                <small>{item.name}</small>
              </li>
            ))}
          </ul>
        </section>

        <footer className="portfolio-footer flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <span>
              © {new Date().getFullYear()} {profile.shortName.toLowerCase()}
            </span>
            <span className="hidden sm:inline text-muted-foreground">•</span>
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground">Love this project?</span>
              <GithubButton
                repoUrl={profile.repo}
                label="Star repo"
                variant="outline"
                size="sm"
                roundStars={true}
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub"
            >
              <Github aria-hidden="true" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <LinkedIn aria-hidden="true" />
            </a>
            <a
              href={profile.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              title="X (Twitter)"
            >
              <XTwitter aria-hidden="true" />
            </a>
            <a
              href={profile.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              title="Instagram"
            >
              <Instagram aria-hidden="true" />
            </a>
            <a
              href={profile.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              title="WhatsApp"
            >
              <WhatsApp aria-hidden="true" />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email" title="Email">
              <Mail aria-hidden="true" />
            </a>
            <a
              href="/CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open CV"
              title="CV"
            >
              <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}
