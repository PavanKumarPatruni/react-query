import usePosts from "../apiHooks/usePosts";

const Posts = () => {
  const { data, isLoading, error } = usePosts();

  // const onFetchPostsClick = useCallback(() => {
  //   getPosts();
  // }, []);

  return (
    <>
      {/* <button onClick={onFetchPostsClick}>Fetch Posts</button> */}

      {isLoading && <p>Loading</p>}

      {data && data?.length > 0 && !isLoading && (
        <div>
          {data?.map((item) => (
            <p key={item.id}>{item.title}</p>
          ))}
        </div>
      )}

      {error && !isLoading && <p style={{ color: "red" }}>{error.message}</p>}
    </>
  );
};

export default Posts;
