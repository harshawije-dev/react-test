const Tweet = () => {
  return (
    <div>
      <picture>
        <img src="#" alt="avatar" />
      </picture>
      <div>
        <article>
          <h2>username</h2>
          <small>time</small>
        </article>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
          accusamus perferendis. Ullam adipisci impedit labore eaque, facilis
          eum harum possimus modi rem facere fugit ipsam dicta nam tempora sit
          dolor!
        </p>
      </div>
      <div>
        <button type="button" className="btn">
          like
        </button>
        <button type="button" className="btn">
          retweet
        </button>
        <button type="button" className="btn">
          replay
        </button>
        <button type="button" className="btn">
          share
        </button>
      </div>
    </div>
  );
};

export default Tweet;
