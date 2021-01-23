export const HeadPost = ({ meta, isBlogPost }) => (
  <>
    {isBlogPost? <img src={meta.img} alt={meta.alt} /> :null}
    <div className={isBlogPost? 'contentDetailsNone' :'contentDetails'}>
      <h1 className={isBlogPost? 'great-title' :null}>{meta.title}</h1>
      <div className='details'>
        {isBlogPost? null: <p>{meta.description}</p>}
        <span>{meta.date}</span> •
        <span role='img' aria-label='Un Cafe'>
          ☕ {`${meta.readTime} min de lectura.`}
        </span>
        {isBlogPost? <span>• ✍🏼 <a href={meta.postBy}>@Franqsanz</a></span> :null}
      </div>
      {isBlogPost? null: <a className='aMore'>Leer más &rarr;</a>}
    </div>

    <style jsx>{`
      .contentDetails {
        padding: 1rem;
      }

      .contentDetailsNone {
        padding: 0.9rem 0 0.2rem 0;
      }

      h1 {
        font-size: 1.5rem;
        font-weight: 700;
        margin-top: 0;
        color: var(--colorWhite);
      }

      .great-title {
        font-size: 2rem;
      }

      .details {
        margin-bottom: 1rem;
        font-size: 0.9rem;
      }

      .aMore {
        color: var(--goldDark);
        font-size: 1.14rem;
        font-weight: bold;
        border-bottom: none;
      }

      @media (prefers-color-scheme: light) {
        h1 {
          color: var(--colorGray);
        }

        .details {
          color: #464646;
        }

        h1 {
          color: var(--colorGray);
        }

        .aMore {
          color: #1c6d9f;
        }
      }

      @media (prefers-color-scheme: dark) {
        .details {
          color: #bdbdbd;
        }
      }

      span {
        margin: 0.4rem;
      }

      .details {
        margin-bottom: 1rem;
      }

      @media (max-width: 425px) {
        .great-title {
          font-size: 1.6rem;
        }
      }
    `}</style>
  </>
)
