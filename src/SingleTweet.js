function SingleTweet({writer, date, content}) {
    return (
      <>
        <div>{writer}</div>
        <div>{date}</div>
        <div>{content}</div>
      </>
    );
}

export default SingleTweet;